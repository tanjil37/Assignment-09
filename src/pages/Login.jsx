import React, { useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [show, setShow] = useState(false);
  const emailRef = useRef(); //  create ref
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //  login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //  google sign-in
  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google Sign-in successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // forgot password fixed
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your email to reset your password");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-xl py-5">
        <h2 className="font-semibold text-2xl text-center">Login your account</h2>

        <form onSubmit={handleLogin} className="card-body">
          {/*  attach ref to input */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            className="input input-bordered"
            placeholder="Email"
            required
          />

          <div className="relative">
            <label className="label">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              className="input input-bordered w-full"
              placeholder="••••••••"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-3 top-10 cursor-pointer"
            >
              {show ? <FaEye size={15} /> : <IoEyeOff size={15} />}
            </span>
          </div>

         
          <button
            type="button"
            onClick={handleForgetPassword}
            className="link link-hover text-sm mt-1 text-left text-green-600"
          >
            Forgot password?
          </button>

          <button type="submit" className="btn btn-success mt-4 w-full">
            Login
          </button>

          <div className="divider">OR</div>

          <button
            type="button"
            onClick={handleGoogleSignin}
            className="btn bg-white border border-gray-300 w-full flex items-center justify-center gap-2"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="google"
              className="w-5 h-5"
            />
            Login with Google
          </button>

          <p className="text-center font-medium mt-3">
            Don’t Have An Account?{" "}
            <Link to="/register" className="text-green-600">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
