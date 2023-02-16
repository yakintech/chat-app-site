import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { authContext } from '../../store/AuthContext';
import styles from './index.module.css';
import logo from '../../images/logo-light.png'



const Sidebar = () => {
	const { loginStatus, setloginStatus } = useContext(authContext);

	const logout = () => {
		setloginStatus(false);
	};

	if (!loginStatus) return <Navigate to="/" />;

	
	return (
		<>
		  <div className={styles.sidebar_bigdiv}>
        <div className={styles.sidebar_imgdiv}>
         <h3><i class="fa-solid fa-face-smile-wink"></i> AdminPanel</h3>
        </div>
        <ul className={styles.sidebar_menubigdiv}>
          <ul className={styles.sidebar_menudiv}>
            <li className={styles.sidebar_alldiv}>
              {" "}
            <p>  <i className="fa-solid fa-house-chimney"></i>&nbsp;Dashboards</p>
              <ul className={styles.sidebar_allminidiv}>
                <li>
				<Link to="/admin/dashboard">Dashboard</Link>
                </li>
               
              </ul>
            </li>
            <li className={styles.sidebar_alldiv}>
              {" "}
             <p> <i className="fa-solid fa-layer-group"></i>&nbsp;Layout</p>
              <ul className={styles.sidebar_allminidiv}>
                <li>
				<Link to="/admin/group">Group</Link>
                </li>
                <li>
                <Link to="/admin/group/create">Group Create</Link>
                </li>
              
              </ul>
            </li>
            <li className={styles.sidebar_alldiv}>
              {" "}
            <p>  <i class="fa-solid fa-user"></i>&nbsp;User</p>
              <ul className={styles.sidebar_allminidiv}>
                <li>
  <button onClick={logout}>Logout</button> 
				
                </li>
               
              </ul>
            </li>

           


          </ul>
         
        </ul>

      </div>
	
			
		
		
		</>
	);
};

export default Sidebar;
