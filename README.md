# Skyble AI Website

This is the official Skyble AI marketing website built with [Next.js](https://nextjs.org).

## Getting Started

### Development Setup

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Docker Deployment

The project includes Docker configuration for easy deployment. All Docker-related files are in the `docker/` directory, but you can use the wrapper script from any directory.

#### Simple Deployment Commands

```bash
# Show all available commands
./docker-deploy.sh

# Build and deploy locally
./docker-deploy.sh local

# Build and push to registry
./docker-deploy.sh registry

# Deploy from registry
./docker-deploy.sh deploy

# Rebuild local container
./docker-deploy.sh rebuild
```

#### Docker Registry Information

This project can be deployed using Skyble's private Docker registry at `registry.skyble.tech`. The deployment scripts handle authentication automatically.

#### Docker Directory Structure

```
docker/
  ├── Dockerfile            # Multi-stage build definition
  ├── docker-compose.yml    # Local development configuration
  ├── docker-compose.prod.yml # Production deployment configuration
  ├── .dockerignore         # Files to exclude from Docker context
  ├── deploy.sh             # Local deployment script
  ├── deploy-from-registry.sh # Deploy from registry script
  ├── push-to-registry.sh   # Push to registry script
  ├── rebuild-docker.sh     # Rebuild local container script
  └── rebuild-registry.sh   # Rebuild and push to registry script
```

## Project Structure

- `src/app/page.tsx`: Main landing page component
- `src/app/components/`: Reusable UI components
- `public/`: Static assets (images, etc.)
- `docker/`: Docker configuration and deployment scripts

## Technologies

- Next.js 15
- Tailwind CSS
- Docker for containerization

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
