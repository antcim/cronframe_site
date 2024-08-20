---
sidebar_position: 2
---

# A Cron Object

Before we see how to define either a function or a method job we need to introduce a very easy concept of the framework.

A `cron object` is simply the name given to a struct type that is annotated with the `cron_obj` macro and that has an implementation block annotated with the `cron_impl` macro containing only jobs inside of it.

For Example:
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
    // function and method jobs can be defined here
}
```

As we can see the definition of a cron object is very straightforward and it also makes perfectly clear where the jobs should be defined.

One thing to be aware of when it comes to cron objects is that their fields are required to implement the `Clone` trait.

Now we can get to defining function and methods jobs.



