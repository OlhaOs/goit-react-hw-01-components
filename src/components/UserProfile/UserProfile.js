import PropTypes from 'prop-types';
// import css from './UserProfile.module.css';
import {
  Section,
  Profile,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  Stats,
  Li,
  Label,
  Quantity,
} from './UserProfile.styled';

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
    <Section>
      <Profile>
        <Description>
          <Avatar src={url} alt='User avatar'></Avatar>
          <UserName>{name}</UserName>
          <Tag>@{socialTag}</Tag>
          <Location>{location}</Location>
        </Description>
        <Stats>
          <Li>
            <Label>Followers </Label>
            <Quantity>{followers.toLocaleString('en-IN')}</Quantity>
          </Li>
          <Li>
            <Label>Views </Label>
            <Quantity>{views.toLocaleString('en-IN')}</Quantity>
          </Li>
          <Li>
            <Label>Likes </Label>
            <Quantity>{likes.toLocaleString('en-IN')}</Quantity>
          </Li>
        </Stats>
      </Profile>
    </Section>
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
