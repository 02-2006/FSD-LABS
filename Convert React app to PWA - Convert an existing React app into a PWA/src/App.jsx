import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
          color: #f8fafc;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .app-container {
          width: 90%;
          max-width: 800px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
          overflow: hidden;
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(0,0,0,0) 70%);
          top: -150px;
          left: -150px;
          border-radius: 50%;
          z-index: 0;
        }
        .header {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 1rem;
        }
        .title {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(to right, #818cf8, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .status-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 500;
          background: ${isOnline ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'};
          color: ${isOnline ? '#34d399' : '#f87171'};
          border: 1px solid ${isOnline ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
          transition: all 0.3s ease;
        }
        .status-badge::before {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${isOnline ? '#34d399' : '#f87171'};
          box-shadow: 0 0 10px ${isOnline ? '#34d399' : '#f87171'};
        }
        .content {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .card {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .counter-value {
          font-size: 4rem;
          font-weight: 800;
          margin: 1rem 0;
          color: #f8fafc;
        }
        .btn-primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 99px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
        }
        .btn-primary:active {
          transform: scale(0.95);
        }
        .features-list {
          list-style: none;
          text-align: left;
        }
        .features-list li {
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #cbd5e1;
        }
        .features-list li::before {
          content: '✓';
          color: #818cf8;
          font-weight: bold;
        }
      `}</style>

      <div className="app-container">
        <div className="glow"></div>
        
        <header className="header">
          <h1 className="title">Nova PWA Dashboard</h1>
          <div className="status-badge">
            {isOnline ? 'Online Ready' : 'Offline Mode Active'}
          </div>
        </header>

        <section className="content">
          <div className="card">
            <h2 style={{ color: '#94a3b8', fontSize: '1.2rem' }}>Interactive Counter</h2>
            <div className="counter-value">{count}</div>
            <button className="btn-primary" onClick={() => setCount(c => c + 1)}>
              Increment Value
            </button>
          </div>

          <div className="card">
            <h2 style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Core Capabilities</h2>
            <ul className="features-list">
              <li>Installable on Desktop & Mobile</li>
              <li>Fully functional Offline</li>
              <li>Instant Loading via Caching</li>
              <li>Push Notifications Support</li>
              <li>Modern Glassmorphism UI</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
