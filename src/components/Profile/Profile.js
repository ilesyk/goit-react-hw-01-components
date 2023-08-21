import PropTypes from 'prop-types';
import { Card } from './Profile.styled';
import { StatsList } from './Profile.styled';
export function Profile({ user: { username, tag, location, stats } }) {
  return (
    <Card>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
        width="200"
      />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
      <StatsList>
        <li>
          <span>Followers: </span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views: </span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes: </span>
          <span>{stats.likes}</span>
        </li>
      </StatsList>
    </Card>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      likes: PropTypes.number,
      views: PropTypes.number,
    }),
  }),
};
