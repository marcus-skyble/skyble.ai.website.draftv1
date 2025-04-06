import Image from 'next/image';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image 
        src={process.env.NODE_ENV === 'production' ? '/skyble.ai.website.draftv1/Full Logo/Black/Skyble_logo_black_web.png' : '/Full Logo/Black/Skyble_logo_black_web.png'}
        alt="Skyble X Logo" 
        width={120} 
        height={40} 
        className="dark:hidden" 
      />
      <Image 
        src={process.env.NODE_ENV === 'production' ? '/skyble.ai.website.draftv1/Full Logo/White/Skyble_logo_white_web.png' : '/Full Logo/White/Skyble_logo_white_web.png'}
        alt="Skyble X Logo" 
        width={120} 
        height={40} 
        className="hidden dark:block" 
      />
    </div>
  );
} 