export function Statistics({title, stats }) {
  return (
    <section className="statistics">
      {stats.title && '<h2 className="title">Upload stats</h2>'}
      <ul className="stat-list">
              {stats.map(stat => {
          return (
            <li className="item" key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
