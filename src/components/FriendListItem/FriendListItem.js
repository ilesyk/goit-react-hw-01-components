import { Status } from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';
import { FriendCard } from './FriendListItem.styled';
export function FriendListItem({ friend: { id, isOnline, avatar, name } }) {
  return (
    <FriendCard key={id}>
      <Status color={isOnline.toString()}></Status>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </FriendCard>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};
