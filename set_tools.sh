#!/usr/bin/env bash
set -Eeuo pipefail

# 创建 adb 链接以解决: Error: spawn /mnt/d/.android/platform-tools/adb ENOENT
ln -s $ANDROID_HOME/platform-tools/adb.exe $ANDROID_HOME/platform-tools/adb