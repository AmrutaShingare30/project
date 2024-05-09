import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
    } else if (!email.trim()) {
      setError("Please enter your email.");
    } else if (!password.trim()) {
      setError("Please enter your password.");
    } else if (password !== repeatPassword) {
      setError("Passwords do not match.");
    } else {
      // Perform signup logic
      setError("Sign up successful!");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white p-8 rounded-lg shadow-md md:flex">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-3xl font-bold mb-6">Sign up</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex items-center space-x-4 mb-4">
                <i className="fas fa-user fa-lg text-gray-600"></i>
                <div className="flex-1">
                  <input
                    type="text"
                    id="formName"
                    className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <i className="fas fa-envelope fa-lg text-gray-600"></i>
                <div className="flex-1">
                  <input
                    type="email"
                    id="formEmail"
                    className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <i className="fas fa-lock fa-lg text-gray-600"></i>
                <div className="flex-1">
                  <input
                    type="password"
                    id="formPassword"
                    className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <i className="fas fa-key fa-lg text-gray-600"></i>
                <div className="flex-1">
                  <input
                    type="password"
                    id="formRepeatPassword"
                    className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Repeat Password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Register
                </button>
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              className="w-full h-auto"
              alt="Sample image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
