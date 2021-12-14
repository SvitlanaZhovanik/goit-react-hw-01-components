import './App.css';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transaction.json';
import Profile from './components/profile/Profile';
import Statistics from './components/statistic/Statistics';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transaction/TransactionHistory';

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
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
