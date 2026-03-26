import { useState } from 'react'
import './App.css'

function App() {
  const [permission, setPermission] = useState(Notification.permission)

  const requestPermission = async () => {
    const result = await Notification.requestPermission()
    setPermission(result)
  }

  const sendNotification = () => {
    if (permission === "granted") {
      new Notification("🔥 Hello from React!", {
        body: "This is your browser notification 🚀",
        icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
      })
    } else {
      alert("Please allow notifications first!")
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Browser Notification Lab</h1>

      <p>Status: <b>{permission}</b></p>

      <button onClick={requestPermission}>
        Allow Notifications
      </button>

      <br /><br />

      <button onClick={sendNotification}>
        Send Notification
      </button>
    </div>
  )
}

export default App