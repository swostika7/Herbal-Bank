import React from "react";
import Heading from "./Heading";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";

function Privacy() {
  return (
    <div className="flex justify-center mt-24 max-w-7xl p-4 gap-3 mx-auto ">
      <div className="bg-white rounded-xl shadow-md w-fit space-y-6 px-8 py-8 ">
        <Heading heading={"Privacy Policy "} redesign={"text-center"}>
          <p>
            At Muktinath Herbal Bank Nepal, we value and respect your privacy.
            This Privacy Policy explains how we collect, use, and protect your
            information when you use our website, services, and herbal
            conservation, research, and distribution platform.
          </p>
        </Heading>

        <Heading headingthree={"Privacy & Data Protection"}>
          <p>
            We are committed to protecting your personal and institutional data.
            Muktinath Herbal Bank Nepal collects only the information necessary
            to support herbal conservation, cultivation, research, product
            distribution, and communication with our partners, farmers,
            researchers, and customers. All data is securely stored and used
            strictly for operational, regulatory, and service-related purposes.
          </p>
        </Heading>

        <Heading headingthree={"Data Security"}>
          <p>
            Your data is protected using industry-standard security measures,
            including secure servers, access controls, and data encryption where
            applicable. We regularly review and update our systems to prevent
            unauthorized access, misuse, or data loss.
          </p>
        </Heading>

        <Heading headingthree={"Data Retention"}>
          <p>
            We retain personal information only for as long as necessary to
            fulfill operational, legal, research, and regulatory requirements.
            After this period, data is securely deleted or anonymized.
          </p>
        </Heading>

        <Heading headingthree={"Modifications to This Policy"}>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Changes will be posted on this page. Continued use of our
            website or services after updates are published constitutes
            acceptance of the revised policy
          </p>
        </Heading>

        <Heading headingthree={"Contact Us"}>
          <div className="space-y-2">
           <div className="flex items-center gap-3 ">
                      <IoCallOutline className="text-xl" />
                      <span>ph: +977 9802374101</span>
                    </div>
          
                    <div className="flex items-center gap-3">
                      <MdOutlineMarkEmailRead className="text-xl" />
                      <span>info@muktinathherbal.com</span>
                    </div>
          
                    <div className="flex items-center gap-3">
                      <CiLocationOn className="text-xl" />
                      <span>Basundhara, Kathmandu</span>
                    </div>
                    </div>
        </Heading>
      </div>
    </div>
  );
}

export default Privacy;
