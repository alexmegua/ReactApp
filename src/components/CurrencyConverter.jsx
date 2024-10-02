import React from 'react';

const CurrencyConverter = ({ uah, usd, onUahChange, onUsdChange }) => {
  return (
    <div>
      <div>
        <label>
          UAH:
          <input
            type="number"
            value={uah}
            onChange={(e) => onUahChange(e.target.value)}
            placeholder="Введіть суму в гривнях"
          />
        </label>
      </div>

      <div>
        <label>
          USD:
          <input
            type="number"
            value={usd}
            onChange={(e) => onUsdChange(e.target.value)}
            placeholder="Введіть суму в доларах"
          />
        </label>
      </div>
    </div>
  );
};

export default CurrencyConverter;

