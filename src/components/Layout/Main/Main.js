import React, {useState, useEffect} from 'react';
import styles from './Main.module.css'
import photo from '../../../img/mentor.png'
import aboutme from "../../data/aboutme";
import Popup from "../../Popup/Popup";
import axios from "axios";


const Main = () => {
    const [isPopupOpen, setIsPopupOpen]= useState(false)
    const openPopup=()=>{
        setIsPopupOpen(true)
    };
    const closePopup=()=>{
        setIsPopupOpen(false)
    }
const [gbpValue, setGbpValue] = useState(null)
const roundValue = Math.round(gbpValue)

    const todayDate= new Date()
    const numbersDateArr= [
        todayDate.getFullYear(),
        todayDate.getMonth(),
        todayDate.getDate()
    ]
    const newArr = numbersDateArr.join('').split('').map(Number)
    let sum = newArr.reduce((a,b)=> a + b, 0)


    useEffect(()=> {
        const url = "https://www.cbr-xml-daily.ru/daily_json.js"
        const fetchData = async ()=>{
            try{
                const response = await axios.get(`${url}`)
                const gbpRate = response.data.Valute.GBP.Value;
                setGbpValue(gbpRate)

            }catch (error){
                console.log(error)
            }
        };
        fetchData()
    },[])

const[windowWidth, setWindowWidth]= useState(window.innerWidth)
    useEffect(()=>{
        const handleResize = ()=> {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return ()=> {
            window.removeEventListener('resize', handleResize)
        }
    },[])

    return (
        <div className={styles.main_wrapper}>
            <div className={styles.main_aboutme}>
                <div className={styles.main_head_aboutme}>{aboutme.head}</div>
                <div className={styles.main_text_aboutme}>
                    {windowWidth <= 769 ? aboutme.text_mob : aboutme.text}
                </div>

        <div className={styles.btn_wrapper}>

                <span className={styles.btn_span} onClick={isPopupOpen ? closePopup : openPopup}>Бесплатная консультация

        </span>
                <button className={styles.btn} onClick={isPopupOpen ? closePopup : openPopup}>11111</button>



            <span className={styles.btn_span} onClick={isPopupOpen ? closePopup : openPopup}>Записаться на косультацию

                </span>
            <button className={styles.btn} onClick={isPopupOpen ? closePopup : openPopup}>
                111111
            </button>
            <div className={styles.btn_mob}>
                <span className={styles.btn_span_mob} onClick={isPopupOpen ? closePopup : openPopup}>Записаться

        </span>
                <button className={styles.btn_mob_btn} onClick={isPopupOpen ? closePopup : openPopup}>11111</button>
            </div>
            <div className={styles.btn_mob}>
                <span className={styles.btn_span_mob} onClick={isPopupOpen ? closePopup : openPopup}>Заказать звонок

                </span>
                <button className={styles.btn_mob_btn} onClick={isPopupOpen ? closePopup : openPopup}>
                    111111
                </button>
            </div>
        </div>

<div className={styles.num_wrap}>
    <div className={styles.num}>
    <span className={styles.num_head}>{sum}</span> <p className={styles.num_p}>{windowWidth <= 769 ? 'техник' : 'техник для достижения целей'}</p>
</div>
<div className={styles.num}><span className={styles.num_head}>{roundValue}%</span>
    <p className={styles.num_p}>{windowWidth <= 769 ? 'продуктивности' : 'увеличение личной продуктивности'}</p></div>
</div>
            </div>

            <img src={photo} alt='фото мужчины' className={styles.photo}/>
            {isPopupOpen && <Popup />}
        </div>

    );
};

export default Main;