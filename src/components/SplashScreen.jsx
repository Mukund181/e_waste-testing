import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const SlideVariants = {
  initial: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  animate: { x: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } },
  exit: (direction) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0, transition: { duration: 0.2 } })
};

const SplashScreen = ({ onNavigate, direction }) => {
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
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', damping: 15, delay: 0.2 }}
          style={{ width: 140, height: 140, borderRadius: '50%', background: 'var(--surface-color)', border: '2px solid var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: '0 10px 40px var(--primary-glow)' }}
        >
          <Leaf size={60} color="var(--primary-color)" />
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ fontSize: 40, margin: '0 0 8px 0', color: '#fff', fontWeight: 700 }}
        >
          EcoCycle
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ color: 'var(--text-muted)', fontSize: 16 }}
        >
          Recycle smarter. Live greener.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          style={{ background: 'var(--primary-glow)', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '20px', borderRadius: '20px', marginTop: '40px', width: '100%', backdropFilter: 'blur(10px)' }}
        >
            <p style={{ color: '#fff', margin: 0, fontSize: 14, fontWeight: 500, lineHeight: 1.5, textAlign: 'center' }}>Schedule pickups for your old devices and track your environmental impact.</p>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{ width: '100%' }}
      >
        <button 
          className="btn-primary" 
          onClick={() => onNavigate('login', 1)}
          style={{ marginBottom: 16 }}
        >
          Get Started
        </button>
        <p style={{ color: 'var(--text-muted)', fontSize: 14, textAlign: 'center', margin: 0 }}>
          Already have an account? <span onClick={() => onNavigate('login', 1)} style={{ color: 'var(--primary-color)', fontWeight: 600, cursor: 'pointer' }}>Log in</span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
