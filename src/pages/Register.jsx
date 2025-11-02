// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { GrCheckbox } from "react-icons/gr";
// import { Link } from "react-router";
// import { auth } from "../firebase/firebase.config";
// import { toast } from "react-toastify";

// import { useContext, useState } from "react";
// import { FaEye } from "react-icons/fa6";
// import { IoEyeOff } from "react-icons/io5";

// const Register = () => {
//   const [show, setShow] = useState(false);

//   const handleRegister = (e) => {
//     e.preventDefault();

//     const displayName = e.target.name?.value;
//     const photoURL = e.target.photo?.value;
//     const email = e.target.email?.value;
//     const password = e.target.password?.value;
//     console.log("signup function entered", {
//       email,
//       displayName,
//       photoURL,
//       password,
//     });

//     // const regExp =
//     //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;

//     // console.log(regExp.test(password));

//     // if (!regExp.test(password)) {
//     //   toast.error(
//     //     "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
//     //   );
//     //   return;
//     // }

//     createUserWithEmailAndPassword(auth, email, password)
//       .then((res) => {
//         console.log(res);
//         toast.success("Signup successful");
//       })
//       .catch((e) => {
//         console.log(e);

//         console.log(e.code);
//         if (e.code === "auth/email-already-in-use") {
//           toast.error(
//             "User already exists in the database. Etai bastob haahahahaha"
//           );
//         } else if (e.code === "auth/weak-password") {
//           toast.error("Bhai tomake at least 6 ta digit er pass dite hobe");
//         } else if (e.code === "auth/invalid-email") {
//           toast.error("Invalid email format. Please check your email.");
//         } else if (e.code === "auth/user-not-found") {
//           toast.error("User not found. Please sign up first.");
//         } else if (e.code === "auth/wrong-password") {
//           toast.error("Wrong password. Please try again.");
//         } else if (e.code === "auth/user-disabled") {
//           toast.error("This user account has been disabled.");
//         } else if (e.code === "auth/too-many-requests") {
//           toast.error("Too many attempts. Please try again later.");
//         } else if (e.code === "auth/operation-not-allowed") {
//           toast.error("Operation not allowed. Please contact support.");
//         } else if (e.code === "auth/network-request-failed") {
//           toast.error("Network error. Please check your connection.");
//         } else {
//           toast.error(e.message || "An unexpected error occurred.");
//         }
//       });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
//         <h2 className="font-semibold text-2xl text-center">
//           Register your account
//         </h2>

//         <form onSubmit={handleRegister} className="card-body">
//           <fieldset className="fieldset">
//             {/* Your Name  */}
//             <label className="label">Your Name</label>
//             <input type="text" className="input" placeholder="Your Name" name="name" /> 

//             {/* Photo URL  */}
//             <label className="label">Photo URL</label>
//             <input type="text" className="input" placeholder="Photo URL" name="photo" />

//             {/* Email  */}
//             <label className="label">Email</label>
//             <input
//               type="email"
//               className="input"
//               placeholder="Email"
//               name="email"
//             />

//             {/* password  */}
//             <div className="relative">
//               <label className="label">Password</label>
//               <input
//                 type={show ? "text" : "password"}
//                 className="input "
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

//             <div className="flex gap-2 items-center mt-2">
//               <GrCheckbox />
//               <p className="link link-hover">Accept Term & Conditions</p>
//             </div>
//             <button className="btn btn-neutral mt-4">Register</button>
//             <p className="text-center font-semibold pt-5">
//               Dont’t Have An Account ?{" "}
//               <Link className="text-secondary" to="/login">
//                 Login
//               </Link>
//             </p>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

const provider = new GoogleAuthProvider();

const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;


    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;

    console.log(regExp.test(password));

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return;
    }

    // const validPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    // if (!validPass.test(password)) {
    //   toast.error("Password must have 1 uppercase, 1 lowercase, and be at least 6 characters long.");
    //   return;
    // }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName: name, photoURL: photo });
      toast.success("Signup successful ");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignup = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google Sign-up successful");
        navigate("/");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-xl py-5">
        <h2 className="font-semibold text-2xl text-center">Register your account</h2>

        <form onSubmit={handleRegister} className="card-body">
          <label className="label">Your Name</label>
          <input type="text" name="name" className="input input-bordered" required />

          <label className="label">Photo URL</label>
          <input type="text" name="photo" className="input input-bordered" />

          <label className="label">Email</label>
          <input type="email" name="email" className="input input-bordered" required />

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

          <button type="submit" className="btn btn-success mt-4 w-full">
            Register
          </button>

          <div className="divider">OR</div>

          <button
            type="button"
            onClick={handleGoogleSignup}
            className="btn bg-white border border-gray-300 w-full flex items-center justify-center gap-2"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="google" className="w-5 h-5" />
            Sign up with Google
          </button>

          <p className="text-center font-medium mt-3">
            Already Have An Account?{" "}
            <Link to="/login" className="text-green-600">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;




