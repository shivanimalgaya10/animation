import React from 'react'

const ErrorBoundary = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center  px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-800">Internal Server Error</h2>
        <p className="mt-2 text-gray-600">
          Oops! Something went wrong. Please try refreshing the page or come back later.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Refresh Page
        </button>
      </div>
    </div>
  )
}

export default ErrorBoundary
