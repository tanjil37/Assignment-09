// import React, { useState } from "react";
// import MyContainer from "../components/MyContainer";
// import { Link } from "react-router";
// import { FaEye } from "react-icons/fa6";
// import { IoEyeOff } from "react-icons/io5";
// import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { auth } from "../firebase/firebase.config";
// import { toast } from "react-toastify";
//  const provider = new GoogleAuthProvider();


// const Login = () => {
//   const [show, setShow] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email?.value;
//     const password = e.target.password?.value;
//     console.log({ email, password });
//     signInWithEmailAndPassword(auth, email, password)
//       .then((res) => {
//         console.log(res);
//         toast.success("Signin successful");
//       })
//       .catch((e) => {
//         console.log(e);
//         toast.error(e.message);
//       });
//   };

 

//   const handleGoogleSignin = () => {
//     console.log("google signin");
//     signInWithPopup(auth, provider)
//       .then((res) => {
//         console.log(res);
//         //setLoading(false);
//         //setUser(res.user);
//         //navigate(from);
//         toast.success("Signin successful");
//       })
//       .catch((e) => {
//         console.log(e);
//         toast.error(e.message);
//       });
//   };


  
//   // const handleForgetPassword = () => {
//   //   console.log();
//   //   const email = emailRef.current.value;
//   //   sendPasswordResetEmail(auth, email)
//   //     .then((res) => {
//   //       //setLoading(false);
//   //       toast.success("Check your email to reset password");
//   //     })
//   //     .catch((e) => {
//   //       toast.error(e.message);
//   //     });
//   // };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
//         <h2 className="font-semibold text-2xl text-center">
//           Login your account
//         </h2>
//         <form onSubmit={handleLogin} className="card-body">
//           <fieldset className="fieldset">
//             <label className="label">Email</label>
//             <input
//               type="email"
//               className="input"
//               placeholder="Email"
//               name="email"
//             />

//             {/* Password */}
//             <div className="relative">
//               <label className="label">Password</label>
//               <input
//                 type={show ? "text" : "password"}
//                 className="input"
//                 placeholder="••••••••"
//                 name="password"
//               />
//               <span
//                 onClick={() => setShow(!show)}
//                 className="absolute right-[30px] top-[36px] cursor-pointer z-50"
//               >
//                 {show ? <FaEye size={13} /> : <IoEyeOff size={13} />}
//               </span>
//             </div>

//             <div>
//               <a  className="link link-hover">Forgot password?</a>
//             </div>
//             <button className="btn btn-neutral mt-4">Login</button>

//              <div className="flex items-center justify-center gap-2 my-2">
//           <div className="h-px w-16 bg-black/30"></div>
//           <span className="text-sm text-black/70">or</span>
//           <div className="h-px w-16 bg-black/30"></div>
//         </div>


//             {/* Google */}
//             <button onClick={handleGoogleSignin}
//             type="button" className="btn bg-white text-black border-[#e5e5e5]">
//               <svg
//                 aria-label="Google logo"
//                 width="16"
//                 height="16"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//               >
//                 <g>
//                   <path d="m0 0H512V512H0" fill="#fff"></path>
//                   <path
//                     fill="#34a853"
//                     d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//                   ></path>
//                   <path
//                     fill="#4285f4"
//                     d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//                   ></path>
//                   <path
//                     fill="#fbbc02"
//                     d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//                   ></path>
//                   <path
//                     fill="#ea4335"
//                     d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//                   ></path>
//                 </g>
//               </svg>
//               Login with Google
//             </button>

//             <p className="text-center font-semibold pt-5">
//               Dont’t Have An Account ?{" "}
//               <Link className="text-secondary" to="/register">
//                 Register
//               </Link>
//             </p>
//           </fieldset>
//         </form>

       
       
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login successful 🌿");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google Sign-in successful 🌸");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-xl py-5">
        <h2 className="font-semibold text-2xl text-center">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <label className="label">Email</label>
          <input type="email" name="email" className="input input-bordered" placeholder="Email" required />

          <div className="relative">
            <label className="label">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              className="input input-bordered w-full"
              placeholder="••••••••"
              required
            />
            <span onClick={() => setShow(!show)} className="absolute right-3 top-10 cursor-pointer">
              {show ? <FaEye size={15} /> : <IoEyeOff size={15} />}
            </span>
          </div>

          <a className="link link-hover text-sm mt-1">Forgot password?</a>

          <button type="submit" className="btn btn-success mt-4 w-full">Login</button>

          <div className="divider">OR</div>

          <button
            type="button"
            onClick={handleGoogleSignin}
            className="btn bg-white border border-gray-300 w-full flex items-center justify-center gap-2"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="google" className="w-5 h-5" />
            Login with Google
          </button>

          <p className="text-center font-medium mt-3">
            Don’t Have An Account?{" "}
            <Link to="/register" className="text-green-600">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
