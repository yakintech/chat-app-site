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
          <img src={logo} />
        </div>
        <ul className={styles.sidebar_menubigdiv}>
          <li>Menu</li>
          <ul className={styles.sidebar_menudiv}>
            <li className={styles.sidebar_alldiv}>
              {" "}
              <i className="fa-solid fa-house-chimney"></i>&nbsp;Dashboards
              <ul className={styles.sidebar_allminidiv}>
                <li>
				<Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li>
                  <a href="#">Sass</a>
                </li>
                <li>
                  <a href="#">Crypbt</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </li>
            <li className={styles.sidebar_alldiv}>
              {" "}
              <i className="fa-solid fa-layer-group"></i>&nbsp;Layout
              <ul className={styles.sidebar_allminidiv}>
                <li>
				<Link to="/admin/group">Group</Link>
                </li>
                <li>
                <Link to="/admin/group/create">Group Create</Link>
                </li>
              
              </ul>
            </li>
          </ul>
          <li>Apps</li>

          <ul className={styles.sidebar_menudiv}>
            <li className={styles.sidebar_alldiv}>
              <i className="fa-solid fa-calendar-days"></i>&nbsp;Calendars
              <ul className={styles.sidebar_allminidiv}>
                <li>
                  <a href="#">Tui Calendar</a>
                </li>
              </ul>
            </li>

            <li className={styles.sidebar_alldiv}>
              <i className="fa-brands fa-rocketchat"></i>&nbsp;Chat
            </li>
            <li className={styles.sidebar_alldiv}>
              <i className="fa-solid fa-file"></i>&nbsp;File Meneger
            </li>
            <li className={styles.sidebar_alldiv}>
              <i className="fa-solid fa-dumpster"></i>&nbsp;Ecommerce
              <ul className={styles.sidebar_allminidiv}>
                <li>
                  <a href="#">Cart</a>
                </li>
                <li>
                  <a href="#">Check Out</a>
                </li>
                <li>
                  <a href="#">Shops</a>
                </li>
                <li>
                  <a href="#">Add Products</a>
                </li>
              </ul>
            </li>
            <li className={styles.sidebar_alldiv}>
              <i className="fa-solid fa-prescription"></i>&nbsp;Crypto
              <ul className={styles.sidebar_allminidiv}>
                <li>
                  <a href="#">Wallet</a>
                </li>
                <li>
                  <a href="#">Buy/Sell</a>
                </li>
                <li>
                  <a href="#">Exchange</a>
                </li>
              
            
                <li>
                  <a href="#">ICO Londing</a>
                </li>
              </ul>
            </li>
            <li className={styles.sidebar_alldiv}>
              <i className="fa-solid fa-envelope"></i>&nbsp;Email
              <ul className={styles.sidebar_allminidiv}>
                <li>
                  <a href="#">Inbox</a>
                </li>
                <li>
                  <a href="#">Read Email</a>
                </li>
                <li>
                  <a href="#">Templates</a>
                </li>
              </ul>
            </li>
            <li className={styles.sidebar_alldiv}>
              <i className="fa-solid fa-receipt"></i>&nbsp;Invocies
              <ul className={styles.sidebar_allminidiv}>
                <li>
                  <a href="#">Invoice Text </a>
                </li>
               
              </ul>
            </li>
            <li className={styles.sidebar_alldiv}>
              <i className="fa-solid fa-envelope"></i>&nbsp;Projects
              <ul className={styles.sidebar_allminidiv}>
                <li>
                  <a href="#">Projects Grid</a>
                </li>
                <li>
                  <a href="#">Projects Lict</a>
                </li>
                <li>
                  <a href="#">Projects Overwiew</a>
                </li>

                <li>
                  <a href="#">Create New</a>
                </li>
              </ul>
            </li>
            <li className={styles.sidebar_alldiv}>
              <i className="fa-solid fa-list-check"></i>&nbsp;Tasks
              <ul className={styles.sidebar_allminidiv}>
                <li>
                  <a href="#">Tasks List</a>
                </li>
                <li>
                  <a href="#">Kanban Board</a>
                </li>
                <li>
                  <a href="#">Create Tasks</a>
                </li>
              </ul>
            </li>

		<button onClick={logout}>Logout</button> 
          </ul>
        </ul>
      </div>
	
			
		
		
		</>
	);
};

export default Sidebar;
