import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import getColor from 'utils/createRandomColor';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistic}>
      <div className={css.statBlock}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {stats.map((el) => (
            <li
              key={el.id}
              className={css.item}
              style={{ backgroundColor: getColor() }}
            >
              <span className={css.label}>{el.label}</span>
              <span className={css.percentage}> {el.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
