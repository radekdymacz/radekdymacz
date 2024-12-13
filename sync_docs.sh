#!/bin/bash

SOURCE_DIR="/Users/radek/Documents/AI/agentic/docs/"
TARGET_DIR="/Users/radek/Documents/AI/radekdymacz.github.io/docs/agentic/"

# Ensure target directory exists
mkdir -p "$TARGET_DIR"

# Copy all markdown files and maintain directory structure
rsync -av --include="*.md" --include="*/" --exclude="*" "$SOURCE_DIR" "$TARGET_DIR"

# Copy assets if they exist
if [ -d "${SOURCE_DIR}assets" ]; then
    rsync -av "${SOURCE_DIR}assets/" "${TARGET_DIR}assets/"
fi

echo "Documentation synced to $TARGET_DIR"
