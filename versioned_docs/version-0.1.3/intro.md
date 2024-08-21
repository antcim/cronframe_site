---
sidebar_position: 1
---

# Introduction to CronFrame
CronFrame is both a `framework` and a `CLI` tool.

:::info
Scheduling time is UTC. 
:::

The cron expression parser used is [cron](https://crates.io/crates/cron).

The framework allows for the definition and scheduling of cron jobs with macros both on functions in the "global scope" and inside struct types to be used inside Rust projects.

The CLI tool uses the framework of the same name to spin a global instance of it ready to accept jobs that can be added with cli comands.

This tutorial has two main sections, one for the framework and the other for the CLI tool.

While the CLI tool can be used with little to no knowledge of the framework, it is advised to learn about it first.

:::tip
For a better learning experience it is recommended to follow the page order.
:::