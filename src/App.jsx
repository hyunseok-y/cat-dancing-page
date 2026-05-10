import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import PortfolioCards from './components/PortfolioCards';
import StockChart from './components/StockChart';
import AutoTradingPanel from './components/AutoTradingPanel';
import TradeHistory from './components/TradeHistory';

export default function App() {
  const [page, setPage] = useState('dashboard');

  return (
    <div style={styles.root}>
      <Sidebar active={page} onNav={setPage} />
      <div style={styles.main}>
        <Topbar page={page} />
        <div style={styles.content}>
          <PortfolioCards />
          <div style={styles.middle}>
            <StockChart />
            <AutoTradingPanel />
          </div>
          <TradeHistory />
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    minWidth: 0,
  },
  content: {
    flex: 1,
    overflowY: 'auto',
    padding: '20px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  middle: {
    display: 'flex',
    gap: 16,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
};
