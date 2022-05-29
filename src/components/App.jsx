import user from 'components/Profile/user.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import data from 'components/Statistics/data.json';
import friends from 'components/FriendList/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from 'components/TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        location={user.location}
        tag={user.tag}
        stats={user.stats}
      />
      <Statistics title="upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
