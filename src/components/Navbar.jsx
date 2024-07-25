import React from 'react';
import { useAuth } from '../hooks';
import { NavLink } from 'react-router-dom';

function Navbar(){
  const {isAuth,authUser}=useAuth();
  console.log('authUser',{isAuth,authUser})

  return(
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink activeClassName="active" className="navbar-brand" to="/" end>
          Blogging App
        </NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
          <NavLink activeClassName="active" className="navbar-brand" to="/" end>
          Home
        </NavLink>
        </li>
        {isAuth &&(
          <>
          
          <li className="nav-item">
          <NavLink activeClassName="active" className="navbar-brand" to="/editor" >
          &nbsp;New Post
        </NavLink>

          </li>
          
       
        
          <li className="nav-item">
          <NavLink activeClassName="active" className="navbar-brand" to="/settings" >
          &nbsp;Settings
        </NavLink>

          </li>
          
  
          <li className="nav-item">
          <NavLink activeClassName="active" className="navbar-brand" to={`/@{authUser?.username}`}>
         Hi {authUser?.username}
        </NavLink>

          </li>
          
          
          </>

        ) }
        {!isAuth &&(
          <>
               
          
       
        
          <li className="nav-item">
          <NavLink activeClassName="active" className="navbar-brand" to="/register" >
          Sign Up
        </NavLink>

          </li>
          
          
       
        
          <li className="nav-item">
          <NavLink activeClassName="active" className="navbar-brand" to="/login" >
         Sign In
        </NavLink>

          </li>

          </>
        )}
          

          </ul>
        
      </div>

    </nav>
  )
}
export default Navbar