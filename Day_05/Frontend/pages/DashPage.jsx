import React,{useState} from "react";
import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";

const DashPage = ({ newData }) => {
    const [displayForm , setDisplayForm ] = useState('hidden')
   return (
     <div>
       <Navbar
         formData={newData}
         setDisplayForm={setDisplayForm}
         displayForm={displayForm}
       />
       <Dashboard displayForm={displayForm} />
     </div>
   );
 };
 
 export default DashPage