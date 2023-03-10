import React, { useContext, useEffect } from "react";
import Create from "./pages/group/Create";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/group/Index";
import Login from "./pages/public/Login";
import { authContext } from "./store/AuthContext";
import ConfirmCode from "./pages/public/ConfirmCode";
import Dashboard from "./pages/dashboard/Dashboard";
import PublicLayout from "./pages/layout/PublicLayout";
import ProtectedLayout from "./pages/layout/ProtectedLayout";
import Contact from "./pages/Contact/Contact";
import { runOneSignal } from "./runOneSignal";


function App() {

  useEffect(() => {
    runOneSignal()
  
  }, [])
  


  return (
    <>
      {/*  PublicLayout -> public pages   */}
      {/* protected layout -> private pages */}

      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="confirmCode" element={<ConfirmCode />} />
          <Route path="Contact" element={<Contact />} />
        </Route>

        <Route path="/admin" element={<ProtectedLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="group/create" element={<Create />} />
          <Route path="group" element={<Index />} />
        </Route>
      </Routes>
    </>
  );
}

// function Auth({ children }) {
//   const { loginStatus } = useContext(authContext);

//   if (loginStatus) {
//     return children;
//   } else {
//     return (
//       <Routes>
//         <Route path="/" element={<Login />} />
//       </Routes>
//     );
//   }
// }

export default App;
