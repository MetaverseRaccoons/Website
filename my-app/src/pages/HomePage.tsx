import FriendsSidebar from "../components/Profile/FriendsSidebar";
import { useEffect, useState } from "react";
import {
  CertificatesScheme,
  FriendsResponse,
  getFriends,
  getPersonalUser,
  getReceivedFriendRequests,
  UserResponse,
} from "../backend";
import Leaderboard, {
  LeaderboardType,
} from "../components/Profile/Leaderboard";

const Home = () => {
  const accessToken = localStorage.getItem("access") as string;
  const [currentUser, setCurrentUser] = useState<UserResponse>();

  const [friends, setFriends] = useState<FriendsResponse>([]);
  const [friendRequests, setFriendRequests] = useState<FriendsResponse>([]);

  function reloadFriendsProps() {
    getReceivedFriendRequests(accessToken).then(
      (receivedFriendRequestsResponse) =>
        setFriendRequests(receivedFriendRequestsResponse)
    );
    getFriends(accessToken).then((friendsResponse) =>
      setFriends(friendsResponse)
    );
  }

  useEffect(() => {
    getPersonalUser(accessToken).then((personalUserResponse) => {
      setCurrentUser(personalUserResponse);
      reloadFriendsProps();
    });
  }, []);

  const styles = {
    container: {
      margin: "0 auto",
      width: "100%",
      maxWidth: "400px",
      position: "relative" as "relative",
    },
    main: {
      position: "relative" as "relative",
      width: "100%",
    },
    sidebar: {
      position: "absolute" as "absolute",
      right: "0",
      transform: "translateX(100%)",
    },
  };

  return (
    <div
      className="w-screen h-auto flex items-start pt-10 justify-center"
      style={styles.container}
    >
      <div className="mr-10" style={styles.main}>
        <Leaderboard leaderboardType={LeaderboardType.Kilometers} />
        <Leaderboard leaderboardType={LeaderboardType.Minutes} />
        <Leaderboard leaderboardType={LeaderboardType.Violations} />
      </div>
      <div style={styles.sidebar}>
        <FriendsSidebar
          currentUsername={currentUser?.username ?? ""}
          friends={friends}
          friendRequests={friendRequests}
          reload={reloadFriendsProps}
        />
      </div>
    </div>
  );
};

export default Home;
