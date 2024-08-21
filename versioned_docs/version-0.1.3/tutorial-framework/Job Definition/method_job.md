---
sidebar_position: 4
---

# Method Job

:::info
CronFrame calls "method job" a method that is:
- defined inside the implementation block of a cron object
- annotated with the `mt_job` macro
:::

Method jobs are related to an instance of a cron object rather than its type.

The `mt_job` macro only takes one attibute:
- expr
    - the name of the field of type CronFrameExpr to use for the scheduling

As we can see, the timeout attribute is no longer present and the expr attribute is rather different.

:::note
The type CronFrameExpr contains both the cron expression and the timeout used for the scheduling of a method job.
:::

Cron Objects can have as many fields of CronFrameExpr type as are required for scheduling jobs.

We extend the code of the cron object defined on the previous page and add a method job to it.

```rust
#[marco_use] extern crate cronframe;

use cronframe::{CronFrame, CronFrameExpr};

#[cron_obj]
struct WeatherJob{
    city: String,
    schedule: CronFrameExpr,
}

#[cron_impl]
impl WeatherJob{
    #[fn_job(expr="0 0 0/12 * * *", timeout="0")]
    fn my_function_job(){
        println!("I run once every 12 hours every day.");
    }

    #[fn_job(expr="schedule")]
    fn my_method_job(self){
        println!("I run according to the schedule field.");
    }
}
```

Now that we have the job definition down, we need to create an instance of the cron object and passit to the framework instance so that it can run.

```rust
use cronframe::CronFrame;

fn main(){
    let cronframe = CronFrame::default();

    let weather_job = WeatherJob::new_cron_obj("Venice".to_string(), "0 0 0/12 * * * * 0".into());

    cronframe.cf_gather_mt(cronframe.clone()); 

    cronframe.run(); 
}
```

:::note
The function `new_cron_obj` is injected inside cron objects by the macros and allows for creating an new instance by passing as arguments variables of the same type as the fields in the order they are defined in the struct.
:::

:::note
The function `cf_gather_mt` is injected inside cron objects by the macros, it collects all method jobs and passes them a cronframe instance.
:::

Alternatively if we wanted to collect both functions and methods jobs at the same time we could have used the `cf_gather` method injected  inside cron objects by the macros which is a short hand for calling both `cf_gather_fn` and `cf_gather_mt` with one function call.

:::info Dropping Method Jobs
Method jobs are automatically dropped when the instance they are associated with goes out of scope.
```rust
use cronframe::CronFrame;

fn main(){
    let cronframe = CronFrame::default();

    // out of this inner scope, methods jobs get dropped along with the cron object instance
    {
        let weather_job = WeatherJob::new_cron_obj(
            "Venice".to_string(), 
            "0 0 0/12 * * * * 0".into()
        );

        cronframe.cf_gather_mt(cronframe.clone()); 
    }

    cronframe.run(); 
}
```
:::
