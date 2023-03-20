import FriendsItem from './FriendsItem';
import PropTypes from 'prop-types';
import css from './Friends.module.css';

export default function FriendsList({ friends }) {
  return (
    <section className={css.friendsSection}>
      <ul className={css.friendsList}>
        {friends.map((friend) => (
          <FriendsItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </section>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array,
};
