---
sidebar_position: 3
---

# Function Job

:::info
CronFrame calls "function job" a function that is:
- defined inside the implementation block of a cron object
- annotated with the `fn_job` macro
:::

Function jobs are related to the type rather than one of its possible instances.

The `fn_job` macro attibutes are identical to those of the cron macro:
- expr
    - the cron expression to use for the job's schedule
- timeout
    - the value in ms to use for the timeout which resets daily

Using the code of the cron object defined on the previous page, let us add a function job to it.

```rust
#[marco_use] extern crate cronframe;

use cronframe::CronFrame;

#[cron_obj]
struct WeatherJob;

#[cron_impl]
impl WeatherJob{
    #[fn_job(expr="0 0 0/12 * * *", timeout="0")]
    fn my_function_job(){
        println!("I run once every 12 hours every day.");
    }
}
```

Now that we have the job definition down, we need a framework instance where it can run, and to pass the job to it.

```rust
use cronframe::CronFrame;

fn main(){
    let cronframe = CronFrame::default();

    WeatherJob::cf_gather_fn(cronframe.clone());

    cronframe.run(); 
}
```
:::note
The function `cf_gather_fn` is injected inside cron objects by the macros and has effect only the first time it is called on a cron object type. It collects all functions jobs and passes them to a cronframe instance.
:::

:::info Dropping Function Jobs
Function jobs can be dropped by calling the `cf_drop_fn` associated function of the cron object:
```rust
WeatherJob::cf_drop_fn();
```
:::