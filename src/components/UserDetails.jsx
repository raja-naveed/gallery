import React from 'react';

const UserDetails = ({ user }) => {
    console.log(user)
  return (
    <div>
      <h2 className="text-xl font-semibold">User Profile</h2>
      {/* <p className="text-gray-700">Name: {user.displayName}</p> */}
      {/* <p className="text-gray-700">Email: {user.email}</p> */}
      {/* Other user details */}
    </div>
  );
};

export default UserDetails;
