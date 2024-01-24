#!/usr/bin/env bash
while read command; do
    echo "Command: $command"
	node dist/cli.js $command
    sleep 3
    echo ""
done <commands.txt
