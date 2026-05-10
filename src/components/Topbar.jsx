import { portfolioStats } from '../data/mockData';

const fmt = n => n.toLocaleString('ko-KR');

export default function Topbar({ page }) {
  const titles = {
    dashboard: '대시보드',
    portfolio: '포트폴리오',
    trading: '자동매매 설정',
    history: '거래 내역',
    settings: '설정',
  };

  return (
    <header style={styles.topbar}>
      <div>
        <h1 style={styles.title}>{titles[page] ?? '대시보드'}</h1>
        <p style={styles.subtitle}>2026년 5월 10일 · KOSPI 2,847.30 <span style={{ color: 'var(--green)' }}>▲ 12.40 (+0.44%)</span></p>
      </div>
      <div style={styles.right}>
        <div style={styles.pnlBadge}>
          <span style={styles.pnlLabel}>오늘 수익</span>
          <span style={{ color: 'var(--green)', fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: 15 }}>
            +{fmt(portfolioStats.todayPnl)}원
          </span>
          <span style={{ color: 'var(--green)', fontSize: 12 }}>+{portfolioStats.todayPnlPct}%</span>
        </div>
        <div style={styles.avatar}>JS</div>
      </div>
    </header>
  );
}

const styles = {
  topbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 28px',
    borderBottom: '1px solid var(--border)',
    background: 'var(--bg-secondary)',
    flexShrink: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: 'var(--text-secondary)',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  pnlBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: 'var(--green-dim)',
    border: '1px solid rgba(0,230,118,0.2)',
    padding: '6px 14px',
    borderRadius: 8,
  },
  pnlLabel: {
    fontSize: 11,
    color: 'var(--text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: '50%',
    background: 'var(--accent-dim)',
    border: '2px solid var(--accent)',
    color: 'var(--accent)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 700,
  },
};
