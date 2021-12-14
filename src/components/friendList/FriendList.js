import s from './FriendList.module.css';
import FriendListItem from './friendListItem/FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      <FriendListItem options={friends} />
    </ul>
  );
};

export default FriendList;
