import {useState} from 'react';
import styles from '../styles/page/home.module.css';
import toast from "react-hot-toast";
import axios from 'axios';
const Home = () =>{
    const [email,setEmail] = useState('');
    const [num,setNum] = useState('');
    const [isAlert,setIsAlert] = useState(false);
    const success = (value) =>toast.success(value);
    const errorToast = (value) =>toast.error(value);
    async function handleSubmit(e){
        e.preventDefault();
        if(num===undefined || num==='') return alert("Enter Favorite Number")
        try {
            const data = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/user/useradd`,{
            email:email,
            favno:num,
            alert:isAlert
        })
        if(data.data.message === "Email Already Exists"){
            if(data.data.data === true) errorToast(data.data.message)
            else alert(data.data.message);
        }
        else{
            success(data.data.message);
        }
    } catch (error) {
            errorToast(error.data);
        }
    }
    return(
        <>
            <h1 className={styles.header}>Customer Delivery App</h1>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.div}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className={styles.div}>
                <label htmlFor="number">Favourite Number</label>
                <input type="number" name="number" id="number" onChange={(e)=>setNum(e.target.value)}/>
                </div>
                <div style={{display:"flex"}}>
                <input type="checkbox" name="isAlert" id="isAlert" onClick={()=>setIsAlert(prev=>!prev)}/>
                <label>Use Toast Instead of Alert Box?(When Error Occurs)</label>
                </div>
                <button type='submit'>Submit</button>
                <p style={{textAlign:"center",color:"GrayText"}}>OrbDoc Intern</p>
                </form>
            </div>
        </>
    )
}
export default Home;