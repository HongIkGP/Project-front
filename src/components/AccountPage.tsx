import React, { useState } from 'react';
import './AccountPage.css';

// 종목 데이터
const stockData = [
  {"code": "A005930", "name": "삼성전자", "quantity": 5, "evalAmount": 359000, "evalGoL": -1815},
  {"code": "A035420", "name": "NAVER", "quantity": 10, "evalAmount": 2025000, "evalGoL": 2805},
  {"code": "A286940", "name": "바이오니아", "quantity": 15, "evalAmount": 430500, "evalGoL": 157}
];

// 계좌 데이터
const accountData = {"total": 500013578};

// 페이지 컴포넌트
const AccountPage: React.FC = () => {
  const [accountBalance] = useState<number>(accountData.total);
  const [stockList] = useState<any[]>(stockData);

  return (
    <div className="container">
        <div className="account-balance-container">
            <div className="account-info">
                <span className="total-assets">총 보유자산</span>
                <span className="balance">{accountBalance.toLocaleString()}<span className="currency">KRW</span></span>
            </div>
        </div>
        <div className="stock-card-list">
      {stockList.map((stock, index) => (
        <div className="stock-card" key={index}>
          <div className="stock-info">
            <div className="stock-name">{stock.name}</div>
            <div className="stock-code">[{stock.code}]</div>
            <div className="stock-eval-amount">{stock.evalAmount.toLocaleString()}원</div>
          </div>
          <div className="stock-details">
            <div className="stock-quantity">{stock.quantity}주</div>
            <div className={`stock-eval-goL ${stock.evalGoL >= 0 ? 'positive' : 'negative'}`}>
              {stock.evalGoL.toLocaleString()} 원 ({stock.evalGoL >= 0 ? '+' : '-'})
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default AccountPage;
