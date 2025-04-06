#!/bin/bash
set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Registry information (in case base images need to be pulled)
REGISTRY="registry.skyble.tech"
USERNAME="skadmin"
PASSWORD="zeqded-qAtgi4-kydrow"

# Path to docker directory
DOCKER_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( cd "$DOCKER_DIR/.." && pwd )"

# Optional: Login to registry if needed for base images
if [[ $1 == "--with-login" ]]; then
    echo -e "${YELLOW}Logging in to Docker registry...${NC}"
    echo $PASSWORD | docker login ${REGISTRY} --username ${USERNAME} --password-stdin
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}Failed to login to Docker registry.${NC}"
        echo -e "${YELLOW}Continuing with build anyway...${NC}"
    fi
fi

echo -e "${YELLOW}Building Skyble website Docker container...${NC}"

# Change to project root
cd "$PROJECT_ROOT"

# Build the Docker image
docker-compose -f "$DOCKER_DIR/docker-compose.yml" build

echo -e "${GREEN}Build complete!${NC}"

# Check if container is already running
if [ "$(docker ps -q -f name=skyble-website)" ]; then
    echo -e "${YELLOW}Stopping existing container...${NC}"
    docker-compose -f "$DOCKER_DIR/docker-compose.yml" down
fi

echo -e "${YELLOW}Starting container...${NC}"
docker-compose -f "$DOCKER_DIR/docker-compose.yml" up -d

echo -e "${GREEN}Deployment complete!${NC}"
echo -e "${GREEN}Website is now available at: http://localhost:3000${NC}"

# Display container logs
echo -e "${YELLOW}Container logs:${NC}"
docker-compose -f "$DOCKER_DIR/docker-compose.yml" logs -f 