import React from 'react';
import Logo from "../Logo/Logo";
import styles from './Navigation.module.css'
import Contacts from "../Contacts/Contacts";
const Navigation = () => {
    return (
        <nav id='header-navigation' className={styles.nav_wrapper}>
        <Logo/>
            <div className={styles.burder}>111</div>
            <ul className={styles.ul}>
                <li>Обо мне</li>
                <li>Наставничество</li>
                <li>Мероприятия</li>
                <li>Кейсы</li>
                <li>Отзывы</li>
                <li>Контакты</li>
            </ul>
            <Contacts/>
        </nav>

    );
};

export default Navigation;