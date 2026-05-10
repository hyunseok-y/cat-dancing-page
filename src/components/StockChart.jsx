import { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { stockData } from '../data/mockData';

const STOCKS = [
  { key: 'SAMSUNG', label: '삼성전자', color: '#00c8f8' },
  { key: 'NAVER', label: '네이버', color: '#00e676' },
  { key: 'KAKAO', label: '카카오', color: '#ffd740' },
];

const fmt = n => n.toLocaleString('ko-KR');

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={tooltipStyle}>
      <p style={{ color: 'var(--text-secondary)', fontSize: 11, marginBottom: 6 }}>{label}</p>
      {payload.map(p => (
        <p key={p.dataKey} style={{ color: p.color, fontSize: 13, fontFamily: 'var(--font-mono)' }}>
          {p.name}: {fmt(p.value)}원
        </p>
      ))}
    </div>
  );
};

export default function StockChart() {
  const [active, setActive] = useState(['SAMSUNG', 'NAVER', 'KAKAO']);

  const toggle = key => {
    setActive(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>주가 차트</h2>
        <div style={styles.toggles}>
          {STOCKS.map(s => (
            <button
              key={s.key}
              onClick={() => toggle(s.key)}
              style={{
                ...styles.toggleBtn,
                borderColor: active.includes(s.key) ? s.color : 'var(--border)',
                color: active.includes(s.key) ? s.color : 'var(--text-muted)',
                background: active.includes(s.key) ? `${s.color}18` : 'transparent',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={stockData} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis
            dataKey="time"
            tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={v => `${(v / 1000).toFixed(0)}K`}
            width={45}
          />
          <Tooltip content={<CustomTooltip />} />
          {STOCKS.map(s => active.includes(s.key) && (
            <Line
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.label}
              stroke={s.color}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: s.color }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const tooltipStyle = {
  background: 'var(--bg-secondary)',
  border: '1px solid var(--border)',
  borderRadius: 8,
  padding: '10px 14px',
};

const styles = {
  container: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 12,
    padding: '18px 20px',
    flex: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-primary)',
  },
  toggles: {
    display: 'flex',
    gap: 6,
  },
  toggleBtn: {
    padding: '4px 10px',
    borderRadius: 6,
    border: '1px solid',
    fontSize: 11,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
};
