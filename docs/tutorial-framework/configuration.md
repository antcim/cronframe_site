---
sidebar_position: 4
---

# Configuration File
You can use `cronframe.toml` file inside the working directory of your program to configure cronframe.

There are three sections to the configuration:
- webserver
- logger
- scheduler

```toml
[webserver]
port = 8098
ip = "127.0.0.1"

[logger]
dir = "log"
file_size = 1 # this is in MB
archive_files = 3
latest_file_name = "latest"
archive_file_name = "archive"
msg_pattern = "{d(%Y-%m-%d %H:%M:%S %Z)} {l} {t} - {m}{n}"
level_filter = "info"

[scheduler]
grace = 250 # this is in ms
```

Each section and each section field is optional.

The configuration shown above is the default one.