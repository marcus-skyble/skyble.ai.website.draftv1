#!/bin/bash
set -e

# Get the directory of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Show usage if no arguments provided
if [ $# -eq 0 ]; then
  echo "Skyble Website Docker Deployment Tools"
  echo ""
  echo "Usage: ./docker-deploy.sh [command]"
  echo ""
  echo "Available commands:"
  echo "  local          - Build and deploy locally"
  echo "  registry       - Build and push to registry"
  echo "  deploy         - Deploy from registry"
  echo "  rebuild        - Rebuild local container"
  echo ""
  exit 1
fi

# Execute the appropriate script based on the command
case "$1" in
  local)
    echo "Running local deployment..."
    "$SCRIPT_DIR/docker/deploy.sh" "${@:2}"
    ;;
  registry)
    echo "Building and pushing to registry..."
    "$SCRIPT_DIR/docker/push-to-registry.sh" "${@:2}"
    ;;
  deploy)
    echo "Deploying from registry..."
    "$SCRIPT_DIR/docker/deploy-from-registry.sh" "${@:2}"
    ;;
  rebuild)
    echo "Rebuilding local container..."
    "$SCRIPT_DIR/docker/rebuild-docker.sh" "${@:2}"
    ;;
  *)
    echo "Unknown command: $1"
    echo "Available commands: local, registry, deploy, rebuild"
    exit 1
    ;;
esac 