import React, {useEffect, useState} from 'react';
import styles from './Popup.module.css';
import {CloseOutlined} from "@ant-design/icons";
import Logo from "../Layout/Logo/Logo";

const Popup = () => {
const [isOpen, setIsOpen]= useState(true);
    const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);

const closePopup=()=>{
    setIsOpen(false)
}
const openSecondPopup=()=>{
    setIsSecondPopupOpen(true)
};
const closeSecondPopup=()=>{
    setIsSecondPopupOpen(false)
    closePopup()

};

const[firstName, setFirstName]=useState('');
    const[lastName, setLastName] =useState('');
const[firstNameDirty, setFirstNameDirty]= useState(false);
    const[lastNameDirty, setLastNameDirty]= useState(false);
    const [firstNameError, setFirstNameError]=useState('Заполните, пожалуйста, поле')
    const [lastNameError, setLastNameError]=useState('Заполните, пожалуйста, поле')
const[formValid, setFormValid]=useState(false)
const [checkboxChecked, setCheckboxChecked]=useState(false)
    const handleCheckboxChange = (e)=>{
        setCheckboxChecked(e.target.checked)
        console.log('handlechange')
    }

    const firstNameHandler=(e)=>{
        setFirstName(e.target.value)
        setFirstNameError('')
    }
    const lastNameHandler=(e)=>{
        setLastName(e.target.value)
        setLastNameError('')
    }

    useEffect(()=>{
        if(firstNameError || lastNameError){
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[lastNameError, firstNameError])

    const blurHandler =(e)=>{
        switch (e.target.name){
            case 'firstName':
                setFirstNameDirty(true)
                break
            case 'lastName':
                setLastNameDirty(true)
                break
        }
    }

    return (
        <>
            {isOpen && (
                <div className={styles.popup_mask}>
                    <div className={styles.popup_wrap}>
                        <div className={styles.popup_close}  onClick={closePopup}> <CloseOutlined/></div>
                        <h3 className={styles.popup_head}>Закажите обратный звонок</h3>
                        <form className={styles.popup_form} method="post">
                            {(firstNameDirty && firstNameError) && <div className={styles.error_msg}>{firstNameError}</div>}
                            <input onChange={e=> firstNameHandler(e)} value={firstName} onBlur={e=> blurHandler(e)} className={styles.popup_input} placeholder="Имя" type="text" id="firstName" name="firstName" required/>
                            {(lastNameDirty && lastNameError) && <div className={styles.error_msg}>{lastNameError}</div>}
                            <input onChange={e=> lastNameHandler(e)} value={lastName} onBlur={e=> blurHandler(e)} className={styles.popup_input} placeholder="Фамилия" type="text" id="lastName" name="lastName" required/>
                        </form>
                        <div className={styles.popup_checkbox_group}>
                            <label className={styles.popup_label}>

                                <input className={styles.popup_checkbox} type="checkbox" onChange={handleCheckboxChange}/>
                                <span className={styles.popup_span}>Согласен на сохранение и обработку персональных данных</span>
                            </label>
                        </div>
                        <div className={styles.popup_btns}>
        <span className={styles.btn_span}>Заказать обратный звонок

        </span>
                            <button disabled={!formValid || !checkboxChecked} className={styles.btn} type='submit' onClick={openSecondPopup}>11111</button></div>
                    </div>
                </div>
            )}

            {isSecondPopupOpen && (
                <div className={styles.popup_mask}>
                    <div className={styles.popup_second_wrap}>
                        <div className={styles.popup_close} onClick={closeSecondPopup}> <CloseOutlined/></div>
                        <div className={styles.popup_second_container}>
                            <h3 className={styles.popup_head}>Спасибо за заявку</h3>
                            <span className={styles.popup_second_text}>Я обязательно свяжусь с вами в ближайшее время.</span>

                        </div>
                       <div className={styles.container}><Logo/></div>
                    </div>

                </div>
            )
            }

        </>
    );
};

export default Popup;