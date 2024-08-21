---
sidebar_position: 2
---

# Commands
The easiest way to learn the CLI tool commands is to install it and run the following command:
```sh
$ cronframe help
```

This will show us something like:

```sh
A Macro Annotation Cron Job Framework with Web Server and CLI Tool.

Usage: cronframe <COMMAND>

Commands:
  start      Start the CronFrame Webserver and Job Scheduler in background.
  run        Run the CronFrame Webserver and Job Scheduler in the terminal.
  add        Adds a new cli job to a CronFrame instance.
  load       Load jobs from definition file.
  scheduler  Perform actions on the scheduler like start and stop
  shutdown   Shutdown the CronFrame Webserver and Job Scheduler.
  help       Print this message or the help of the given subcommand(s)

Options:
  -h, --help     Print help
  -V, --version  Print version
```

To get further information about a specific command, say the `add` command, run:
```sh
$ cronframe help add
```

This will show info about the selected command as in the following example:
```sh
Adds a new cli job to a CronFrame instance.

Usage: cronframe add [OPTIONS] [EXPR] [TIMEOUT] [JOB]

Arguments:
  [EXPR]     The Cron Expression to use for job scheduling.
  [TIMEOUT]  The value in ms to use for the timeout.
  [JOB]      The path containing the source code of the job.

Options:
  -p, --port <VALUE>
  -h, --help          Print help
  -V, --version       Print version
```