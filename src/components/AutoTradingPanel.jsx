import { useState } from 'react';
import { botStrategies } from '../data/mockData';

const fmt = n => n.toLocaleString('ko-KR');

function BotCard({ bot }) {
  const [running, setRunning] = useState(bot.status === 'RUNNING');
  const isProfit = bot.pnl >= 0;

  return (
    <div style={styles.botCard}>
      <div style={styles.botHeader}>
        <div>
          <p style={styles.botName}>{bot.name}</p>
          <p style={styles.botTicker}>{bot.ticker}</p>
        </div>
        <button
          onClick={() => setRunning(r => !r)}
          style={{
            ...styles.toggleSwitch,
            background: running ? 'var(--green)' : 'var(--bg-secondary)',
            boxShadow: running ? '0 0 8px var(--green)' : 'none',
          }}
        >
          <span style={{
            ...styles.toggleKnob,
            transform: running ? 'translateX(18px)' : 'translateX(2px)',
          }} />
        </button>
      </div>
      <div style={styles.botStats}>
        <div style={styles.botStat}>
          <span style={styles.botStatLabel}>손익</span>
          <span style={{ color: isProfit ? 'var(--green)' : 'var(--red)', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
            {isProfit ? '+' : ''}{fmt(bot.pnl)}원
          </span>
        </div>
        <div style={styles.botStat}>
          <span style={styles.botStatLabel}>거래수</span>
          <span style={styles.botStatValue}>{bot.trades}건</span>
        </div>
        <div style={styles.botStat}>
          <span style={styles.botStatLabel}>상태</span>
          <span style={{ color: running ? 'var(--green)' : 'var(--text-muted)', fontSize: 11, fontWeight: 600 }}>
            {running ? '● 실행중' : '○ 정지'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function AutoTradingPanel() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>자동매매 봇</h2>
        <button style={styles.addBtn}>+ 추가</button>
      </div>
      <div style={styles.botList}>
        {botStrategies.map(bot => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 12,
    padding: '18px 20px',
    width: 280,
    minWidth: 280,
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-primary)',
  },
  addBtn: {
    background: 'var(--accent-dim)',
    color: 'var(--accent)',
    border: '1px solid rgba(0,200,248,0.3)',
    padding: '4px 10px',
    borderRadius: 6,
    fontSize: 11,
    fontWeight: 700,
  },
  botList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    overflowY: 'auto',
  },
  botCard: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    padding: '12px 14px',
  },
  botHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  botName: {
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: 2,
  },
  botTicker: {
    fontSize: 11,
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
  },
  toggleSwitch: {
    width: 40,
    height: 22,
    borderRadius: 11,
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    transition: 'background 0.2s, box-shadow 0.2s',
    flexShrink: 0,
  },
  toggleKnob: {
    position: 'absolute',
    top: 3,
    width: 16,
    height: 16,
    borderRadius: '50%',
    background: '#fff',
    transition: 'transform 0.2s',
    display: 'block',
  },
  botStats: {
    display: 'flex',
    gap: 12,
  },
  botStat: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  botStatLabel: {
    fontSize: 10,
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  botStatValue: {
    fontSize: 13,
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-mono)',
    fontWeight: 600,
  },
};
