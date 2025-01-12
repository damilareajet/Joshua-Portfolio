// import React from 'react'
import { Link } from "react-router-dom";
const Terms_Conditions = () => {
  return (
    <div className="min-h-screen bg-main flex flex-col items-center justify-center p-4">
    <div className="bg-next rounded-lg shadow-lg p-6 max-w-4xl w-full">
      <h1 className="text-3xl font-bold text-white mb-4">Terms & Conditions</h1>
      <p className="text-white mb-4">
        Welcome to my portfolio website. Please read these terms and conditions carefully before using the website. By accessing or using the website, you agree to be bound by these terms.
      </p>
      <h2 className="text-2xl font-semibold text-white mb-2">1. Acceptance of Terms</h2>
      <p className="text-white mb-4">
        By using this website, you agree to comply with and be bound by these terms and conditions of use, which together with our privacy policy govern my relationship with you in relation to this website.
      </p>
      <h2 className="text-2xl font-semibold text-white mb-2">2. Use of Content</h2>
      <p className="text-white mb-4">
        The content of the pages of this website is for your general information and use only. It is subject to change without notice.
      </p>
      <h2 className="text-2xl font-semibold text-white mb-2">3. Intellectual Property</h2>
      <p className="text-white mb-4">
        All trademarks, logos, and images used in this website are the property of their respective owners. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
      </p>
      <h2 className="text-2xl font-semibold text-white mb-2">4. Limitation of Liability</h2>
      <p className="text-white mb-4">
        The information provided on this website is provided as is without any representations or warranties, express or implied. I make no representations or warranties in relation to the content of this website.
      </p>
      <h2 className="text-2xl font-semibold text-white mb-2">5. Changes to Terms</h2>
      <p className="text-white mb-4">
        I may revise these terms and conditions at any time by updating this page. You should check this page regularly to ensure you are happy with any changes.
      </p>
      <div className="mt-6">
        <Link to="/"  className="explore-btn hover-slide-right see-more-btn" onClick="window.location.href=&#39;blog.html&#39;;">
          <span>Back to Home
              <svg className="expo-arrow2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g>
                      <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
              </svg>
          </span>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Terms_Conditions