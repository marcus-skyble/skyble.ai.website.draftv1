#!/bin/bash
set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Debug mode (set to 1 to enable)
DEBUG=0

# Script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Registry information
REGISTRY="registry.skyble.tech"
USERNAME="skadmin"
PASSWORD="zeqded-qAtgi4-kydrow"
IMAGE_NAME="skyble-website"
TAG="latest"
FULL_IMAGE_NAME="${REGISTRY}/${IMAGE_NAME}:${TAG}"

# Log function with timestamps
log() {
  local level=$1
  local message=$2
  local timestamp=$(date "+%Y-%m-%d %H:%M:%S")
  
  case $level in
    "INFO")
      echo -e "${BLUE}[${timestamp}] [INFO]${NC} $message"
      ;;
    "SUCCESS")
      echo -e "${GREEN}[${timestamp}] [SUCCESS]${NC} $message"
      ;;
    "WARNING")
      echo -e "${YELLOW}[${timestamp}] [WARNING]${NC} $message"
      ;;
    "ERROR")
      echo -e "${RED}[${timestamp}] [ERROR]${NC} $message"
      ;;
    "DEBUG")
      if [ $DEBUG -eq 1 ]; then
        echo -e "[${timestamp}] [DEBUG] $message"
      fi
      ;;
  esac
}

# Debug function
debug() {
  log "DEBUG" "$1"
}

# Error handling function
handle_error() {
  log "ERROR" "An error occurred at line $1"
  exit 1
}

# Set up error handling
trap 'handle_error $LINENO' ERR

# Display help message
show_help() {
  echo "Skyble Website Deployment Script (Vercel Version)"
  echo ""
  echo "Usage: $0 [options]"
  echo ""
  echo "Options:"
  echo "  --help                 Show this help message"
  echo "  --debug                Enable debug mode"
  echo "  --skip-docker          Skip Docker deployment"
  echo "  --skip-vercel          Skip Vercel deployment"
  echo "  --force-rebuild        Force rebuild of Docker image"
  echo "  --production           Deploy to production environment on Vercel"
  echo ""
  exit 0
}

# Process command line arguments
SKIP_DOCKER=0
SKIP_VERCEL=0
FORCE_REBUILD=0
PRODUCTION=0

while [[ $# -gt 0 ]]; do
  case $1 in
    --help)
      show_help
      ;;
    --debug)
      DEBUG=1
      debug "Debug mode enabled"
      ;;
    --skip-docker)
      SKIP_DOCKER=1
      log "INFO" "Skipping Docker deployment"
      ;;
    --skip-vercel)
      SKIP_VERCEL=1
      log "INFO" "Skipping Vercel deployment"
      ;;
    --force-rebuild)
      FORCE_REBUILD=1
      log "INFO" "Force rebuild enabled"
      ;;
    --production)
      PRODUCTION=1
      log "INFO" "Will deploy to production environment on Vercel"
      ;;
    *)
      log "ERROR" "Unknown option: $1"
      show_help
      ;;
  esac
  shift
done

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check dependencies
check_dependencies() {
  log "INFO" "Checking dependencies..."
  
  local missing_deps=0
  local deps=("git" "docker" "npm" "vercel")
  
  for dep in "${deps[@]}"; do
    if ! command_exists "$dep"; then
      log "ERROR" "$dep is not installed but required"
      missing_deps=1
    else
      debug "$dep is installed"
    fi
  done
  
  if [ $missing_deps -eq 1 ]; then
    log "ERROR" "Please install missing dependencies and retry"
    exit 1
  fi
  
  log "SUCCESS" "All dependencies are installed"
}

# Function to check git status
check_git_status() {
  log "INFO" "Checking git status..."
  
  # Check if we have uncommitted changes
  if [ -n "$(git status --porcelain)" ]; then
    log "WARNING" "You have uncommitted changes"
    read -p "Do you want to continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
      log "INFO" "Deployment aborted by user"
      exit 0
    fi
  else
    log "SUCCESS" "Git working directory is clean"
  fi
  
  # Check if we're on main branch
  local current_branch=$(git branch --show-current)
  if [ "$current_branch" != "main" ]; then
    log "WARNING" "You are not on the main branch (current: $current_branch)"
    read -p "Do you want to continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
      log "INFO" "Deployment aborted by user"
      exit 0
    fi
  else
    log "SUCCESS" "You are on the main branch"
  fi
}

