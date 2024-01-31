import { useState } from 'react'
import "./Admin.css"
import Adminhome from './AdHome'
import Sidebar from '../../components/Sidebar'
function  Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='admin-body'>
    <div className='admin-grid-container'>
      {/* <Header OpenSidebar={OpenSidebar}/> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Adminhome />
      </div>
      </div>
  )
}

export default Admin;