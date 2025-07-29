import React from "react";
import Topheader from "@/components/screens/top-header/top-header";

function RefundPolicy() {
  return (
    <>
      <Topheader
        backgroundImage={"/assets/img/png/about.png"}
        colouredText={"Refund"}
        otherText={"Policy & Guidelines"}
        check1={"Clear refund terms and conditions"}
        check2={"Transparent fee structure policies"}
        check3={"Protection against fraudulent activities"}
        check4={"Dedicated support for refund inquiries"}
        className={"relative"}
      />

      <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-20 py-8 lg:py-12 bg-black">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="bg-[#1E1E1E99] p-6 lg:p-8 rounded-[20px] mb-8">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4">
                💸 REFUND POLICY
              </h1>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                This policy outlines our refund terms and conditions for all
                Block Traders Academy services. Please read carefully before
                making any payments.
              </p>
            </div>

            {/* Policy Sections */}
            <div className="space-y-8">
              {/* Section 1 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  1. General
                </h2>
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-[10px]">
                  <p className="text-base lg:text-lg text-white">
                    <span className="font-medium text-red-400">Important:</span>{" "}
                    Block Traders Academy operates on a no-refund policy due to
                    the digital and performance-based nature of our services.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  2. Education Arena
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  Enrollment is a one-time, non-refundable fee, granting full
                  access to our course materials and challenges.
                </p>
              </div>

              {/* Section 3 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  3. Copy Trading
                </h2>
                <div className="space-y-4 text-white/90">
                  <p className="text-base lg:text-lg leading-relaxed">
                    Copy trading fees (performance or subscription-based) are
                    non-refundable once charged.
                  </p>
                  <div className="bg-amber-400/10 border border-amber-400/20 p-4 rounded-[10px]">
                    <p className="text-base lg:text-lg text-white">
                      <span className="font-medium text-amber-400">Note:</span>{" "}
                      Users are advised to review trader profiles, performance,
                      and fees before committing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  4. Fraudulent Payments
                </h2>
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-[10px]">
                  <p className="text-base lg:text-lg text-white">
                    <span className="font-medium text-red-400">Warning:</span>{" "}
                    Accounts using stolen or unauthorized payment methods will
                    be terminated, and authorities may be contacted.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  5. Chargebacks
                </h2>
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-[10px]">
                  <p className="text-base lg:text-lg text-white">
                    <span className="font-medium text-red-400">Important:</span>{" "}
                    Initiating a chargeback without legitimate reason may lead
                    to permanent ban from the platform.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="bg-black/50 p-6 rounded-[15px]">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  6. Contact
                </h2>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-4">
                  All refund-related concerns should be emailed to our support
                  team.
                </p>
                <div className="bg-amber-400/10 border border-amber-400/20 p-4 rounded-[10px]">
                  <p className="text-base lg:text-lg text-white">
                    <span className="font-medium text-amber-400">Email:</span>{" "}
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

            {/* Policy Summary */}
            <div className="mt-8 bg-gradient-to-r from-red-500/10 to-amber-400/10 border border-red-500/20 p-6 rounded-[15px]">
              <h3 className="text-xl lg:text-2xl font-semibold text-amber-400 mb-4">
                ⚠️ Policy Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/30 p-4 rounded-[10px]">
                  <h4 className="font-semibold text-white mb-2">No Refunds</h4>
                  <p className="text-sm text-white/80">
                    All fees are non-refundable due to digital nature of
                    services
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-[10px]">
                  <h4 className="font-semibold text-white mb-2">
                    Review Before Payment
                  </h4>
                  <p className="text-sm text-white/80">
                    Carefully review all terms and trader profiles before
                    committing
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-[10px]">
                  <h4 className="font-semibold text-white mb-2">
                    Fraud Protection
                  </h4>
                  <p className="text-sm text-white/80">
                    Strict policies against fraudulent payments and chargebacks
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-[10px]">
                  <h4 className="font-semibold text-white mb-2">
                    Support Available
                  </h4>
                  <p className="text-sm text-white/80">
                    Contact support for any refund-related questions or concerns
                  </p>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-8 bg-gradient-to-r from-amber-400/10 to-red-500/10 border border-amber-400/20 p-6 rounded-[15px]">
              <h3 className="text-xl lg:text-2xl font-semibold text-amber-400 mb-3">
                📋 Before You Pay
              </h3>
              <div className="space-y-3 text-white/90">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-base lg:text-lg">
                    Ensure you understand our no-refund policy
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-base lg:text-lg">
                    Review all course materials and trader profiles thoroughly
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-base lg:text-lg">
                    Contact support if you have any questions before payment
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-base lg:text-lg">
                    Use only authorized payment methods in your name
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-base lg:text-lg text-white/90 mb-2">
                  Have questions about our refund policy?
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

export default RefundPolicy;
