---
sidebar_position: 3
---

# CronFrame Instance

A CronFrame instance is created with the type CronFrame in one of two ways:
- using the `init` function
- using the `default` function

Both the init and the default funciton will return an `Arc<CronFrame>`.

## Initialization
The init function takes two arguments:
- the filter
- the logger flag

The filter is of type `Option<CronFilter>`, none stands for "don't use a filter".

The `CronFilter` type is an enum that has the follwing values:
- Global
- Function
- Method
- CLI

If a filter is passed to the init function, only job of that type will be allowed to run.

The logger flag tells cronframe whether to use its log configuration or not:
- true = use the default rolling log configuration
- false = leave the log configuration to the user

```rust
use cronframe::{CronFrame, CronFilter}

fn main(){
    let cronframe = CronFrame::init(None, true);   
}
```

This will let us initialize a cronframe instance that uses no filter and uses the rolling logger configuration.

:::note
The default function is simply a convenince function and is exatcly the same as calling 
```rust
CronFrame::init(None, true);
```
:::

## The Scheduler
:::info
After initilization, the web server will be running at the configured address but the scheduler is yet to be started.
:::

If we want to retain execution inside main we use the `start_scheduler` method and write our logic to keep main alive:
```rust
use cronframe::{CronFrame, CronFilter}

fn main(){
    let cronframe = CronFrame::init(None, true);   
    cronframe.start_scheduler();

    // user logic keeping main alive here
    // or we could also call 
    cronframe.keep_alive();
}
```

Or we can use the run method if we wanted to start the scheduler and keep main alive in one go:
```rust
use cronframe::{CronFrame, CronFilter}

fn main(){
    let cronframe = CronFrame::init(None, true);   
    cronframe.run();
}
```

:::note
The run method is the equivalent of doing: 
```rust
cronframe.start_scheduler().keep_alive();
```
:::

## The Web Server
A CronFrame instance comes with a web server running by default at https://127.0.0.1:8098.

The webserver provides a few diffrent things:
- a homepage listing jobs in categories: active, timed out and suspended 
- the start and stop of the scheduler
- changing the schedule of a job from its page
- changing the timeout of a job from its page
- suspending a job from scheduling from its page

## Shutdown
Use the `quit` method gracefully kill a cronframe instance:
- the scheduler will stop scheduling new jobs
- any running job will complete