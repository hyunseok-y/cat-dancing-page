import { useState } from 'react';

const navItems = [
  { id: 'dashboard', label: '대시보드', icon: '◈' },
  { id: 'portfolio', label: '포트폴리오', icon: '◎' },
  { id: 'trading', label: '자동매매', icon: '⟳' },
  { id: 'history', label: '거래내역', icon: '≡' },
  { id: 'settings', label: '설정', icon: '⚙' },
];

export default function Sidebar({ active, onNav }) {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.logo}>
        <span style={styles.logoIcon}>▲</span>
        <span style={styles.logoText}>AutoTrade</span>
      </div>

      <nav style={styles.nav}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onNav(item.id)}
            style={{
              ...styles.navItem,
              ...(active === item.id ? styles.navItemActive : {}),
            }}
          >
            <span style={styles.navIcon}>{item.icon}</span>
            <span>{item.label}</span>
            {active === item.id && <span style={styles.navDot} />}
          </button>
        ))}
      </nav>

      <div style={styles.marketStatus}>
        <span style={styles.statusDot} />
        <span style={{ color: 'var(--text-secondary)', fontSize: 12 }}>장 운영중 · KRX</span>
      </div>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: 200,
    minWidth: 200,
    height: '100%',
    background: 'var(--bg-secondary)',
    borderRight: '1px solid var(--border)',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 0 20px 0',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '24px 20px',
    borderBottom: '1px solid var(--border)',
    marginBottom: 16,
  },
  logoIcon: {
    color: 'var(--accent)',
    fontSize: 20,
    fontWeight: 700,
  },
  logoText: {
    fontSize: 16,
    fontWeight: 700,
    color: 'var(--text-primary)',
    letterSpacing: '0.05em',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    padding: '0 12px',
    flex: 1,
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 12px',
    background: 'transparent',
    color: 'var(--text-secondary)',
    fontSize: 13,
    fontWeight: 500,
    borderRadius: 8,
    transition: 'all 0.15s',
    position: 'relative',
    textAlign: 'left',
    width: '100%',
  },
  navItemActive: {
    background: 'var(--accent-dim)',
    color: 'var(--accent)',
  },
  navIcon: {
    fontSize: 16,
    width: 20,
    textAlign: 'center',
  },
  navDot: {
    position: 'absolute',
    right: 10,
    width: 5,
    height: 5,
    borderRadius: '50%',
    background: 'var(--accent)',
  },
  marketStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '0 20px',
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: 'var(--green)',
    boxShadow: '0 0 6px var(--green)',
  },
};
