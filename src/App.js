import './App.css';
import user from './1/user.json';
import data from './2/data.json';
import friends from './3/friends.json';
import transactions from './4/transaction.json';
import Profile from './1/Profile';
import Statistics from './2/Statistics';
import FriendList from './3/FriendList';
import FriendListItem from './3/FriendListItem';
import TransactionHistory from './4/TransactionHistory';

const App = () => {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList>
        <FriendListItem options={friends} />
      </FriendList>
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
