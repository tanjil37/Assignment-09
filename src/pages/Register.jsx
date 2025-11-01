import { createUserWithEmailAndPassword } from "firebase/auth";
import { GrCheckbox } from "react-icons/gr";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const Register = () => {
 
 
  const handleRegister = (e) =>{
   e.preventDefault();
  
   
    //const displayName = e.target.name?.value;
    // const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
     console.log("signup function entered", {
      email,
      // displayName,
      // photoURL,
      password,
    });

    
    // const regExp =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;

    // console.log(regExp.test(password));

    // if (!regExp.test(password)) {
    //   toast.error(
    //     "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
    //   );
    //   return;
    // }

    createUserWithEmailAndPassword(auth, email, password)
    .then(res=>{
      console.log(res);;
      toast.success("Signup successful");  
    }).catch(e=>{
      toast.error(e.message);
    })







  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Your Name 
            <label className="label">Your Name</label>
            <input type="text" className="input" placeholder="Your Name" /> */}

            {/* Photo URL 
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" /> */}

            {/* Email  */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" name="email" />

            {/* Password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" name="password" />
            <div className="flex gap-2 items-center mt-2">
              <GrCheckbox/>
              <p className="link link-hover">Accept Term & Conditions</p>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="text-center font-semibold pt-5">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
