import UserProfile from './components/UserProfile/UserProfile';
import Statistics from './components/Statistic/Statistics';
import FriendList from './components/Friends/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

function App() {
  return (
    <>
      <UserProfile
        url={user.avatar}
        name={user.username}
        socialTag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        likes={user.stats.likes}
        views={user.stats.views}
      />
      <Statistics title="Uploads" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
export default App;
