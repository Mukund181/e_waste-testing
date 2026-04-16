import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Gift, Truck, UserRound, Home, Calendar, Navigation } from 'lucide-react';

const SlideVariants = {
  initial: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  animate: { x: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } },
  exit: (direction) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0, transition: { duration: 0.2 } })
};

const HomeScreen = ({ onNavigate, direction }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <motion.div 
      className="screen-animate" 
      custom={direction}
      variants={SlideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ position: 'relative', height: '100%', paddingBottom: 80 }}
    >
      {/* Header */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: '0 0 4px' }}>Good Morning,</p>
          <h2 style={{ color: '#fff', fontSize: 26, margin: 0, fontWeight: 700 }}>Priya! 👋</h2>
        </div>
        <div 
          onClick={() => onNavigate('profile', 1)}
          style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 8px 16px rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)' }}
        >
          <UserRound color="var(--primary-color)" />
        </div>
      </motion.div>

      {/* Search */}
      <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} style={{ position: 'relative', marginBottom: 32 }}>
        <input 
          type="text" 
          placeholder="Search items, categories..." 
          className="input-field" 
          style={{ paddingLeft: 48, borderRadius: 24, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }} 
        />
        <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }} />
      </motion.div>

      {/* Quick Actions */}
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6">
        <h3 style={{ color: '#fff', fontSize: 18, fontWeight: 600, margin: '0 0 16px' }}>Quick Actions</h3>
        <div className="grid-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onNavigate('schedule', 1)} style={{ background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: 20, padding: '20px 12px', textAlign: 'center', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
            <Truck color="var(--primary-color)" size={28} style={{ marginBottom: 12, margin: '0 auto' }} />
            <p style={{ color: '#fff', fontSize: 13, fontWeight: 500, margin: 0 }}>Schedule</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onNavigate('map', 1)} style={{ background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: 20, padding: '20px 12px', textAlign: 'center', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
            <MapPin color="#fff" size={28} style={{ marginBottom: 12, margin: '0 auto' }} />
            <p style={{ color: '#fff', fontSize: 13, fontWeight: 500, margin: 0 }}>Centers</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setModalOpen(true)} style={{ background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: 20, padding: '20px 12px', textAlign: 'center', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
            <Gift color="#fff" size={28} style={{ marginBottom: 12, margin: '0 auto' }} />
            <p style={{ color: '#fff', fontSize: 13, fontWeight: 500, margin: 0 }}>Earn</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Impact */}
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="mb-6">
        <h3 style={{ color: '#fff', fontSize: 18, fontWeight: 600, margin: '0 0 16px' }}>Your Impact</h3>
        <div className="glass-card grid-3" style={{ padding: '24px 16px' }}>
          <div className="text-center">
            <h4 style={{ color: 'var(--primary-color)', fontSize: 28, margin: '0 0 4px', fontWeight: 700 }}>12</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: 12, margin: 0, lineHeight: 1.2 }}>items<br/>recycled</p>
          </div>
          <div className="text-center" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
            <h4 style={{ color: 'var(--primary-color)', fontSize: 28, margin: '0 0 4px', fontWeight: 700 }}>8.5</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: 12, margin: 0, lineHeight: 1.2 }}>kg CO₂<br/>saved</p>
          </div>
          <div className="text-center">
            <h4 style={{ color: 'var(--primary-color)', fontSize: 28, margin: '0 0 4px', fontWeight: 700 }}>350</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: 12, margin: 0, lineHeight: 1.2 }}>Eco<br/>Points</p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Navbar */}
      <div className="bottom-nav">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--primary-color)', cursor: 'pointer' }}>
          <Home size={28} style={{ marginBottom: 4 }} />
          <span style={{ fontSize: 11, fontWeight: 600 }}>Home</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => onNavigate('schedule', 1)}>
          <Calendar size={28} style={{ marginBottom: 4 }} />
          <span style={{ fontSize: 11, fontWeight: 500 }}>Schedule</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => onNavigate('track', 1)}>
          <Navigation size={28} style={{ marginBottom: 4 }} />
          <span style={{ fontSize: 11, fontWeight: 500 }}>Track</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => onNavigate('rewards', 1)}>
          <Gift size={28} style={{ marginBottom: 4 }} />
          <span style={{ fontSize: 11, fontWeight: 500 }}>Rewards</span>
        </div>
      </div>

      {/* Pop-up Modal via AnimatePresence */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="modal-content glass-card"
              onClick={e => e.stopPropagation()}
            >
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Gift color="var(--primary-color)" size={32} />
              </div>
              <h2 style={{ margin: '0 0 12px', fontSize: 24, fontWeight: 700 }}>Earn More Coins!</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, marginBottom: 24, lineHeight: 1.5 }}>Refer a friend to EcoCycle and earn 50 Bonus Coins immediately upon their first successful pickup.</p>
              <button className="btn-primary" onClick={() => setModalOpen(false)}>Got it!</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HomeScreen;
