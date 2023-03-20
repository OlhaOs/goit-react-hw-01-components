import PropTypes from 'prop-types';
import css from './Friends.module.css';

export default function FriendsItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.isOnline : css.isOffline}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.friendName}>{name}</p>
    </li>
  );
}

FriendsItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
