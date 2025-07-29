import React from "react";
import Topheader from "@/components/screens/top-header/top-header";

function TermsAndServices() {
  return (
    <>
      <Topheader
        backgroundImage={"/assets/img/png/about.png"}
        colouredText={"Terms &"}
        otherText={"Services Agreement"}
        check1={"Comprehensive service terms and conditions"}
        check2={"Clear program structure and eligibility"}
        check3={"Transparent fee structure and policies"}
        check4={"Protection of intellectual property rights"}
        className={"relative"}
      />

      <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-20 py-8 lg:py-12 bg-black">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="bg-[#1E1E1E99] p-6 lg:p-8 rounded-[20px] mb-8">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4">
                📄 TERMS AND SERVICES
              </h1>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                This comprehensive agreement governs your participation in Block
                Traders Academy&apos;s educational programs, trading arena, and
                copy trading platform.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {/* Section 1 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  1. Introduction
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  By using Block Traders Academy, you agree to these Terms of
                  Service. This agreement governs your participation in our
                  educational programs, trading arena, and copy trading
                  platform.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  2. Eligibility
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  Participants must be 18+ or of legal age in their
                  jurisdiction. Our services are available globally unless
                  restricted by your country&apos;s laws.
                </p>
              </div>

              {/* Section 3 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  3. Program Structure
                </h2>
                <div className="space-y-4 text-white/90">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <p className="text-base lg:text-lg">
                        <span className="font-medium text-white">
                          Education Arena:
                        </span>{" "}
                        Access to recorded lessons, challenges, and mentorship.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <p className="text-base lg:text-lg">
                        <span className="font-medium text-white">
                          Trading Arena:
                        </span>{" "}
                        Performance-based progression and funding opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <p className="text-base lg:text-lg">
                        <span className="font-medium text-white">
                          Copy Trading:
                        </span>{" "}
                        Copy top-performing traders for a fee.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  4. Account Usage
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  Each user must maintain one account. Sharing login details is
                  strictly prohibited.
                </p>
              </div>

              {/* Section 5 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  All course content, branding, and trading systems are the
                  property of Block Traders Academy.
                </p>
              </div>

              {/* Section 6 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  6. Fees & Payments
                </h2>
                <div className="space-y-4 text-white/90">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">
                      A one-time enrollment fee grants access to the Education
                      Arena.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">
                      Funding is merit-based and subject to internal
                      evaluations.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">
                      Additional charges apply to certain services (e.g., Copy
                      Trading — see Section 7).
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  7. Copy Trading Fees
                </h2>
                <div className="space-y-4 text-white/90">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">
                      Users may be charged performance-based or subscription
                      fees for accessing traders.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">
                      Fees are transparently disclosed before subscription or
                      payment.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">
                      Top traders may receive a share of the collected fees.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">
                      Fees are billed monthly or deducted automatically from
                      profit (if applicable).
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  8. Suspension & Termination
                </h2>
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-[10px]">
                  <p className="text-base lg:text-lg text-white">
                    <span className="font-medium text-red-400">Important:</span>{" "}
                    Accounts violating platform policies may be suspended or
                    terminated without refund.
                  </p>
                </div>
              </div>
            </div>

            {/* Program Overview */}
            <div className="mt-8 bg-gradient-to-r from-amber-400/10 to-blue-500/10 border border-amber-400/20 p-6 rounded-[15px]">
              <h3 className="text-xl lg:text-2xl font-semibold text-amber-400 mb-4">
                🎯 Program Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 p-4 rounded-[10px]">
                  <h4 className="font-semibold text-white mb-2">
                    Education Arena
                  </h4>
                  <p className="text-sm text-white/80">
                    Structured learning with recorded lessons, challenges, and
                    expert mentorship
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-[10px]">
                  <h4 className="font-semibold text-white mb-2">
                    Trading Arena
                  </h4>
                  <p className="text-sm text-white/80">
                    Performance-based progression with funding opportunities for
                    qualified traders
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-[10px]">
                  <h4 className="font-semibold text-white mb-2">
                    Copy Trading
                  </h4>
                  <p className="text-sm text-white/80">
                    Follow and copy top-performing traders with transparent fee
                    structure
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-base lg:text-lg text-white/90 mb-2">
                  Need clarification on any terms?
                </p>
                <a
                  href="mailto:support@blocktradersacademy.com"
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200 underline text-base lg:text-lg"
                >
                  Contact our support team
                </a>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-6 pt-4 border-t border-white/10">
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

export default TermsAndServices;
