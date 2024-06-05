import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload status" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
