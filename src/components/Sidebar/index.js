import React, { useContext } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { authContext } from '../../store/AuthContext';
import styles from './index.module.css';

const Sidebar = () => {
	const { loginStatus, setloginStatus } = useContext(authContext);

	const logout = () => {
		setloginStatus(false);
	};

	if (!loginStatus) return <Navigate to="/" />;
	return (
		<div className={styles.wrapper}>
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
			<button onClick={logout}>Logout</button>
		</div>
	);
};

export default Sidebar;
