import PropTypes from 'prop-types';
import { StatWrap } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatWrap>
      {title && <h2 className="title">Upload stats</h2>}
      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li className="item" key={stat.id}>
              <span className="label">{stat.label} </span>
              <span className="percentage">{stat.percentage} %</span>
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
