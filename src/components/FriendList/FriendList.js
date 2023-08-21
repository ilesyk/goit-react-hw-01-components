import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
