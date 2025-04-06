import Image from 'next/image';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image 
        src="/Full Logo/Black/Skyble_logo_black_web.png" 
        alt="Skyble X Logo" 
        width={120} 
        height={40} 
        className="dark:hidden" 
      />
      <Image 
        src="/Full Logo/White/Skyble_logo_white_web.png" 
        alt="Skyble X Logo" 
        width={120} 
        height={40} 
        className="hidden dark:block" 
      />
    </div>
  );
} 