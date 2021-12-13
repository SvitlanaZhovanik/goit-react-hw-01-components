import PropTypes from 'prop-types';
import s from './Profile.module.css';

const ProfileItem = ({ param, value }) => {
  return (
    <li className={s.item}>
      <span className={s.label}>{param}</span>
      <span className={s.quantity}>{value}</span>
    </li>
  );
};

ProfileItem.propTypes = {
  param: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
export default ProfileItem;
