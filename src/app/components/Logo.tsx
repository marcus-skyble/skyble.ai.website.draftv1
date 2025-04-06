import Image from 'next/image';

export default function Logo({ className = "" }: { className?: string }) {
  // Determine the base path for assets based on the environment
  let basePath = '';
  
  // For static rendering (client-side), we need to check at runtime
  if (typeof window !== 'undefined') {
    // Check if we're on GitHub Pages (contains the repository name in the path)
    if (window.location.pathname.includes('/website.dev')) {
      basePath = '/website.dev';
    } else if (window.location.pathname.includes('/skyble.ai.website.draftv1')) {
      // Support for the old repository path during transition
      basePath = '/skyble.ai.website.draftv1';
    }
  } else {
    // For server-side rendering, use the environment variable
    basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  }
  
  return (
    <div className={`relative ${className}`}>
      <Image 
        src={`${basePath}/Full Logo/Black/Skyble_logo_black_web.png`}
        alt="Skyble X Logo" 
        width={120} 
        height={40} 
        className="dark:hidden" 
      />
      <Image 
        src={`${basePath}/Full Logo/White/Skyble_logo_white_web.png`}
        alt="Skyble X Logo" 
        width={120} 
        height={40} 
        className="hidden dark:block" 
      />
    </div>
  );
} 