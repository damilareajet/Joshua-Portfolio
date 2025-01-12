// import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-main p-6">
      <div className="max-w-4xl mx-auto bg-next shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
      <p className=" text-white mb-4">
        Welcome to our Privacy Policy page! When you use our web services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. This is important, so we hope you will take time to read it carefully.
      </p>
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">Information We Collect</h2>
      <p className="text-white mb-4">
        We collect information to provide better services to all our users. We collect information in the following ways:
      </p>
      <ul className="list-disc list-inside text-white mb-4">
        <li>Information you give us. For example, many of our services require you to sign up for a portfolio account.</li>
        <li>Information we get from your use of our services. We may collect information about the services that you use and how you use them.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">How We Use Information</h2>
      <p className="text-white mb-4">
        We use the information we collect from all of our services to provide, maintain, protect, and improve them, to develop new ones, and to protect our users.
      </p>
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">Information Sharing</h2>
      <p className="text-white mb-4">
        We do not share personal information with companies, organizations, and individuals outside of our company unless one of the following circumstances applies:
      </p>
      <ul className="list-disc list-inside text-white mb-4">
        <li>With your consent.</li>
        <li>For legal reasons.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">Information Security</h2>
      <p className="text-white mb-4">
        We work hard to protect our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold.
      </p>
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">Changes</h2>
      <p className="text-white mb-4">
        Our Privacy Policy may change from time to time. We will post any privacy policy changes on this page.
      </p>
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">Contact Us</h2>
      <p className="text-white">
        If you have any questions about our Privacy Policy, please contact us.
      </p>
        <button
          onClick={goToHomePage} to="/"  className=" mt-6 explore-btn hover-slide-right see-more-btn">
          <span>Back to Home
              <svg className="expo-arrow2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g>
                      <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
              </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
