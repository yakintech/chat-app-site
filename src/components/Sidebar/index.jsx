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
		<div className={styles.wrapper}>
			<img src={logo}/>

			<p><i class="fa-solid fa-house"></i>Dashboards</p>
			
			{/* {' '}
			<ul>
				<li>
					<Link to="/admin/">Home</Link>
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
