import s from './Transaction.module.css';
import PropTypes from 'prop-types';
const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr className={s.tr} key={id}>
              <td className={s.type}>{type}</td>
              <td className={s.amount}>{amount}</td>
              <td className={s.currency}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionHistory;
