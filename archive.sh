#! /usr/bin/env bash
for file in static/assets/current/*jpg; do mv "$file" "static/assets/archive/$(date +%Y-%M-%d).$(uuid).bk.jpg"; done
