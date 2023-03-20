import PropTypes from 'prop-types';
import css from './UserProfile.module.css';

import defaultImage from './member1.jpg';

export default function UserProfile({
  url = defaultImage,
  name,
  socialTag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <section className={ css.userProfile}>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={url} alt="User avatar" className={css.avatar} />
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{socialTag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers </span>
            <span className={css.quantity}>
              {followers.toLocaleString('en-IN')}
            </span>
          </li>
          <li>
            <span className={css.label}>Views </span>
            <span className={css.quantity}>
              {views.toLocaleString('en-IN')}
            </span>
          </li>
          <li>
            <span className={css.label}>Likes </span>
            <span className={css.quantity}>
              {likes.toLocaleString('en-IN')}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

UserProfile.propTypes = {
  url: PropTypes.string,
  username: PropTypes.string,
  socialTag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
