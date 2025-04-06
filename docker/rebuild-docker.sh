#!/bin/bash
set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Path to docker directory
DOCKER_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( cd "$DOCKER_DIR/.." && pwd )"

echo -e "${YELLOW}Rebuilding Skyble website Docker container...${NC}"

# Change to project root
cd "$PROJECT_ROOT"

# Stop existing container if running
if [ "$(docker ps -q -f name=skyble-website)" ]; then
    echo -e "${YELLOW}Stopping existing container...${NC}"
    docker-compose -f "$DOCKER_DIR/docker-compose.yml" down
fi

# Rebuild the Docker image
echo -e "${YELLOW}Building fresh image...${NC}"
docker-compose -f "$DOCKER_DIR/docker-compose.yml" build --no-cache

echo -e "${GREEN}Build complete!${NC}"

echo -e "${YELLOW}Starting container...${NC}"
docker-compose -f "$DOCKER_DIR/docker-compose.yml" up -d

echo -e "${GREEN}Deployment complete!${NC}"
echo -e "${GREEN}Website is now available at: http://localhost:3000${NC}"

# Display container logs
echo -e "${YELLOW}Container logs:${NC}"
docker-compose -f "$DOCKER_DIR/docker-compose.yml" logs -f 