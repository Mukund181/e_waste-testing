import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Lock } from 'lucide-react';

const SlideVariants = {
  initial: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  animate: { x: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } },
  exit: (direction) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0, transition: { duration: 0.2 } })
};

const LoginScreen = ({ onNavigate, direction }) => {
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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
        <button 
          onClick={() => onNavigate('splash', -1)} 
          style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer', padding: '8px', marginLeft: '-8px' }}
        >
          <ArrowLeft size={28} />
        </button>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ textAlign: 'center', marginBottom: 32 }}
      >
        <h2 style={{ fontSize: 32, margin: '0 0 8px 0', color: '#fff', fontWeight: 600 }}>Welcome Back</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 15, margin: 0 }}>Sign in to your EcoCycle account</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ marginBottom: '24px' }}
      >
        <div style={{ position: 'relative', marginBottom: 16 }}>
          <Mail size={20} color="var(--primary-color)" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 16 }} />
          <input type="email" placeholder="priya@gmail.com" className="input-field" defaultValue="priya@gmail.com" style={{ paddingLeft: 48 }} />
        </div>
        
        <div style={{ position: 'relative', marginBottom: 8 }}>
          <Lock size={20} color="var(--primary-color)" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 16 }} />
          <input type="password" placeholder="••••••••" className="input-field" defaultValue="123456" style={{ paddingLeft: 48, marginBottom: 0 }} />
        </div>
        
        <div style={{ textAlign: 'right', marginBottom: 32 }}>
          <span style={{ color: 'var(--primary-color)', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>Forgot Password?</span>
        </div>
        
        <button className="btn-primary" onClick={() => onNavigate('home', 1)}>Let's go!</button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ display: 'flex', alignItems: 'center', margin: '24px 0', color: 'var(--text-muted)', fontSize: 12 }}
      >
        <div style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
        <span style={{ margin: '0 16px', letterSpacing: 1 }}>OR</span>
        <div style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        <a href="https://accounts.google.com/signin" target="_blank" rel="noopener noreferrer" className="external-link">
          <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 15, fontWeight: 500, transition: 'all 0.2s', backdropFilter: 'blur(10px)' }}>
            <span style={{ marginRight: 12, fontSize: 20 }}>G</span> Continue with Google
          </div>
        </a>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ color: 'var(--text-muted)', fontSize: 14, textAlign: 'center', marginTop: 'auto', paddingTop: '24px' }}
      >
        Don't have an account? <span style={{ color: 'var(--primary-color)', fontWeight: 600, cursor: 'pointer' }}>Sign Up</span>
      </motion.p>
    </motion.div>
  );
};

export default LoginScreen;
