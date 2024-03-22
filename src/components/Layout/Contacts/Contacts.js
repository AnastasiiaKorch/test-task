import React from 'react';
import phone from '../../../img/phone.png';
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <>
        <div className={styles.contact_wrapper}>
            <img src={phone} alt='иконка телефона' className={styles.img}/>
            <a href="tel:83451233445" className={styles.a}>8-345-123-34-45</a>
        </div>
    <div className={styles.contact_wrapper_small}>
       <a href="tel:83451233445" className={styles.a}> <img src={phone} alt='иконка телефона' className={styles.img}/></a>



    </div>
            </>
    );
};

export default Contacts;