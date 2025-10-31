import { GrCheckbox } from "react-icons/gr";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Your Name  */}
            <label className="label">Your Name</label>
            <input type="text" className="input" placeholder="Your Name" />

            {/* Photo URL  */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />

            {/* Email  */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* Password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
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
        </div>
      </div>
    </div>
  );
};

export default Register;
