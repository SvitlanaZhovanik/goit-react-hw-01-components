import s from './FriendList.module.css';
const FriendList = ({ children }) => {
  return <ul className={s.list}>{children}</ul>;
};

export default FriendList;
