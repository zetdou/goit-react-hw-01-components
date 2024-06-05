import Profile from "./Profile";
import user from "../data/user.json";
import Statistics from "./Statistics";
import data from "../data/data.json";

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
    </>
  );
}

export default App;
