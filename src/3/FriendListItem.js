import s from './FriendList.module.css';
import PropTypes from 'prop-types';
const FriendListItem = ({ options }) => {
  return options.map(({ id, avatar, isOnline, name }) => {
    return (
      <li className={s.item} key={id}>
        <span
          className={s.status}
          style={isOnline ? { backgroundColor: '#5ed840' } : { backgroundColor: '#d84343' }}
        ></span>
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
      </li>
    );
  });
};
FriendListItem.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    }),
  ).isRequired,
};
export default FriendListItem;
