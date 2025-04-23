/*import "antd/dist/reset.css";
import "./App.css";
import {Menu}from "antd";
import { Routes, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <div style={{display:"flex", flexDirection:"row"}}></div>
      <Menu 
      items={[
        {label:"Home"},
        {label:"Dashboard"},
        {label:"User List"},
        {label:"Profile"},
        {label:"Singout"},
        
        
  ]}></Menu>
  
  < Content/>
  </div>
    
  );
}
function Content(){
  return <div>
    <Routes>
      <Routes path="/" element={<div>Home</div>}></Routes>
      <Routes path="/dashboard" element={<div>Dashboard</div>}></Routes>
      <Routes path="/userlist" element={<div>User List</div>}></Routes>
      <Routes path="/profile" element={<div>Profile</div>}></Routes>
      
      

    </Routes>
    </div>;
}
*/
/*import React from 'react';
import { Menu } from 'antd';
import { Routes, Route, UNSAFE_mapRouteProperties } from 'react-router-dom'; 
import './App.css';
import{
  DashboardOutlined,
  HomeOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
  UserOutlined,
}from "@ant-design/icons/lib/icons";

function App() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Menu
          items={[
            { key: "1", label: "Home" , icon:<HomeOutlined/>},
            { key: "2", label: "Dashboard", icon:<DashboardOutlined/>},
            { key: "3", label: "User  List", icon: <UnorderedListOutlined/>},
            { key: "4", label: "Profile", icon:<UserOutlined/> },
            { key: "5", label: "Signout", icon:<PoweroffOutlined/>},
          }]></Menu>
          <Content/>
        
        </div>
  );
        }
        function Content(){
          return (
            <div>


          <Routes>
            <Route path="/" element={<div>Home </div>}/>
            <Route path="/dashboard" element={<div>Dashboard Content</div>} />
            <Route path="/user-list" element={<div>User List Content</div>} />
            <Route path="/profile" element={<div>Profile Content</div>} />
            <Route path="/signout" element={<div>Signout Content</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;*/

import React from 'react';

import Login from './pages/Login';
 
import Product from './pages/product';

import { Menu } from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import {
  DashboardOutlined,
  HomeOutlined,
  PoweroffOutlined,
  ProductOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";

function App() {
  const navigate = useNavigate();

  const logout = () => {
    // Optional: localStorage.clear()
    navigate("/login");
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
              logout();
            } else {
              navigate(`/${key}`);
            }
          }}
          items={[
            { key: "home", label: "Home", icon: <HomeOutlined /> },
            { key: "dashboard", label: "Dashboard", icon: <DashboardOutlined /> },
            { key: "user-list", label: "User List", icon: <UnorderedListOutlined /> },
            { key: "profile", label: "Profile", icon: <UserOutlined /> },
            { key: "signout", label: "Signout", icon: <PoweroffOutlined /> },
           
            { key: "product", label: "Product", icon: <ProductOutlined /> },

          ]}
        />
        <div style={{ padding: "20px", flex: 1 }}>
          <Content />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <Routes>
      <Route path="/home" element={<div>Home Content</div>} />
      <Route path="/dashboard" element={<div>Dashboard Content</div>} />
      <Route path="/user-list" element={<div>User List Content</div>} />
      <Route path="/profile" element={<div>Profile Content</div>} />
      <Route path="/signout" element={<div>Signout Content</div>} />
      <Route path="/product" element={<Product />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
