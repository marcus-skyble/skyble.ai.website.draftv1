import Logo from "./components/Logo";
import WaitlistForm from "./components/WaitlistForm";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  const serviceTiers = [
    {
      title: "X1 - Ground Control",
      codeName: "Essential",
      description: "Core onboarding, MDM, compliance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
          />
        </svg>
      ),
      features: [
        "Zero-touch device deployment",
        "Apple-specialized MDM setup",
        "Security policy enforcement",
        "Basic device automation",
        "App deployment",
      ],
    },
    {
      title: "X2 - Take Off",
      codeName: "Intermediate",
      description: "Advanced policy, identity, automation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      ),
      features: [
        "All X1 features",
        "Advanced automation & scripting",
        "Identity & access management",
        "Network policies",
        "App lifecycle management",
      ],
    },
    {
      title: "X3 - Cruise",
      codeName: "Advanced",
      description: "Reporting, support, backup, recovery",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.5 20.25h-9a3.75 3.75 0 0 1-3.75-3.75v-9a3.75 3.75 0 0 1 3.75-3.75h9a3.75 3.75 0 0 1 3.75 3.75v9a3.75 3.75 0 0 1-3.75 3.75Z"
          />
        </svg>
      ),
      features: [
        "All X2 features",
        "Reporting & analytics",
        "Remote support & troubleshooting",
        "Cloud backup & recovery",
        "Strategic review & recommendations",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            <Logo className="h-9" />
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 text-sm font-medium transition-colors">Features</a>
              <a href="#" className="text-gray-600 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 text-sm font-medium transition-colors">Service Tiers</a>
              <a href="#" className="text-gray-600 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 text-sm font-medium transition-colors">Support</a>
              <a href="#" className="text-gray-600 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 text-sm font-medium transition-colors">About</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="md:inline-flex hidden items-center px-4 py-2 bg-sky-600 text-white rounded-full text-sm font-medium hover:bg-sky-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                Join Waitlist
              </button>
              <button className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-100 to-transparent dark:from-sky-900 dark:to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col space-y-8 animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                Skyble X
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                An Apple-focused Managed Service Provider platform that simplifies IT management for SMBs using Apple devices.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Device Deployment</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Security</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Support</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Backup</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Analytics</span>
                </div>
              </div>
              <div>
                <a 
                  href="#waitlist" 
                  className="inline-flex items-center px-6 py-3.5 bg-sky-600 text-white rounded-full font-medium hover:bg-sky-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  <span>Join Waitlist</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="relative lg:mt-0 mt-8" id="waitlist">
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 shadow-sm animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Coming Soon — Join Our Waitlist
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Be the first to know when Skyble X launches. Get early access and
                  exclusive offers.
                </p>
                <WaitlistForm />
              </div>
              
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-sky-200 dark:bg-sky-900 rounded-full opacity-20 blur-3xl animate-float"></div>
              <div className="absolute -top-8 -left-8 w-36 h-36 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
              Service Tiers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our service tiers are designed to meet the needs of businesses at every stage of growth, 
              from essential management to advanced support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {serviceTiers.map((tier, index) => (
              <div 
                key={tier.title} 
                className="animate-fadeIn" 
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <FeatureCard {...tier} />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <a 
              href="#waitlist" 
              className="inline-flex items-center px-6 py-3.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <span>Compare all features</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          <div className="mt-16 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6">Feature Set</th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 dark:text-white">X1 - Ground Control</th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 dark:text-white">X2 - Take Off</th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 dark:text-white">X3 - Cruise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-gray-900 dark:text-white font-medium sm:pl-6">Deployment & MDM</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-gray-900 dark:text-white font-medium sm:pl-6">Security</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-gray-900 dark:text-white font-medium sm:pl-6">Device Automation</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-gray-900 dark:text-white font-medium sm:pl-6">Advanced Automation & Scripting</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">❌</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-gray-900 dark:text-white font-medium sm:pl-6">Identity & Access</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">❌</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-gray-900 dark:text-white font-medium sm:pl-6">Network Policies</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">❌</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-gray-900 dark:text-white font-medium sm:pl-6">App Lifecycle</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">❌</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-gray-900 dark:text-white font-medium sm:pl-6">Reporting & Analytics</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">❌</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">❌</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-gray-900 dark:text-white font-medium sm:pl-6">Support & Troubleshooting</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">❌</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">❌</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm text-gray-900 dark:text-white font-medium sm:pl-6">Backup & Recovery</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">❌</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">❌</td>
                  <td className="px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
              Why Choose Skyble X?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Skyble X delivers exceptional value to business owners and leadership teams
              who want clear visibility, robust security, and simplified operations.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16">
              <div className="group col-span-1">
                <div className="flex flex-col space-y-4">
                  <div className="text-sky-600 dark:text-sky-400 p-3 bg-sky-50 dark:bg-sky-950/30 rounded-full w-12 h-12 flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    Zero-Touch Deployment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Every new device arrives ready to use, with all necessary apps and settings pre-configured. 
                    New hires can unbox and start working immediately.
                  </p>
                </div>
              </div>

              <div className="group col-span-1">
                <div className="flex flex-col space-y-4">
                  <div className="text-sky-600 dark:text-sky-400 p-3 bg-sky-50 dark:bg-sky-950/30 rounded-full w-12 h-12 flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Implement comprehensive security policies, encryption, and device
                    management to protect your business data and ensure compliance.
                  </p>
                </div>
              </div>

              <div className="group col-span-1">
                <div className="flex flex-col space-y-4">
                  <div className="text-sky-600 dark:text-sky-400 p-3 bg-sky-50 dark:bg-sky-950/30 rounded-full w-12 h-12 flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    Predictable Flat-Rate Billing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    No hidden charges or surprise fees — just a predictable price per
                    user per month, making IT costs transparent and budgeting simple.
                  </p>
                </div>
              </div>

              <div className="group col-span-1">
                <div className="flex flex-col space-y-4">
                  <div className="text-sky-600 dark:text-sky-400 p-3 bg-sky-50 dark:bg-sky-950/30 rounded-full w-12 h-12 flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    Clear Reporting & Insights
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Receive simple, high-level reports on device health, user
                    experience, and compliance status — giving you visibility and peace
                    of mind.
                  </p>
                </div>
              </div>

              <div className="group col-span-1">
                <div className="flex flex-col space-y-4">
                  <div className="text-sky-600 dark:text-sky-400 p-3 bg-sky-50 dark:bg-sky-950/30 rounded-full w-12 h-12 flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    24/7 Expert Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Access to Apple-specialized IT experts whenever you need them, ensuring 
                    your business stays productive with minimal downtime.
                  </p>
                </div>
              </div>

              <div className="group col-span-1">
                <div className="flex flex-col space-y-4">
                  <div className="text-sky-600 dark:text-sky-400 p-3 bg-sky-50 dark:bg-sky-950/30 rounded-full w-12 h-12 flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    Cloud Backup & Recovery
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Automatic backup of critical business data with quick and easy recovery
                    options when needed, keeping your data safe and accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-900 dark:text-white">Ready to simplify your Apple IT?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Join our waitlist today and be the first to experience Skyble X when we
            launch.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free trial period</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-black py-12 sm:py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-2">
              <Logo className="mb-6" />
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
                Simplifying Apple device management for SMBs. Our platform delivers deployment, security, support, and analytics in one solution.
              </p>
              <div className="mt-6 flex space-x-5">
                <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wide uppercase mb-4">Service Tiers</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm">X1 - Ground Control</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm">X2 - Take Off</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm">X3 - Cruise</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm">Enterprise Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wide uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm">About</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm">Partners</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Skyble X. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
