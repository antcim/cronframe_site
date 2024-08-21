---
sidebar_position: 5
---

# Without Macros
Say, you are don't find defining jobs with macros appealing, the framework might still be of interest to you.

To define a job without macros we use the `new_job` method of the framework which takes the following arguments:
- the name of the job
- the job's code
- a string containing the cron expression
- a string containing the timeout

Passing the job's code can either be done by using the identifier of an existing function... 

```rust
fn my_no_macro_job(){
    println!("Look ma, not using macros here!");
}

fn main(){
    CronFrame::default()
        .new_job(
            "hello_job", my_no_macro_job, "* * * * * * *", "0"
        )
        .run();
}
```
... or using a closure that captures 0 arguments as input:

```rust
fn main(){
    CronFrame::default()
        .new_job(
            "hello_job", || { println!("hello job") }, "* * * * * * *", "0"
        )
        .run();
}
```

You might ask what type a job defined this way is, and the answer to that is: a global cron job.

:::info
Job definition without macros is not the focus of the framework, at least for the moment.
:::

