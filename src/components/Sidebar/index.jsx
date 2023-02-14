import React, { useContext } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
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
		<div className={styles.wrapper}>
<<<<<<< HEAD:src/components/Sidebar/index.js
=======
			<img src={logo}/>

			<p><i class="fa-solid fa-house"></i>Dashboards</p>
			
			{/* {' '}
>>>>>>> 885324c9b724549a32ff5e734ca298494d316f78:src/components/Sidebar/index.jsx
			<ul>
				<li>
					<Link to="/admin/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link to="/admin/group">Group</Link>
				</li>
				<li>
					<Link to="/admin/group/create">Group Create</Link>
				</li>
			</ul>
			<button onClick={logout}>Logout</button> */}
		</div>
		</>
	);
};

export default Sidebar;
