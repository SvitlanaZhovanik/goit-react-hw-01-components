import PropTypes from 'prop-types';
import ProfileItem from '../profileItem/ProfileItem';
import s from '../Profile.module.css';
const ProfileList = ({ stats }) => {
  const statsArr = Object.keys(stats);
  return (
    <ul className={s.stats}>
      {statsArr.map((item, index) => {
        return <ProfileItem key={index} param={item} value={stats[item]} />;
      })}
    </ul>
  );
};
ProfileList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default ProfileList;
