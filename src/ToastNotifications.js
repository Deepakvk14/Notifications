import React from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure()
function ToastNotifications() {
        const Notify = ()=>{
            toast('Basic Notification!')
        }
    return (
        <div className="notify"> 
            <button onClick={Notify}>Notify</button>
        </div>
    )
}

export default ToastNotifications
