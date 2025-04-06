import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  codeName: string;
  description: string;
  icon: ReactNode;
  features: string[];
}

export default function FeatureCard({
  title,
  codeName,
  description,
  icon,
  features,
}: FeatureCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-800/60 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700/50 hover:shadow-lg transition-all duration-500 hover:translate-y-[-4px]">
      {/* Top gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-400 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 absolute top-0 left-0"></div>
      
      <div className="p-8">
        <div className="flex items-center gap-4 mb-5">
          <div className="text-sky-600 dark:text-sky-400 p-4 bg-sky-50 dark:bg-sky-950/30 rounded-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-md">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
              {codeName}
            </p>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mt-5 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700/50">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
            Key Features:
          </h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 transition-all duration-200 group-hover:translate-x-1"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-sky-600 dark:text-sky-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-all duration-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8">
          <button className="w-full py-3 px-4 text-sm font-medium text-center text-white bg-sky-600 rounded-full flex items-center justify-center space-x-2 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-300 group-hover:shadow-md">
            <span>Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 