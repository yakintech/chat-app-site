import React, { useContext } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

function ProtectedLayout() {
	return (
		<>
			<Sidebar />
			<Outlet />
		</>
	);
}

export default ProtectedLayout;
