import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Landing from "./page/landing/landing";
import Login from "./page/login/login";
import Dashboard from "./page/dashboard/dashboard";
import RequestForm from "./page/user/request/requestform";
import Request from "./page/user/request/request";

function App() {
  return(
    <>
    <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
      <Route exact path='/requestform' element={<RequestForm/>}/>
      <Route exact path='/request' element={<Request/>}/>
    </Routes>
    </>
  );
}

export default App;
