import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './index.module.css';

function ProtectedLayout() {
	return (
		<div className={styles.wrapper}>
			<Sidebar />
			<Outlet />
		</div>
	);
}

export default ProtectedLayout;
