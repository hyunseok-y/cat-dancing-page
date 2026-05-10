import { portfolioStats } from '../data/mockData';

const fmt = n => n.toLocaleString('ko-KR');

function Card({ label, value, sub, subColor, icon }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <span style={styles.cardLabel}>{label}</span>
        <span style={styles.cardIcon}>{icon}</span>
      </div>
      <div style={styles.cardValue}>{value}</div>
      {sub && <div style={{ ...styles.cardSub, color: subColor ?? 'var(--text-secondary)' }}>{sub}</div>}
    </div>
  );
}

export default function PortfolioCards() {
  const { totalValue, todayPnl, todayPnlPct, winRate, activeBots, totalTrades } = portfolioStats;

  return (
    <div style={styles.grid}>
      <Card
        label="총 자산"
        value={`${fmt(totalValue)}원`}
        sub="평가금액 기준"
        icon="💰"
      />
      <Card
        label="오늘 수익/손실"
        value={`+${fmt(todayPnl)}원`}
        sub={`+${todayPnlPct}% · 전일 대비`}
        subColor="var(--green)"
        icon="📈"
      />
      <Card
        label="승률"
        value={`${winRate}%`}
        sub={`누적 ${fmt(totalTrades)}건`}
        icon="🎯"
      />
      <Card
        label="활성 봇"
        value={`${activeBots}개`}
        sub="실시간 운용중"
        subColor="var(--accent)"
        icon="🤖"
      />
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 16,
    marginBottom: 20,
  },
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 12,
    padding: '18px 20px',
    transition: 'border-color 0.2s',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 11,
    color: 'var(--text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontWeight: 600,
  },
  cardIcon: {
    fontSize: 18,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 700,
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-mono)',
    marginBottom: 4,
  },
  cardSub: {
    fontSize: 12,
    color: 'var(--text-secondary)',
  },
};
