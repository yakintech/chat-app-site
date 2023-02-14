import React from 'react';
import styles from './index.module.css';
import group from '../../images/icons/networking.png';
import user from '../../images/icons/user.png';
import online from '../../images/icons/online.png';
import offline from '../../images/icons/offline.png';
import profile from '../../images/icons/profile.png';
import groupuser from '../../images/icons/groupuser.png';

function Dashboard() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.info_boxs}>
				<div className={styles.info_box}>
					<div className={styles.left}>
						<h2 className={styles.title}>number of groups</h2>
						<p className={styles.count}>7</p>
					</div>
					<div className={styles.right}>
						<img src={group} alt="#" />
					</div>
				</div>
				<div className={styles.info_box}>
					<div className={styles.left}>
						<h2 className={styles.title}>users</h2>
						<p className={styles.count}>29</p>
					</div>
					<div className={styles.right}>
						<img src={user} alt="#" />
					</div>
				</div>
				<div className={styles.info_box}>
					<div className={styles.left}>
						<h2 className={styles.title}>online</h2>
						<p className={styles.count}>12</p>
					</div>
					<div className={styles.right}>
						<img src={online} alt="#" />
					</div>
				</div>
				<div className={styles.info_box}>
					<div className={styles.left}>
						<h2 className={styles.title}>offline</h2>
						<p className={styles.count}>17</p>
					</div>
					<div className={styles.right}>
						<img src={offline} alt="#" />
					</div>
				</div>
			</div>

			<div className={styles.new_user}>
				<div className={styles.user_title_wrapper}>
					<h2 className={styles.user_title}>New Users</h2>
					<img className={styles.user_img} src={groupuser} alt="#" />
				</div>

				<div className={styles.user_info}>
					<h3 className={styles.user_subtitle}>Profile</h3>
					<h3 className={styles.user_subtitle}>Name</h3>
					<h3 className={styles.user_subtitle}>Date</h3>
				</div>
				<div className={styles.user_info}>
					<img src={profile} alt="#" />
					<p className={styles.user_name}>Eminem</p>
					<p className={styles.user_date}>01.02.2023</p>
				</div>
				<div className={styles.user_info}>
					<img src={profile} alt="#" />
					<p className={styles.user_name}>Eminem</p>
					<p className={styles.user_date}>01.02.2023</p>
				</div>
				<div className={styles.user_info}>
					<img src={profile} alt="#" />
					<p className={styles.user_name}>Eminem</p>
					<p className={styles.user_date}>01.02.2023</p>
				</div>
				<div className={styles.user_info}>
					<img src={profile} alt="#" />
					<p className={styles.user_name}>Eminem</p>
					<p className={styles.user_date}>01.02.2023</p>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
