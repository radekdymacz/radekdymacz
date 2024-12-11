#!/bin/bash

# Default commit message if none provided
DEFAULT_MESSAGE="Update site"
COMMIT_MESSAGE="${1:-$DEFAULT_MESSAGE}"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Adding all changes...${NC}"
git add .

echo -e "${GREEN}Committing with message: ${NC}$COMMIT_MESSAGE"
git commit -m "$COMMIT_MESSAGE"

echo -e "${GREEN}Pushing to remote...${NC}"
git push

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Successfully pushed changes!${NC}"
else
    echo -e "${RED}✗ Failed to push changes${NC}"
    exit 1
fi
