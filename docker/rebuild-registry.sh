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

# Registry information
REGISTRY="registry.skyble.tech"
USERNAME="skadmin"
PASSWORD="zeqded-qAtgi4-kydrow"
IMAGE_NAME="skyble-website"
TAG="latest"
FULL_IMAGE_NAME="${REGISTRY}/${IMAGE_NAME}:${TAG}"

# Login to Docker registry
echo -e "${YELLOW}Logging in to Docker registry...${NC}"
echo $PASSWORD | docker login ${REGISTRY} --username ${USERNAME} --password-stdin

if [ $? -ne 0 ]; then
  echo -e "${RED}Failed to login to Docker registry.${NC}"
  echo -e "${YELLOW}Please check your credentials and try again.${NC}"
  exit 1
fi

# Change to project root
cd "$PROJECT_ROOT"

echo -e "${YELLOW}Building Docker image with fixed logo paths...${NC}"
docker build -t ${FULL_IMAGE_NAME} -f "$DOCKER_DIR/Dockerfile" .

echo -e "${GREEN}Build complete!${NC}"
echo -e "${YELLOW}Tagging image as ${FULL_IMAGE_NAME}...${NC}"

echo -e "${YELLOW}Pushing image to registry...${NC}"
docker push ${FULL_IMAGE_NAME}

echo -e "${GREEN}Image successfully pushed to ${FULL_IMAGE_NAME}${NC}"
echo -e "${YELLOW}To deploy this image, run:${NC}"
echo -e "$DOCKER_DIR/deploy-from-registry.sh" 