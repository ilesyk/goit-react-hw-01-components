import userData from '../data/user.json';
import statData from '../data/data.json';
import friendsData from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div>
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={statData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};