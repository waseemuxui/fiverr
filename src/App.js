import React, { useState, useEffect, useRef } from 'react';

function App() {
  // Default settings for Fiverr dashboard URL and refresh interval
  const defaultUrl = "https://www.fiverr.com/users/username/manage_gigs";
  const [url, setUrl] = useState(defaultUrl);
  const [baseIntervalMinutes, setBaseIntervalMinutes] = useState(7);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [iframeKey, setIframeKey] = useState(Date.now());
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [nextRefresh, setNextRefresh] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const refreshTimeoutRef = useRef(null);
  const countdownIntervalRef = useRef(null);

  // Calculate a randomized interval (±20% variation)
  const getRandomInterval = () => {
    const baseMs = baseIntervalMinutes * 60 * 1000;
    const variation = baseMs * 0.2;
    return baseMs - variation + Math.random() * (variation * 2);
  };

  // Auto-refresh logic with randomized interval and updating next refresh time
  useEffect(() => {
    if (isRefreshing) {
      if (refreshTimeoutRef.current) clearTimeout(refreshTimeoutRef.current);
      // Schedule initial refresh
      const initialInterval = getRandomInterval();
      setNextRefresh(Date.now() + initialInterval);
      refreshTimeoutRef.current = setTimeout(function scheduleRefresh() {
        if (!document.hidden) {
          setIframeKey(Date.now());
        }
        // Schedule next refresh with a new randomized interval
        const newInterval = getRandomInterval();
        setNextRefresh(Date.now() + newInterval);
        refreshTimeoutRef.current = setTimeout(scheduleRefresh, newInterval);
      }, initialInterval);
    } else {
      if (refreshTimeoutRef.current) clearTimeout(refreshTimeoutRef.current);
      setNextRefresh(null);
    }
    return () => {
      if (refreshTimeoutRef.current) clearTimeout(refreshTimeoutRef.current);
    };
  }, [isRefreshing, baseIntervalMinutes]);

  // Countdown timer: update every second based on nextRefresh
  useEffect(() => {
    if (isRefreshing && nextRefresh) {
      countdownIntervalRef.current = setInterval(() => {
        const secondsLeft = Math.max(0, Math.floor((nextRefresh - Date.now()) / 1000));
        setTimeLeft(secondsLeft);
      }, 1000);
    } else {
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
      setTimeLeft(null);
    }
    return () => {
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    };
  }, [isRefreshing, nextRefresh]);

  // Hide splash screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => setIsRefreshing(true);
  const handleStop = () => {
    setIsRefreshing(false);
    if (refreshTimeoutRef.current) clearTimeout(refreshTimeoutRef.current);
  };
  const toggleMinimize = () => setIsMinimized(prev => !prev);

  return (
    <>
      {showSplash && (
        <div className="splash-screen">
          <img src="/intro.gif" alt="Intro Animation" className="splash-intro" />
        </div>
      )}
      <div className={`app-container ${showSplash ? 'hidden' : ''}`}>
        <header className="app-header">
          <div className="logo-container">
            <img src="/logo1.png" alt="Header Logo" className="header-logo" />
            <h1>Fiverr Reloader</h1>
          </div>
          <p>Keep your Fiverr dashboard active 24/7 with randomized, human-like auto-refresh.</p>
        </header>

        {isRefreshing && timeLeft !== null && (
          <div className="countdown-timer">Next refresh in: {timeLeft} seconds</div>
        )}

        <section className="settings-panel">
          <div className="input-group">
            <label htmlFor="dashboardUrl">Fiverr Dashboard URL</label>
            <input
              id="dashboardUrl"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter Fiverr dashboard URL"
            />
          </div>
          <div className="input-group">
            <label htmlFor="refreshInterval">Base Refresh Interval (minutes)</label>
            <input
              id="refreshInterval"
              type="number"
              min="1"
              value={baseIntervalMinutes}
              onChange={(e) => setBaseIntervalMinutes(Number(e.target.value))}
            />
          </div>
          <div className="button-group">
            {!isRefreshing ? (
              <button className="btn primary" onClick={handleStart}>
                Start Auto-Refresh
              </button>
            ) : (
              <button className="btn danger" onClick={handleStop}>
                Stop Auto-Refresh
              </button>
            )}
            <button className="btn secondary" onClick={toggleMinimize}>
              {isMinimized ? 'Expand' : 'Minimize'}
            </button>
          </div>
        </section>

        <section className={`iframe-wrapper ${isMinimized ? 'minimized' : ''}`}>
          <iframe key={iframeKey} src={url} title="Fiverr Dashboard" frameBorder="0" />
        </section>

        <footer className="app-footer">
          <p>© {new Date().getFullYear()} Made by WaseemUXUi</p>
        </footer>
      </div>
    </>
  );
}

export default App;
