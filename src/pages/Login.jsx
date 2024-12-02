import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-dark-3">
      {/* Card Container */}
      <div className="w-full max-w-md bg-grey-2 rounded-lg shadow-lg overflow-hidden">
        {/* Logo Section */}
        <div className="flex justify-center bg-dark-1 py-6">
          <img
            src="src\assets\vrv logo.jpg" // Replace with your actual logo path
            alt="VRV Security Logo"
            className="h-12"
          />
        </div>
        {/* Form Section */}
        <div className="px-8 py-6">
          <h2 className="text-center text-2xl font-bold text-green-1">
            Login to your Account
          </h2>
          <form className="mt-6">
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-green-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border border-green-2 rounded-md focus:ring-green-2 focus:border-green-2"
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-green-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 w-full px-4 py-2 border border-green-2 rounded-md focus:ring-green-2 focus:border-green-2"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-1 text-grey-2 py-2 px-4 rounded-md hover:bg-dark-1 transition"
            >
              Login
            </button>
          </form>
          {/* Links Section */}
          <div className="mt-4 text-sm text-center">
            <p>
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-green-1 hover:underline font-medium"
              >
                Register
              </a>
            </p>
            <p className="mt-2">
              Forgot your password?{" "}
              <a
                href="/reset-password"
                className="text-green-1 hover:underline font-medium"
              >
                Reset it
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
