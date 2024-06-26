import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./page/landing/landing";
import Login from "./page/login/login";
import Dashboard from "./page/dashboard/dashboard";
import RequestForm from "./page/user/request/requestform";
import Request from "./page/user/request/request";
import AdminDashboard from "./page/admin/dashboard/AdminDashboard";
import VehicleDetails from "./page/admin/vehicletypes/VehicleDetails";
import DriverDetails from "./page/admin/drvierdetails/DriverDetails";
import RequestApproval from "./page/admin/approverequests/RequestsApproval";
import PendingRequests from "./page/admin/pendingrequests/PendingRequests";
import TrackVehicle from "./page/admin/trackvehicle/TrackVehicle";
import TrackLive from "./page/admin/trackvehicle/TrackLive";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/requestform" element={<RequestForm />} />
        <Route exact path="/request" element={<Request />} />
        <Route exact path="/adminDashboard" element={<AdminDashboard />} />
        <Route exact path="/vehicledetails" element={<VehicleDetails />} />
        <Route exact path="/driverdetails" element={<DriverDetails />} />
        <Route exact path="/requestapproval" element={<RequestApproval />} />
        <Route exact path="/pendingrequest" element={<PendingRequests />} />
        <Route exact path="/track" element={<TrackVehicle />} />
        <Route exact path="/map" element={<TrackLive />} />
      </Routes>
    </>
  );
}

export default App;
