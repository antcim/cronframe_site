---
sidebar_position: 4
---

# Method Job

A method annotated with the `mt_job` macro defined inside the implementation block of a cron object is known as a "method job" inside cronframe.

The macro only takes one attibute:
- expr
    - the name of the field of type CronFrameExpr to use for the scheduling

As we can see, the timeout attribute is no longer present and the expr attribute is rather different.

The type CronFrameExpr contains both the cron expression and the timeout to use for the scheduling of a method job. We can have as many fields of this type as we require for scheduling jobs.

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

    let weather_job = WeatherJob::new_cron_obj("Venice".to_string(), "0 0 0/12 * * *".into());

    cronframe.cf_gather_mt(cronframe.clone()); 

    cronframe.run(); 
}
```

The function `new_cron_obj` is injected by the framework inside cron objects and allows for creating an new instance by passing as arguments variables of the same type as the fields in the order they are defined in the struct.

The function `cf_gather_mt` is injected by the framework inside cron objects, it collects all method jobs and passes them to cronframe.

Method jobs are related to an instance of the cron object rather than one of its type.

Alternatively if we wanted to collect both functions and methods jobs at the same time we could use the `cf_gather` method injected by the framework inside cron objects which is a short hand for calling both `cf_gather_fn` and `cf_gather_mt` with one function call.
