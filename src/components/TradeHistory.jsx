import { tradeHistory } from '../data/mockData';

const fmt = n => n.toLocaleString('ko-KR');

export default function TradeHistory() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>최근 거래 내역</h2>
        <span style={styles.count}>{tradeHistory.length}건</span>
      </div>
      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              {['시간', '종목', '구분', '체결가', '수량', '거래금액', '손익'].map(h => (
                <th key={h} style={styles.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tradeHistory.map(t => (
              <tr key={t.id} style={styles.tr}>
                <td style={styles.td}>
                  <span style={styles.time}>{t.time}</span>
                </td>
                <td style={styles.td}>
                  <span style={styles.ticker}>{t.ticker}</span>
                  <span style={styles.name}>{t.name}</span>
                </td>
                <td style={styles.td}>
                  <span style={{
                    ...styles.side,
                    background: t.side === 'BUY' ? 'var(--accent-dim)' : 'var(--red-dim)',
                    color: t.side === 'BUY' ? 'var(--accent)' : 'var(--red)',
                    borderColor: t.side === 'BUY' ? 'rgba(0,200,248,0.3)' : 'rgba(255,77,109,0.3)',
                  }}>
                    {t.side === 'BUY' ? '매수' : '매도'}
                  </span>
                </td>
                <td style={{ ...styles.td, ...styles.mono }}>{fmt(t.price)}원</td>
                <td style={{ ...styles.td, ...styles.mono }}>{t.shares}주</td>
                <td style={{ ...styles.td, ...styles.mono }}>{fmt(t.amount)}원</td>
                <td style={styles.td}>
                  {t.pnl != null ? (
                    <span style={{ color: t.pnl >= 0 ? 'var(--green)' : 'var(--red)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                      {t.pnl >= 0 ? '+' : ''}{fmt(t.pnl)}
                    </span>
                  ) : (
                    <span style={{ color: 'var(--text-muted)' }}>—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-primary)',
  },
  count: {
    fontSize: 11,
    color: 'var(--text-muted)',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    padding: '2px 8px',
    borderRadius: 20,
  },
  tableWrap: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    padding: '8px 12px',
    fontSize: 11,
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    fontWeight: 600,
    borderBottom: '1px solid var(--border)',
    whiteSpace: 'nowrap',
  },
  tr: {
    borderBottom: '1px solid rgba(30,45,80,0.5)',
  },
  td: {
    padding: '10px 12px',
    fontSize: 13,
    color: 'var(--text-primary)',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
  },
  time: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    color: 'var(--text-secondary)',
  },
  ticker: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    fontWeight: 700,
    color: 'var(--accent)',
    marginRight: 6,
  },
  name: {
    fontSize: 12,
    color: 'var(--text-secondary)',
  },
  side: {
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: 4,
    fontSize: 11,
    fontWeight: 700,
    border: '1px solid',
  },
  mono: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
  },
};
