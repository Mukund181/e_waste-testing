import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Navigation, Star } from 'lucide-react';

const SlideVariants = {
  initial: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  animate: { x: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } },
  exit: (direction) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0, transition: { duration: 0.2 } })
};

const CenterMapScreen = ({ onNavigate, direction }) => {
  const centers = [
    { name: 'GreenWaste Hub', distance: '1.2 km', rating: 4.8 },
    { name: 'EcoDrop Facility', distance: '3.5 km', rating: 4.5 }
  ];

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
          style={{ background: 'var(--surface-color)', border: '1px solid var(--surface-border)', color: '#fff', borderRadius: '16px', padding: 10, cursor: 'pointer', marginRight: 16 }}
        >
          <ArrowLeft size={20} />
        </button>
        <h2 style={{ color: '#fff', fontSize: 20, margin: 0, fontWeight: 600 }}>Nearby Centers</h2>
      </div>

      <a href="https://www.google.com/maps/search/ewaste+recycling+centers" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', flex: 1, flexDirection: 'column' }}>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} style={{ flex: 1, borderRadius: 28, background: 'var(--surface-color)', position: 'relative', overflow: 'hidden', border: '1px solid var(--surface-border)', marginBottom: 24, padding: 24, cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
          {/* Overlay text */}
          <div style={{ position: 'absolute', top: 24, left: 24, right: 24, zIndex: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <h3 style={{ margin: 0, color: '#fff', fontSize: 18, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Click Map to Open Live View</h3>
          </div>

          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
             <div style={{ animation: 'pulse 2s infinite', background: 'var(--primary-glow)', width: 80, height: 80, borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <MapPin size={40} color="var(--primary-color)" />
             </div>
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes pulse {
              0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
              70% { transform: scale(1); box-shadow: 0 0 0 30px rgba(16, 185, 129, 0); }
              100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
            }
          `}} />
        </motion.div>
      </a>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        <h3 style={{ color: 'var(--text-muted)', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>Top Locations</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {centers.map(center => (
            <div key={center.name} style={{ background: 'var(--surface-color)', borderRadius: 20, padding: 16, border: '1px solid var(--surface-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: '0 0 4px', color: '#fff', fontSize: 16, fontWeight: 500 }}>{center.name}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-muted)', fontSize: 13 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Star size={14} color="#FBBF24" fill="#FBBF24" /> {center.rating}</span>
                  <span>•</span>
                  <span>{center.distance}</span>
                </div>
              </div>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Navigation size={18} color="var(--primary-color)" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CenterMapScreen;
