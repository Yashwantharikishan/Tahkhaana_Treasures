import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Privacy Policy</h1>
          <p>
            We value the trust you place in us. That's why we insist upon the
            highest standards for secure transactions and customer information
            privacy. Please read the following statement to learn about our
            information gathering and dissemination practices.
          </p>
          <p>
            <b>Note :</b>Our privacy policy is subject to change at any time
            without notice. To make sure you are aware of any changes, please
            review this policy periodically.
          </p>
          <p>
            By visiting this Website you agree to be bound by the terms and
            conditions of this Privacy Policy. If you do not agree please do not
            use or access our Website.
          </p>
          <p>
            By mere use of the Website, you expressly consent to our use and
            disclosure of your personal information in accordance with this
            Privacy Policy. This Privacy Policy is incorporated into and subject
            to the Terms of Use
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
