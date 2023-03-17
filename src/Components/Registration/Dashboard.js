import React, { useState, useEffect } from "react";
import firebase from "../firebase";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await firebase.auth().signOut();
  };

  if (!user) {
    return <p>You are not logged in</p>;
  }

  return (
    <div>
      <p>Welcome {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
