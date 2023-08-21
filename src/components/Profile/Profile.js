import PropTypes from 'prop-types';
import { Card } from './Profile.styled';
import { StatsList } from './Profile.styled';
export function Profile({ user:{username, tag, location, stats} }) {
  return (
    <Card>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className="avatar"
          width="200"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      <StatsList>
        <li>
          <span className="label">Followers: </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  user: PropTypes.shape(
    {
      username: PropTypes.string,
      tag: PropTypes.string,
      location: PropTypes.string,
      stats: PropTypes.shape({
        followers: PropTypes.number,
        likes: PropTypes.number,
        views: PropTypes.number,
      }),
    })
  ,
};
