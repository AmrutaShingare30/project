import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    subscribe: false
  });

  const [loginStatus, setLoginStatus] = useState(null);
  const [error, setError] = useState("");

  // Store email and password during signup
  const [signupData, setSignupData] = useState(null);

  // Function to handle form submission for signup
  const handleSignup = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please enter your email and password.");
      return;
    }
    // Store signup data
    setSignupData(formData);
    // Simulate successful signup (you can replace this with actual signup logic)
    console.log("Signup successfully");
    setLoginStatus("signupSuccess"); // Set signup status to success
    setError(""); // Clear any previous errors
  };

  // Function to handle form submission for login
  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please enter your email and password.");
      return;
    }
    if (!signupData) {
      setError("You need to sign up first.");
      return;
    }
    if (formData.email !== signupData.email || formData.password !== signupData.password) {
      setError("Incorrect email or password.");
      setLoginStatus(null); // Reset login status
      return;
    }
    // Simulate successful login (you can replace this with actual login logic)
    console.log("Login successfully");
    setLoginStatus("loginSuccess"); // Set login status to success
    setError(""); // Clear any previous errors
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-green-500">
      <div className="md:flex md:items-center md:justify-between w-full md:w-2/3 lg:w-1/2">
        <div className="text-center md:text-left mb-8 md:mb-0 text-white md:w-1/2">
          <h1 className="my-5 text-5xl font-bold tracking-tight">
            The best offer <br />
            <span className="text-gray-300">for your business</span>
          </h1>

          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </div>

        <div className="relative w-full md:w-1/2">
          <div
            id="radius-shape-1"
            className="absolute rounded-circle shadow-5"
          ></div>
          <div id="radius-shape-2" className="absolute shadow-5"></div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            {loginStatus === "signupSuccess" ? (
              <form onSubmit={handleLogin}>
                <input
                  className="mb-4 border-b-2 p-2 outline-none focus:border-blue-500"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  className="mb-4 border-b-2 p-2 outline-none focus:border-blue-500"
                  placeholder="Password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                  type="submit"
                  className="w-full mb-4 bg-blue-500 text-white py-2 rounded-md"
                >
                  Login
                </button>
              </form>
            ) : (
              <form onSubmit={handleSignup}>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <input
                    className="border-b-2 p-2 outline-none focus:border-blue-500"
                    placeholder="First name"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                  <input
                    className="border-b-2 p-2 outline-none focus:border-blue-500"
                    placeholder="Last name"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
                <input
                  className="mb-4 border-b-2 p-2 outline-none focus:border-blue-500"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  className="mb-4 border-b-2 p-2 outline-none focus:border-blue-500"
                  placeholder="Password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="flex items-center mb-4">
                  <input
                    id="flexCheckDefault"
                    type="checkbox"
                    className="mr-2"
                    checked={formData.subscribe}
                    onChange={(e) =>
                      setFormData({ ...formData, subscribe: e.target.checked })
                    }
                  />
                  <label htmlFor="flexCheckDefault" className="text-gray-500">
                    Subscribe to our newsletter
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full mb-4 bg-blue-500 text-white py-2 rounded-md"
                >
                  Sign up
                </button>
              </form>
            )}
            <div className="text-center">
              <p>or sign up with:</p>
              {/* Social login buttons */}
            </div>
            {/* Display login success message */}
            {loginStatus === "loginSuccess" && (
              <p className="text-green-500 mb-4">Login successful!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