# Function to deploy to Docker registry
deploy_to_docker() {
  if [ $SKIP_DOCKER -eq 1 ]; then
    return
  fi
  
  log "INFO" "Starting Docker deployment..."
  
  # Login to Docker registry
  log "INFO" "Logging in to Docker registry ($REGISTRY)..."
  echo $PASSWORD | docker login ${REGISTRY} --username ${USERNAME} --password-stdin

  if [ $? -ne 0 ]; then
    log "ERROR" "Failed to login to Docker registry"
    exit 1
  else
    log "SUCCESS" "Successfully logged in to Docker registry"
  fi
  
  # Build the Docker image
  log "INFO" "Building Docker image..."
  
  local build_args=""
  if [ $FORCE_REBUILD -eq 1 ]; then
    build_args="--no-cache"
    log "INFO" "Forced rebuild enabled, using --no-cache"
  fi
  
  # Use the dockerfile path relative to the script
  docker build -t ${FULL_IMAGE_NAME} ${build_args} -f "$SCRIPT_DIR/docker/Dockerfile" .
  
  if [ $? -ne 0 ]; then
    log "ERROR" "Docker build failed"
    exit 1
  else
    log "SUCCESS" "Docker image built successfully"
  fi
  
  # Push image to registry
  log "INFO" "Pushing image to registry..."
  docker push ${FULL_IMAGE_NAME}
  
  if [ $? -ne 0 ]; then
    log "ERROR" "Failed to push Docker image to registry"
    exit 1
  else
    log "SUCCESS" "Docker image pushed successfully to ${FULL_IMAGE_NAME}"
  fi
}

# Function to deploy to Vercel
deploy_to_vercel() {
  if [ $SKIP_VERCEL -eq 1 ]; then
    return
  fi
  
  log "INFO" "Starting Vercel deployment..."
  
  # Check for uncommitted changes
  if [ -n "$(git status --porcelain)" ]; then
    log "INFO" "You have uncommitted changes, committing them..."
    
    read -p "Enter commit message (default: Update website): " commit_msg
    commit_msg=${commit_msg:-"Update website"}
    
    git add .
    git commit -m "$commit_msg"
    
    log "SUCCESS" "Changes committed with message: $commit_msg"
  fi
  
  # Push to GitHub
  log "INFO" "Pushing to GitHub..."
  git push skyble main
  
  if [ $? -ne 0 ]; then
    log "ERROR" "Failed to push to GitHub"
    exit 1
  else
    log "SUCCESS" "Successfully pushed to GitHub"
  fi
  
  # Deploy to Vercel
  log "INFO" "Deploying to Vercel..."
  
  if [ $PRODUCTION -eq 1 ]; then
    log "INFO" "Deploying to production environment..."
    vercel deploy --prod
  else
    log "INFO" "Deploying to preview environment..."
    vercel deploy
  fi
  
  if [ $? -ne 0 ]; then
    log "ERROR" "Vercel deployment failed"
    exit 1
  else
    log "SUCCESS" "Vercel deployment completed successfully"
  fi
}

# Main function
main() {
  log "INFO" "Starting deployment process..."
  
  # Check dependencies
  check_dependencies
  
  # Check git status
  check_git_status
  
  # Deploy to Docker
  deploy_to_docker
  
  # Deploy to Vercel
  deploy_to_vercel
  
  log "SUCCESS" "Deployment completed successfully!"
  log "INFO" "Docker image: ${FULL_IMAGE_NAME}"
  if [ $SKIP_VERCEL -ne 1 ]; then
    log "INFO" "Please check your Vercel dashboard for the deployment URL"
  fi
}

# Run the main function
main 