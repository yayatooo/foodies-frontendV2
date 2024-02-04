import React from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import UserAddress from "../components/UserAddress";
import Invoice from "../page/Invoice";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-6xl font-poppins py-10">
        <h1 className="font-semibold text-3xl">Profile Page</h1>
        <ProfileCard />
        <div className="my-8">
          <UserAddress />
        </div>
        <div className="my-8">
          <Invoice />
        </div>
      </div>
    </>
  );
};

export default Profile;
