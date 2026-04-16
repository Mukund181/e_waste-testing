import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ChevronRight, Smartphone, Laptop, Tv, Battery } from 'lucide-react';

const SlideVariants = {
  initial: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  animate: { x: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } },
  exit: (direction) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0, transition: { duration: 0.2 } })
};

const SchedulePickupScreen = ({ onNavigate, direction }) => {
  const [selectedCat, setSelectedCat] = useState('Phones');
  const [modalOpen, setModalOpen] = useState(false);

  const categories = [
    { name: 'Phones', icon: Smartphone },
    { name: 'Laptops', icon: Laptop },
    { name: 'TV/Monitors', icon: Tv },
    { name: 'Batteries', icon: Battery },
  ];

  const handleSchedule = () => {
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false);
      onNavigate('track', 1);
    }, 2500);
  };

  return (
    <motion.div 
      className="screen-animate" 
      custom={direction}
      variants={SlideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ position: 'relative', height: '100%' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
        <button 
          onClick={() => onNavigate('home', -1)} 
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '12px', padding: 8, cursor: 'pointer', marginRight: 16 }}
        >
          <ArrowLeft size={24} />
        </button>
        <h2 style={{ color: '#fff', fontSize: 20, margin: 0, fontWeight: 600 }}>Schedule Pickup</h2>
      </div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
        <h3 style={{ color: 'var(--text-muted)', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>Select Item Category</h3>
        
        <div className="grid-2" style={{ marginBottom: 32 }}>
          {categories.map(cat => {
            const IconComponent = cat.icon;
            const isSelected = selectedCat === cat.name;
            return (
              <motion.div 
                whileTap={{ scale: 0.95 }}
                key={cat.name} 
                onClick={() => setSelectedCat(cat.name)}
                style={{
                  background: isSelected ? 'var(--primary-glow)' : 'var(--surface-color)',
                  border: `1px solid ${isSelected ? 'var(--primary-color)' : 'var(--surface-border)'}`,
                  borderRadius: 20,
                  padding: '24px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isSelected ? '0 10px 20px rgba(16, 185, 129, 0.2)' : 'none'
                }}
              >
                <div style={{ 
                  background: isSelected ? 'var(--primary-color)' : 'rgba(255,255,255,0.05)', 
                  padding: 12, borderRadius: '50%', marginBottom: 12 
                }}>
                  <IconComponent color={isSelected ? '#fff' : 'var(--text-muted)'} size={24} />
                </div>
                <span style={{ color: isSelected ? '#fff' : 'var(--text-muted)', fontWeight: isSelected ? 600 : 500, fontSize: 14 }}>{cat.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        <h3 style={{ color: 'var(--text-muted)', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>Pickup Details</h3>
        <div style={{ background: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: 24, padding: 20, marginBottom: 16, backdropFilter: 'blur(10px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 16 }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: 12, margin: '0 0 4px' }}>Date</p>
              <p style={{ color: '#fff', fontSize: 16, margin: 0, fontWeight: 500 }}>Today, 10:00 AM</p>
            </div>
            <ChevronRight color="var(--text-muted)" size={20} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: 12, margin: '0 0 4px' }}>Location</p>
              <p style={{ color: '#fff', fontSize: 16, margin: 0, fontWeight: 500 }}>123 Green Ave, NY</p>
            </div>
            <ChevronRight color="var(--text-muted)" size={20} />
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={{ position: 'absolute', bottom: 32, left: 24, right: 24 }}>
        <button className="btn-primary" onClick={handleSchedule}>Confirm Pickup</button>
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="modal-overlay"
          >
            <motion.div 
              initial={{ scale: 0.5, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="modal-content glass-card"
            >
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}
                style={{ margin: '0 auto 24px', display: 'flex', justifyContent: 'center' }}
              >
                <CheckCircle2 color="var(--primary-color)" size={80} />
              </motion.div>
              <h2 style={{ margin: '0 0 12px', fontSize: 24, fontWeight: 700 }}>Success!</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, marginBottom: 0, lineHeight: 1.5 }}>Your pickup is scheduled.<br/>Redirecting to tracking...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SchedulePickupScreen;
