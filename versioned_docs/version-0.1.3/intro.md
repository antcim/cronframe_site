---
sidebar_position: 1
---

# Introduction to CronFrame


CronFrame is both a `framework` and a `CLI` tool.

The framework allows for the definition and scheduling of cron jobs with macros both on functions in the "global scope" and inside struct types to be used inside Rust projects.

Job creation without macros is possible, refer to the example in `no_macros.rs` on the [repo](https://github.com/antcim/cronframe/blob/master/examples/no_macros.rs).

The CLI tool uses the framework of the same name to spin a global instance of it ready to accept jobs that can be added with cli comands.

This tutorial has two main sections, one for the framework and the other for the CLI tool.

While the CLI tool can be used as with little to no knowledge of the framework, it is advised to learn about it first.