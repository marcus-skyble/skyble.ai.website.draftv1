import Image from 'next/image';

export default function Logo({ className = "" }: { className?: string }) {
  // Use a more flexible approach for base path
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
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