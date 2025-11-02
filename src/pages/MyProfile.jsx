import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { updateProfile, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();

  // Track logged-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || "");
        setPhotoURL(currentUser.photoURL || "");
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!auth.currentUser) return;

    updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        setUser({ ...auth.currentUser });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-8 border border-emerald-100">
      <h2 className="text-3xl font-bold text-center text-emerald-600 mb-6">
        My Profile
      </h2>

      <div className="flex flex-col items-center mb-6">
        <img
          src={
            user.photoURL ||
            "https://i.ibb.co.com/4z2Z9xx/hero-6.jpg"
          }
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-emerald-400 object-cover"
        />
        <h3 className="text-xl font-semibold mt-3">{user.displayName || "No Name"}</h3>
        <p className="text-gray-600">{user.email}</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Update Display Name
          </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Update Photo URL
          </label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter image URL"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-success text-white mt-3 px-8"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
