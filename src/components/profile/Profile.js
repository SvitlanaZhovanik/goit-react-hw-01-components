import s from './Profile.module.css';
import PropTypes from 'prop-types';
import ProfileList from './profileList/ProfileList';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <ProfileList stats={stats} />s
      </ul>
    </div>
  );
};
Profile.propType = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
