import PropTypes from 'prop-types';
import { StatWrap } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatWrap>
      {title && <h2>Upload stats</h2>}
      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li key={stat.id}>
              <span>{stat.label} </span>
              <span>{stat.percentage} %</span>
            </li>
          );
        })}
      </ul>
    </StatWrap>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
