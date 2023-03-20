import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export default function TransactionHistory({ items }) {
  return (
    <section className={css.transactionSection}>
      <table className={css.transactionTable}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.array,
};
