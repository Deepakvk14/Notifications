
import React, {useState} from 'react';
import './App.css';
import {useNotification} from "./NotificationProvider";
import ToastNotifications from "./ToastNotifications"

function App() {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useNotification();

  const handleNewNotification = () => {
    dispatch({
      type: "ERROR",
      message: inputVal,
      title: "Successful Request"
    })
  }

  return (
    <div className="App">
      <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
      <button onClick={handleNewNotification}>Add Notification</button>
    <ToastNotifications/>
    </div>
  );
}

export default App;