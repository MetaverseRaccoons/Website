import FriendsSidebar from "../components/Profile/FriendsSidebar";
import { useEffect, useState } from "react";
import { UserResponse, FriendsResponse, getPersonalUser, getReceivedFriendRequests, getFriends } from "../backend";

const Home = () => {
    const accessToken = localStorage.getItem("access") as string;
    const [currentUser, setCurrentUser] = useState<UserResponse>({
        username: "",
        email: "",
        is_instructor: false,
        is_learner: false,
        is_shareable: false,
        has_drivers_license: false,
    km_driven: 0,
    minutes_driven: 0,
    });
    const [friends, setFriends] = useState<FriendsResponse>([]);
    const [friendRequests, setFriendRequests] = useState<FriendsResponse>([]);

    function reloadFriendsProps() {
        getReceivedFriendRequests(accessToken).then(receivedFriendRequestsResponse => setFriendRequests(receivedFriendRequestsResponse));
        getFriends(accessToken).then(friendsResponse => setFriends(friendsResponse));
    }

    useEffect(() => {
        getPersonalUser(accessToken).then(personalUserResponse => {
            setCurrentUser(personalUserResponse);
            reloadFriendsProps();
        });
    }, []);

    return (
        <div className='w-screen h-screen flex items-start justify-center'>
            <FriendsSidebar
                currentUsername={currentUser.username}
                friends={friends}
                friendRequests={friendRequests}
                reload={reloadFriendsProps}
            />
        </div>
    )
}

export default Home