import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import Layout from "../components/Layout";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);

  const { email, password, firstName, lastName, confirmPassword } = state;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        // Handle error message (e.g., using Toast)
      }
    } else {
      if (password !== confirmPassword) {
        // Handle error message (e.g., using Toast)
      }
      if (firstName && lastName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
      } else {
        // Handle error message (e.g., using Toast)
      }
    }
    navigate("/");
  };

  return (
    <Layout>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-semibold mb-6">
            {!signUp ? "Sign-In" : "Sign-Up"}
          </h2>
          <form onSubmit={handleAuth}>
            {signUp && (
              <>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-2 rounded border border-gray-300"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-2 rounded border border-gray-300"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-2 rounded border border-gray-300"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 rounded border border-gray-300"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            {signUp && (
              <div className="mb-4">
                <input
                  type="password"
                  className="w-full p-2 rounded border border-gray-300"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </div>
            )  }
            <div className="text-center">
              <button
                className={`w-full bg-blue-500 text-white py-2 rounded ${
                  !signUp ? "bg-blue-500" : "bg-green-500"
                }`}
                type="submit"
              >
                {!signUp ? "Sign-in" : "Sign-up"}
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            {!signUp ? (
              <p>
                Don't have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setSignUp(true)}
                >
                  Sign Up
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setSignUp(false)}
                >
                  Sign In
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
