import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import SchedulePickupScreen from './components/SchedulePickupScreen';
import TrackPickupScreen from './components/TrackPickupScreen';
import RewardsScreen from './components/RewardsScreen';
import ProfileSettingsScreen from './components/ProfileSettingsScreen';
import CenterMapScreen from './components/CenterMapScreen';
import { PlayCircle } from 'lucide-react';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [direction, setDirection] = useState(1);

  const navigate = (screen, dir = 1) => {
    setDirection(dir);
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    const props = { key: currentScreen, onNavigate: navigate, direction };
    switch (currentScreen) {
      case 'splash': return <SplashScreen {...props} />;
      case 'login': return <LoginScreen {...props} />;
      case 'home': return <HomeScreen {...props} />;
      case 'schedule': return <SchedulePickupScreen {...props} />;
      case 'track': return <TrackPickupScreen {...props} />;
      case 'rewards': return <RewardsScreen {...props} />;
      case 'profile': return <ProfileSettingsScreen {...props} />;
      case 'map': return <CenterMapScreen {...props} />;
      default: return <SplashScreen {...props} />;
    }
  };

  return (
    <>
      <div className="test-cases-panel">
        <h2><PlayCircle size={24} /> Interactive Test Cases to Try</h2>
        <div className="grid-2">
          <div className="test-case-item">1. Click "Get Started" and "Continue with Google" to test external link redirection.</div>
          <div className="test-case-item">2. In Home, click "Earn Coins" to verify dynamic Modals popping up.</div>
          <div className="test-case-item">3. In Schedule Pickup, select categories dynamically, submit for Success Modal.</div>
          <div className="test-case-item">4. From Track Pickup, tap the map to launch real Google Maps navigation externally.</div>
          <div className="test-case-item">5. Explore the entirely new "Profile Settings" and "Center Locator Map" screens!</div>
        </div>
      </div>
      
      <div className="iphone-frame" data-testid="iphone-frame">
        <div className="dynamic-island">
            <div className="camera-dot"></div>
            <div className="camera-dot" style={{width: 8, height: 8}}></div>
        </div>
        <div className="app-container">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {renderScreen()}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;
