import React from "react";
// import Navbar from "../../components/header/navbar";
import Navbar1 from "../../components/header/navbar1";


export default function Landing() {
    return (
        <>
                <Navbar1 isLoggedIn={true}/>
            <div>
                <img src="https://img.freepik.com/free-vector/beautiful-illustration-sunny-landscape_1284-62766.jpg?t=st=1718608513~exp=1718612113~hmac=c29c918dd327f55b224480322d4ddc0e669f8ec93c08ffb50f49a041e97f5b91&w=826" ></img>
            </div>
        </>
    );
}