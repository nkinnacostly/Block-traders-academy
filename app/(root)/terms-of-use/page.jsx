import React from "react";
import Topheader from "@/components/screens/top-header/top-header";

function TermsOfUse() {
  return (
    <>
      <Topheader
        backgroundImage={"/assets/img/png/about.png"}
        colouredText={"Terms"}
        otherText={"of Use & Agreement"}
        check1={"Clear usage guidelines and policies"}
        check2={"Protection for all platform users"}
        check3={"Transparent trading rules and conduct"}
        check4={"Comprehensive risk disclosures"}
        className={"relative"}
      />
      
      <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-20 py-8 lg:py-12 bg-black">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="bg-[#1E1E1E99] p-6 lg:p-8 rounded-[20px] mb-8">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4">
                📘 TERMS OF USE
              </h1>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                By accessing and using Block Traders Academy, you agree to comply with these terms and conditions. Please read them carefully before using our platform.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {/* Section 1 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  1. Usage Agreement
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  Access to Block Traders Academy implies your agreement to comply with all policies, rules, and ethical trading conduct.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  2. User Conduct
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  You may not post fraudulent trades, spam, impersonate others, or misuse community features.
                </p>
              </div>

              {/* Section 3 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  3. Copy Trading Disclaimer
                </h2>
                <div className="space-y-4 text-white/90">
                  <p className="text-base lg:text-lg leading-relaxed">
                    Copy trading involves risk. Past performance is not indicative of future results.
                  </p>
                  <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-[10px]">
                    <p className="text-base lg:text-lg text-white">
                      <span className="font-medium text-red-400">Important:</span> We are not responsible for losses incurred by following traders on the platform.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  4. Copy Trading Fee Acknowledgment
                </h2>
                <div className="space-y-4 text-white/90">
                  <p className="text-base lg:text-lg leading-relaxed">
                    By subscribing to or copying a trader, you agree to all disclosed fees, whether performance- or subscription-based.
                  </p>
                  <div className="bg-amber-400/10 border border-amber-400/20 p-4 rounded-[10px]">
                    <p className="text-base lg:text-lg text-white">
                      <span className="font-medium text-amber-400">Note:</span> These fees are non-refundable once charged.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  5. Global Participation
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  Users from any country may join unless prohibited by local law.
                </p>
              </div>

              {/* Section 6 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  6. Changes
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  We reserve the right to amend these terms. Users will be notified of material updates.
                </p>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-8 bg-gradient-to-r from-amber-400/10 to-red-500/10 border border-amber-400/20 p-6 rounded-[15px]">
              <h3 className="text-xl lg:text-2xl font-semibold text-amber-400 mb-3">
                ⚠️ Important Notice
              </h3>
              <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                Trading involves substantial risk of loss and is not suitable for all investors. The value of investments can go down as well as up. 
                Past performance does not guarantee future results. Please ensure you understand the risks involved before trading.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-base lg:text-lg text-white/90 mb-2">
                  Questions about these terms?
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
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsOfUse;
