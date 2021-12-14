import PropTypes from 'prop-types';
import ProfileItem from '../profileItem/ProfileItem';
const ProfileList = ({ stats }) => {
  const statsArr = Object.keys(stats);

  return statsArr.map((item, index) => {
    return <ProfileItem key={index} param={item} value={stats[item]} />;
  });
};
ProfileList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default ProfileList;
