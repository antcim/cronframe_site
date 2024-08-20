---
sidebar_position: 1
---

# Global Job

A function annotated with the `cron` macro defines what is known as a "global job" inside cronframe.

The macro takes two attributes:
- expr
    - the cron expression to use for the job's schedule
- timeout
    - the value in ms to use for the timeout which resets daily

Let us look at an example:
```rust
#[macro_use] extern crate cronframe;

#[cron(expr="0 0 0/12 * * *", timeout="0")]
fn my_global_job(){
    println!("I run once every 12 hours every day.");
}
```

The job is defined and ready to be collected by an instance of the framework.
```rust
use cronframe::CronFrame;

fn main(){
    let cronframe = CronFrame::default();
}
```

The default function inits the framework with the default logger configuration and no filter for the type of job allowed. Any global jobs that we have definied is also automatically collected and read to be executed.

Please refer to the CronFrame instance page of the tutorial to learn more about it.

If it is not specified otherwise in a cronframe.toml file, the web server will be running at http://127.0.0.1:8098.

At this point we need to start the scheduler and decided what to do to keep main alive.

To start the scheduler we simply call the `start_scheduler` method:

```rust
use cronframe::CronFrame;

fn main(){
    let cronframe = CronFrame::default();
    cronframe.start_scheduler();

    // do stuff

    cronframe.keep_alive();
}
```
Unless we call the keep alive method, main will terminate.

If we don't need to to anything between the start_scheduler and the keep_alive methods we can use the `run' method as a shorthand for both of them.

```rust
use cronframe::CronFrame;

fn main(){
    let cronframe = CronFrame::default();
    cronframe.run(); 
    // .run() is equivalent to .start_scheduler().keep_alive()
}
```
