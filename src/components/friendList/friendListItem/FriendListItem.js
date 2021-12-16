import s from './FriendListItem.module.css';
import PropTypes from 'prop-types';
const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={isOnline ? { backgroundColor: '#5ed840' } : { backgroundColor: '#d84343' }}
      ></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
export default FriendListItem;
