import React from "react";
import Heading from "./Heading";

function Terms() {
  return (
    <div className="flex justify-center mt-24 max-w-7xl p-4 gap-3 mx-auto ">
      {/* left side  */}
      <div className="bg-white rounded-xl shadow-md w-fit space-y-6 px-8 py-8">
        <Heading heading="Terms and Conditions" />
        <Heading headingthree={"Acceptance of Terms"}>
          <p>
            By using this website or purchasing any product or service from us,
            you agree to these Terms and Conditions in full. If you do not
            agree, please do not use our website or services.
          </p>
        </Heading>

        <Heading headingthree={"Use of Website"}>
          <p>
            You agree to use this website only for lawful purposes. You must
            not:
          </p>
          <div className="flex flex-col justify-center ">
            <ul className="list-disc">
              <li>Misuse the website or its content</li>
              <li>Attempt unauthorized access</li>
              <li>Copy, reproduce, or resell our content without permission</li>
              <li>Upload harmful or misleading content</li>
            </ul>
          </div>
        </Heading>

        <Heading headingthree={"Products and Services"}>
          <div className="flex flex-col justify-center ">
            <ul className="list-disc">
              <li>All herbal products, seeds, plants, and materials are provided for educational, research, cultivation, or general use, unless otherwise stated.</li>
              <li>Availability may vary due to seasonal and natural factors.</li>
              <li>We reserve the right to modify or discontinue any product or service without notice.</li>
              
            </ul>
          </div>
        </Heading>

        <Heading headingthree={"Herbal Disclaimer"}>
          <p>
            Our products are not intended to diagnose, treat, cure, or prevent
            any disease. Always consult a qualified healthcare professional
            before using herbal products, especially if you are pregnant,
            nursing, or taking medication.
          </p>
        </Heading>
      </div>
     
    </div>
  );
}

export default Terms;
