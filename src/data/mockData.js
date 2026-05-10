export const portfolioStats = {
  totalValue: 48_320_500,
  todayPnl: 1_245_800,
  todayPnlPct: 2.64,
  winRate: 68.4,
  activeBots: 3,
  totalTrades: 1284,
};

export const stockData = [
  { time: '09:00', SAMSUNG: 71200, KAKAO: 51800, NAVER: 198000 },
  { time: '09:30', SAMSUNG: 71800, KAKAO: 52100, NAVER: 199500 },
  { time: '10:00', SAMSUNG: 72400, KAKAO: 51600, NAVER: 201000 },
  { time: '10:30', SAMSUNG: 73100, KAKAO: 52800, NAVER: 200200 },
  { time: '11:00', SAMSUNG: 72800, KAKAO: 53200, NAVER: 202500 },
  { time: '11:30', SAMSUNG: 73500, KAKAO: 52700, NAVER: 203800 },
  { time: '12:00', SAMSUNG: 74200, KAKAO: 53500, NAVER: 205000 },
  { time: '12:30', SAMSUNG: 73900, KAKAO: 54100, NAVER: 204300 },
  { time: '13:00', SAMSUNG: 74600, KAKAO: 53800, NAVER: 206500 },
  { time: '13:30', SAMSUNG: 75100, KAKAO: 54500, NAVER: 207200 },
  { time: '14:00', SAMSUNG: 74800, KAKAO: 55000, NAVER: 208000 },
  { time: '14:30', SAMSUNG: 75400, KAKAO: 54700, NAVER: 207500 },
  { time: '15:00', SAMSUNG: 76200, KAKAO: 55300, NAVER: 209100 },
  { time: '15:30', SAMSUNG: 75800, KAKAO: 55800, NAVER: 210500 },
];

export const holdings = [
  { ticker: 'SAMSUNG', name: '삼성전자', shares: 200, avgPrice: 68500, currentPrice: 75800, value: 15_160_000 },
  { ticker: 'NAVER', name: '네이버', shares: 50, avgPrice: 195000, currentPrice: 210500, value: 10_525_000 },
  { ticker: 'KAKAO', name: '카카오', shares: 150, avgPrice: 52000, currentPrice: 55800, value: 8_370_000 },
  { ticker: 'HYNIX', name: 'SK하이닉스', shares: 80, avgPrice: 128000, currentPrice: 141200, value: 11_296_000 },
];

export const tradeHistory = [
  { id: 1, time: '15:28:04', ticker: 'SAMSUNG', name: '삼성전자', side: 'BUY', price: 75800, shares: 10, amount: 758000, pnl: null, status: 'FILLED' },
  { id: 2, time: '15:11:22', ticker: 'NAVER', name: '네이버', side: 'SELL', price: 210500, shares: 5, amount: 1_052_500, pnl: +77500, status: 'FILLED' },
  { id: 3, time: '14:53:08', ticker: 'KAKAO', name: '카카오', side: 'BUY', price: 55300, shares: 20, amount: 1_106_000, pnl: null, status: 'FILLED' },
  { id: 4, time: '14:30:45', ticker: 'HYNIX', name: 'SK하이닉스', side: 'SELL', price: 140800, shares: 15, amount: 2_112_000, pnl: +192000, status: 'FILLED' },
  { id: 5, time: '13:58:33', ticker: 'SAMSUNG', name: '삼성전자', side: 'BUY', price: 74600, shares: 30, amount: 2_238_000, pnl: null, status: 'FILLED' },
  { id: 6, time: '13:22:17', ticker: 'KAKAO', name: '카카오', side: 'SELL', price: 54100, shares: 25, amount: 1_352_500, pnl: -47500, status: 'FILLED' },
  { id: 7, time: '12:45:55', ticker: 'NAVER', name: '네이버', side: 'BUY', price: 205000, shares: 8, amount: 1_640_000, pnl: null, status: 'FILLED' },
  { id: 8, time: '12:10:42', ticker: 'HYNIX', name: 'SK하이닉스', side: 'BUY', price: 139500, shares: 20, amount: 2_790_000, pnl: null, status: 'FILLED' },
];

export const botStrategies = [
  { id: 1, name: '모멘텀 추종 봇', ticker: 'SAMSUNG', status: 'RUNNING', pnl: +842000, trades: 48 },
  { id: 2, name: '평균 회귀 봇', ticker: 'NAVER', status: 'RUNNING', pnl: +265000, trades: 31 },
  { id: 3, name: 'RSI 반전 봇', ticker: 'KAKAO', status: 'RUNNING', pnl: -124000, trades: 22 },
  { id: 4, name: '볼린저 밴드 봇', ticker: 'HYNIX', status: 'PAUSED', pnl: +510000, trades: 56 },
];
