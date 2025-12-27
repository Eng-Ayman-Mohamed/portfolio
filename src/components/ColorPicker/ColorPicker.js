import React, { useState, useEffect } from 'react';
import './ColorPicker.module.css';

const ColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState({
    primary: '#4361ee',
    secondary: '#3a56d4',
    accent: '#4895ef'
  });

  useEffect(() => {
    // Update CSS variables directly
    document.documentElement.style.setProperty('--accent', colors.primary);
    document.documentElement.style.setProperty('--accent-light', colors.accent);
    document.documentElement.style.setProperty('--accent-dark', colors.secondary);
  }, [colors]);

  const presets = [
  { name: 'Blue', primary: '#4361ee', secondary: '#3a56d4', accent: '#4895ef' },
    { name: 'Purple', primary: '#8b5cf6', secondary: '#7c3aed', accent: '#a78bfa' },
    { name: 'Green', primary: '#10b981', secondary: '#059669', accent: '#34d399' },
    { name: 'Red', primary: '#ef4444', secondary: '#dc2626', accent: '#f87171' },
    { name: 'Orange', primary: '#f97316', secondary: '#ea580c', accent: '#fb923c' },
    { name: 'Pink', primary: '#ec4899', secondary: '#db2777', accent: '#f472b6' },
  ];

  const handlePreset = (preset) => {
    setColors(preset);
  };

  const handleColorChange = (type, color) => {
    setColors(prev => ({ ...prev, [type]: color }));
  };

  return (
    <>
      <button 
        className="color-picker-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Change colors"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
          border: 'none',
          color: 'white',
          fontSize: '1.3rem',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          zIndex: '1000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <i className="fas fa-palette"></i>
      </button>

      {isOpen && (
        <div 
          className="color-picker-overlay" 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: '999',
          }}
        />
      )}

      <div 
        className={`color-picker-panel ${isOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          width: '320px',
          background: 'var(--bg-primary)',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          zIndex: '1000',
          transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
          opacity: isOpen ? '1' : '0',
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          border: '1px solid var(--border)',
        }}
      >
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
          <h3 style={{ margin: '0', color: 'var(--text-primary)' }}>Theme Colors</h3>
        </div>

        <div style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
          <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>Presets</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.8rem' }}>
            {presets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => handlePreset(preset)}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '0.8rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', gap: '3px', marginBottom: '0.5rem' }}>
                  <span style={{ flex: 1, height: '6px', background: preset.primary, borderRadius: '2px' }}></span>
                  <span style={{ flex: 1, height: '6px', background: preset.secondary, borderRadius: '2px' }}></span>
                  <span style={{ flex: 1, height: '6px', background: preset.accent, borderRadius: '2px' }}></span>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{preset.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
          <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>Custom Colors</h4>
          {['primary', 'secondary', 'accent'].map((type) => (
            <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <label style={{ width: '80px', color: 'var(--text-secondary)' }}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
              <input
                type="color"
                value={colors[type]}
                onChange={(e) => handleColorChange(type, e.target.value)}
                style={{
                  width: '40px',
                  height: '40px',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  padding: '0',
                }}
              />
              <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                {colors[type]}
              </span>
            </div>
          ))}
        </div>

        <div style={{ padding: '1rem 1.5rem', display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => setColors({ primary: '#4361ee', secondary: '#3a56d4', accent: '#4895ef' })}
            style={{
              flex: 1,
              padding: '0.7rem',
              borderRadius: '8px',
              background: 'var(--bg-secondary)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              flex: 1,
              padding: '0.7rem',
              borderRadius: '8px',
              background: 'var(--accent)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default ColorPicker;