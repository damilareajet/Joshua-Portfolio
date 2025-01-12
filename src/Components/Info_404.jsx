// import React from 'react'

const Info_404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4">Oops! The page you’re looking for doesn’t exist.</p>
      <p className="text-gray-500 mt-2">It might have been moved or deleted.</p>
      <a href="/" className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
        Go Back Home
      </a>
    </div>
  </div>

  )
}

export default Info_404