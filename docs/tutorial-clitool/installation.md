---
sidebar_position: 1
---

# Installation
To install the CLI tool from crates.io run the following command:

```bash
$ cargo install cronframe
```

If instead you downloaded cronframe from the repo, use the following command inside the root folder of cronframe: 
```bash
$ cargo install --path .
```

To run the tool simply open your preferred terminal and run the following command:
```bash
$ cronframe
```

You will be greeted by a help message.

## CLI Instance of CronFrame
If your use either one of the `start` or the `run` command the instance of cronframe that will execute will all of its related content inside the `.cronframe` directory in the user folder.

Put your cronframe.toml file there if you want to customize the configuration.