import React, { useState } from 'react';

const useData = () => {
    // Function to get the user data from sessionStorage
    const getUserData = () => {
        const userDataString = sessionStorage.getItem('userData'); // Retrieve user data from sessionStorage
        const userData = JSON.parse(userDataString); // Parse the JSON string to object
        return userData; // Return user data object
    };

    // Initialize state with the user data retrieved from sessionStorage
    const [userData, setUserData] = useState(getUserData());

    // Function to save/update the user data in sessionStorage and update state
    const saveUserData = (userData) => {
        sessionStorage.setItem('userData', JSON.stringify(userData)); // Store user data in sessionStorage
        setUserData(userData); // Update state with the new user data
    };

    // Return an object containing the saveUserData function and the current user data state
    return {
        setUserData: saveUserData, // Function to save/update the user data
        userData, // Current user data value
        getUserData
    };
};

export default useData;
