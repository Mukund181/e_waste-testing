import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Bell, Shield, LogOut, Moon, MapPin } from 'lucide-react';

const SlideVariants = {
  initial: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  animate: { x: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } },
  exit: (direction) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0, transition: { duration: 0.2 } })
};

const Toggle = ({ isOn, onToggle }) => (
  <div 
    onClick={onToggle}
    style={{
      width: 44, height: 24, background: isOn ? 'var(--primary-color)' : 'rgba(255,255,255,0.1)',
      borderRadius: 12, position: 'relative', cursor: 'pointer', transition: 'background 0.3s'
    }}
  >
    <motion.div 
      layout
      transition={{ type: "spring", stiffness: 700, damping: 30 }}
      style={{
        width: 20, height: 20, background: '#fff', borderRadius: '50%',
        position: 'absolute', top: 2, left: isOn ? 22 : 2, boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}
    />
  </div>
);

const ProfileSettingsScreen = ({ onNavigate, direction }) => {
  const [notifs, setNotifs] = useState(true);
  const [dark, setDark] = useState(true);

  return (
    <motion.div 
      className="screen-animate" 
      custom={direction}
      variants={SlideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
        <button 
          onClick={() => onNavigate('home', -1)} 
          style={{ background: 'var(--surface-color)', border: '1px solid var(--surface-border)', color: '#fff', borderRadius: '16px', padding: 10, cursor: 'pointer', marginRight: 16 }}
        >
          <ArrowLeft size={20} />
        </button>
        <h2 style={{ color: '#fff', fontSize: 20, margin: 0, fontWeight: 600 }}>Profile</h2>
      </div>

      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}>
        <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '2px solid var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, boxShadow: '0 10px 30px var(--primary-glow)' }}>
          <span style={{ fontSize: 40 }}>👩‍💻</span>
        </div>
        <h3 style={{ margin: '0 0 4px', color: '#fff', fontSize: 24, fontWeight: 700 }}>Priya Sharma</h3>
        <p style={{ margin: 0, color: 'var(--text-muted)' }}>priya@gmail.com</p>
      </motion.div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        <h4 style={{ color: 'var(--text-muted)', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>Settings</h4>
        
        <div style={{ background: 'var(--surface-color)', borderRadius: 24, border: '1px solid var(--surface-border)', padding: '8px 20px', marginBottom: 24 }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#fff' }}>
              <User size={20} color="var(--primary-color)" /> Edit Profile
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#fff' }}>
              <Bell size={20} color="var(--primary-color)" /> Notifications
            </div>
            <Toggle isOn={notifs} onToggle={() => setNotifs(!notifs)} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#fff' }}>
              <Moon size={20} color="var(--primary-color)" /> Dark Mode
            </div>
            <Toggle isOn={dark} onToggle={() => setDark(!dark)} />
          </div>
        </div>

        <h4 style={{ color: 'var(--text-muted)', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>Support</h4>
        
        <div style={{ background: 'var(--surface-color)', borderRadius: 24, border: '1px solid var(--surface-border)', padding: '8px 20px' }}>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#fff' }}>
                <Shield size={20} color="var(--text-muted)" /> Privacy Policy
              </div>
            </div>
          </a>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', cursor: 'pointer', color: '#ef4444' }} onClick={() => onNavigate('splash', -1)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <LogOut size={20} /> Log Out
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default ProfileSettingsScreen;
