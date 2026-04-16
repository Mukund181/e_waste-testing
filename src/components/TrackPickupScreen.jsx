import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Map, Clock, PhoneCall, CheckCircle2 } from 'lucide-react';

const SlideVariants = {
  initial: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  animate: { x: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } },
  exit: (direction) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0, transition: { duration: 0.2 } })
};

const TrackPickupScreen = ({ onNavigate, direction }) => {
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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <button 
          onClick={() => onNavigate('home', -1)} 
          style={{ background: 'var(--surface-color)', border: '1px solid var(--surface-border)', color: '#fff', borderRadius: '16px', padding: 10, cursor: 'pointer', marginRight: 16, backdropFilter: 'blur(10px)' }}
        >
          <ArrowLeft size={20} />
        </button>
        <h2 style={{ color: '#fff', fontSize: 20, margin: 0, fontWeight: 600 }}>Tracking</h2>
      </div>

      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
        <a href="https://www.google.com/maps/dir/?api=1&destination=recycling+center" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <div style={{ position: 'relative', width: '100%', height: 220, borderRadius: 28, background: 'var(--surface-color)', overflow: 'hidden', border: '1px solid var(--surface-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            
            {/* Map styling mockup */}
            <div style={{ position: 'absolute', width: '200%', height: '200%', background: 'var(--glass-bg)', opacity: 0.5 }}></div>
            
            <Map size={48} color="var(--primary-color)" style={{ zIndex: 2, filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))' }} />
            
            <div style={{ position: 'absolute', bottom: 16, background: 'var(--primary-gradient)', padding: '8px 16px', borderRadius: 20, color: '#fff', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, zIndex: 2 }}>
              <Clock size={16} /> ETA: 12 mins
            </div>
          </div>
        </a>
      </motion.div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={{ background: 'var(--surface-color)', borderRadius: 28, padding: 24, border: '1px solid var(--surface-border)', backdropFilter: 'blur(10px)' }}>
        
        {/* Driver Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 24 }}>👨‍✈️</span>
            </div>
            <div>
              <h4 style={{ margin: '0 0 4px', color: '#fff', fontSize: 16, fontWeight: 600 }}>Rajesh Kumar</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: 13 }}>Nissan Leaf EV • DL 8C 1234</p>
            </div>
          </div>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-glow)', border: '1px solid var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <PhoneCall size={20} color="var(--primary-color)" />
          </div>
        </div>

        {/* Dynamic Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', left: 16, top: 20, bottom: 20, width: 2, background: 'rgba(255,255,255,0.1)', zIndex: 1 }}></div>

          <div style={{ display: 'flex', gap: 20, marginBottom: 24, position: 'relative', zIndex: 2 }}>
            <div style={{ background: '#0f172a', borderRadius: '50%', padding: 2 }}>
              <CheckCircle2 size={28} color="var(--primary-color)" fill="rgba(16, 185, 129, 0.2)" />
            </div>
            <div>
              <h5 style={{ margin: '0 0 4px', color: '#fff', fontSize: 15, fontWeight: 500 }}>Pickup Confirmed</h5>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: 13 }}>Scheduled for today</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 20, position: 'relative', zIndex: 2 }}>
            <div style={{ background: '#0f172a', borderRadius: '50%', padding: 2 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 10px var(--primary-color)' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff' }}></div>
              </div>
            </div>
            <div>
              <h5 style={{ margin: '0 0 4px', color: '#fff', fontSize: 15, fontWeight: 600 }}>Driver En Route</h5>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: 13 }}>Arriving in approx. 12 minutes</p>
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default TrackPickupScreen;
