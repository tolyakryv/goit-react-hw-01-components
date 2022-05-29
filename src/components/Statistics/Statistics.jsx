import propTypes from 'prop-types';
import s from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={s.item}
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Statistics;
Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }),
  ),
};
