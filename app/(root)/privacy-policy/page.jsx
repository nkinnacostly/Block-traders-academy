import React from "react";
import Topheader from "@/components/screens/top-header/top-header";

function PrivacyPolicy() {
  return (
    <>
      <Topheader
        backgroundImage={"/assets/img/png/about.png"}
        colouredText={"Privacy"}
        otherText={"Policy & Data Protection"}
        check1={"Your data security is our priority"}
        check2={"Transparent data collection practices"}
        check3={"Full control over your personal information"}
        check4={"Compliance with international data protection laws"}
        className={"relative"}
      />

      <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-20 py-8 lg:py-12 bg-black">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="bg-[#1E1E1E99] p-6 lg:p-8 rounded-[20px] mb-8">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4">
                PRIVACY POLICY
              </h1>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                Block Traders Academy values your privacy. This policy outlines
                how we collect, use, and protect your personal data when you
                visit our website or enroll in our programs.
              </p>
            </div>

            {/* Policy Sections */}
            <div className="space-y-8">
              {/* Section 1 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  1. Information We Collect
                </h2>
                <div className="space-y-4 text-white/90">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">
                      <span className="font-medium text-white">
                        Personal Information:
                      </span>{" "}
                      Name, contact details, payment information, and trading
                      performance data
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">
                      <span className="font-medium text-white">
                        Technical Data:
                      </span>{" "}
                      Device, IP address, browser type, and session data for
                      analytics
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  2. How We Use Your Data
                </h2>
                <div className="space-y-4 text-white/90">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">
                      To deliver educational and trading services
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">
                      To personalize your experience
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">
                      To improve our platform and communication
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">
                      For compliance with financial regulations
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  3. Third-Party Access
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  We do not sell your data. However, we may share data with
                  trusted third parties such as payment processors, analytics
                  providers, or copy trading integration tools.
                </p>
              </div>

              {/* Section 4 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  4. Cookies & Tracking
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  We use cookies to enhance user experience and analyze site
                  performance.
                </p>
              </div>

              {/* Section 5 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  5. International Access
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  Our services are accessible globally. Users from any country
                  may participate unless restricted by local laws.
                </p>
              </div>

              {/* Section 6 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  6. Your Rights
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-4">
                  You can request access, correction, or deletion of your data.
                </p>
                <div className="bg-amber-400/10 border border-amber-400/20 p-4 rounded-[10px]">
                  <p className="text-base lg:text-lg text-white">
                    <span className="font-medium text-amber-400">Contact:</span>{" "}
                    <a
                      href="mailto:support@blocktradersacademy.com"
                      className="text-amber-400 hover:text-amber-300 transition-colors duration-200 underline"
                    >
                      support@blocktradersacademy.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-white/60 text-center">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
