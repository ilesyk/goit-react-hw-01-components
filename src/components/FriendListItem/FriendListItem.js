import { Status } from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';
import { FriendCard } from './FriendListItem.styled';
export function FriendListItem({ friend: {id, isOnline, avatar, name} }) {
  return (
    <FriendCard key={id}>
      <Status color={isOnline.toString()}></Status>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape(
    {id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ,
};
