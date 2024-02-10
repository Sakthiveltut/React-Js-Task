import React, { useState } from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard';
import { EmployeesData } from './pages/Employees Data';
import { BenificiaryData } from './pages/Benificiary Data';
import { ApproveList } from './pages/Approve List';
import { CropMaster } from './pages/Crop Master';


function Sidebar() {
  const [selectedCard, setSelectedCard] = useState(0);
  const menu = ['Dashboard', 'Employees Data', 'Benificiary Data', 'Approve List', 'Crop Master']
  const link = ['/', 'EmployeesData', 'BenificiaryData', 'ApproveList', 'CropMaster']
  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const [sidebar, setSidebar] = useState(false);

  function handleSideBar(){
      setSidebar(!sidebar)
  }

  return (
    <div className="d-flex flex-column justify-content-center" >
    <div className='d-flex mx-1 d-block d-xl-none d-md-none'>
      <button className='btn' onClick={handleSideBar}><i class="fa-solid fa-bars"></i></button>
      <h5 className='text-center my-2'>{menu[selectedCard]}</h5>
    </div>
    <Router>
    <div className={`d-xl-block d-md-block col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 bg-white ${sidebar ? 'd-none' : ''}`}>
                    
    <nav className="sideNavBar navbar-expand d-flex flex-column  bg-white" id="sidebar">
      <div
        className="card w-100 p-1 d-flex flex-row align-content-center"
        style={{
          borderRadius: '0 0 40px 0',
          backgroundImage: 'linear-gradient(to bottom right, #1478c7, #01d3c6)',
        }}
      >
        <div className="m-1">
          <img src="./images/logo1.png" alt="" width="50px" height="50px" />
        </div>
        <div className="m-2">
          <h3 style={{ color: 'white' }}>Samuday</h3>
          <p style={{ fontSize: '11px' }}>
            &emsp;&emsp;by HCL<b>Foundation</b>
          </p>
        </div>
      </div>
          <ul className="navbar-nav d-flex flex-column w-100 px-3">
            {menu.map((value,index) => (
              <div
                key={index}
                className={`card my-3 sidebarMenu border-0 ${
                  selectedCard === index ? 'selected-card' : ''
                }`}
                onClick={() => handleCardClick(index)}
              >
                <li className="nav-item w-100 text-md">
                  <i className="fa-solid fa-house mr-2 sidebarIcon p-2"></i>
                  <Link to={link[index]} className="text-decoration-none mx-2" onClick={handleSideBar}>
                    {value}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
         
      <div
        className="d-flex mx-5"
        style={{ position: 'absolute', bottom: '0' }}
      >
        <div className="p-1">
          <img
            className="img-fluid profileNavImg"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
            width="40px"
            style={{ borderRadius: '10px' }}
            alt="User Profile"
          />
        </div>
        <div className="p-1 ">
          <h6 style={{ color: '#2F36A4' }}>Liam Michael</h6>
          <p style={{ color: '#a594f8', fontSize: '10px' }}>
            Michael@gmail.com
          </p>
        </div>
      </div>
    </nav>
    </div>
      <Routes>
                  <Route exact path='/' element={<Dashboard/>}></Route>
                  <Route exact path='/EmployeesData' element={<EmployeesData/>}></Route>
                  <Route exact path='/BenificiaryData' element={<BenificiaryData/>}></Route>
                  <Route exact path='/ApproveList' element={<ApproveList/>}></Route>
                  <Route exact path='/CropMaster' element={<CropMaster/>}></Route>
      </Routes> 
    </Router>
  </div>
  );
}

export default Sidebar;

