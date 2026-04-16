import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Calendar, Navigation, Gift, Coins, CheckCircle2 } from 'lucide-react';

const SlideVariants = {
  initial: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  animate: { x: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } },
  exit: (direction) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0, transition: { duration: 0.2 } })
};

const RewardsScreen = ({ onNavigate, direction }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReward, setSelectedReward] = useState('');

  const rewards = [
    { title: '$5 Amazon Card', points: 300, color: '#f59e0b' },
    { title: '10% Starbucks', points: 150, color: '#10b981' },
    { title: '$10 Uber Credit', points: 500, color: '#3b82f6' }
  ];

  const handleRedeem = (title) => {
    setSelectedReward(title);
    setModalOpen(true);
  };

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
      <h2 style={{ color: '#fff', fontSize: 24, margin: '0 0 24px', fontWeight: 600 }}>Rewards</h2>

      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }} className="glass-card" style={{ padding: 24, marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: 1 }}>Available Balance</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Coins color="#FBBF24" size={28} />
            <h3 style={{ color: '#fff', fontSize: 32, margin: 0, fontWeight: 700 }}>350</h3>
          </div>
        </div>
        <button style={{ background: 'var(--primary-gradient)', border: 'none', borderRadius: 20, color: '#fff', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 8px 16px var(--primary-glow)' }}>
          History
        </button>
      </motion.div>

      <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={{ color: 'var(--text-muted)', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>Available Rewards</motion.h3>
      
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {rewards.map((reward, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: 20, padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${reward.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Gift color={reward.color} size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px', color: '#fff', fontSize: 16, fontWeight: 600 }}>{reward.title}</h4>
                <p style={{ margin: 0, color: 'var(--primary-color)', fontSize: 14, fontWeight: 500 }}>{reward.points} Points</p>
              </div>
            </div>
            <button 
              onClick={() => handleRedeem(reward.title)}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '8px 16px', borderRadius: 12, cursor: 'pointer', fontWeight: 500 }}
            >
              Redeem
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Navbar */}
      <div className="bottom-nav">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => onNavigate('home', -1)}>
          <Home size={28} style={{ marginBottom: 4 }} />
          <span style={{ fontSize: 11, fontWeight: 500 }}>Home</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => onNavigate('schedule', -1)}>
          <Calendar size={28} style={{ marginBottom: 4 }} />
          <span style={{ fontSize: 11, fontWeight: 500 }}>Schedule</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => onNavigate('track', -1)}>
          <Navigation size={28} style={{ marginBottom: 4 }} />
          <span style={{ fontSize: 11, fontWeight: 500 }}>Track</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--primary-color)', cursor: 'pointer' }}>
          <Gift size={28} style={{ marginBottom: 4 }} />
          <span style={{ fontSize: 11, fontWeight: 600 }}>Rewards</span>
        </div>
      </div>

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
                <CheckCircle2 color="var(--primary-color)" size={40} />
              </div>
              <h2 style={{ margin: '0 0 12px', fontSize: 24, fontWeight: 700 }}>Redeemed!</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, marginBottom: 24, lineHeight: 1.5 }}>
                You have successfully redeemed<br/><strong>{selectedReward}</strong>. Check your email for details.
              </p>
              <button className="btn-primary" onClick={() => setModalOpen(false)}>Awesome</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RewardsScreen;
