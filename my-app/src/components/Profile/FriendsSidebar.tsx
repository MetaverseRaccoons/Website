import {
    acceptFriendRequest,
    declineFriendRequest,
    FriendRelation,
    FriendsResponse, removeFriend,
    sendFriendRequest,
    UserResponse
} from "../../backend";
import React, { useState } from "react";

interface FriendsSidebarProps {
    currentUsername: string;
    friends: FriendsResponse;
    friendRequests: FriendsResponse;
    reload: () => void;
}

function getFriendUser(currentUsername: string, friendRelation: FriendRelation): UserResponse {
    if(friendRelation.from_user.username === currentUsername) {
        return friendRelation.to_user;
    } else {
        return friendRelation.from_user;
    }
}

const FriendsSidebar = ({ currentUsername, friends, friendRequests, reload }: FriendsSidebarProps) => {
    const accessToken = localStorage.getItem("access") as string;
    const [friendRequestUsername, setFriendRequestUsername] = useState("");

    async function sendButtonHandler(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        event.preventDefault();
        const { message } = await sendFriendRequest(friendRequestUsername, accessToken);
        alert(message);
        setFriendRequestUsername("");
        reload();
    }

    async function acceptButtonHandler(
        fromUsername: string,
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        event.preventDefault();
        await acceptFriendRequest(fromUsername, accessToken);
        reload();
    }

    async function declineButtonHandler(
        fromUsername: string,
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        event.preventDefault();
        await declineFriendRequest(fromUsername, accessToken);
        reload();
    }

    async function removeButtonHandler(
        username: string,
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        event.preventDefault();
        await removeFriend(username, accessToken);
    }

    // Used https://flowbite.com/docs/components/buttons/ for styling buttons
    return (
        <div className="flex flex-col">
            <h2 className="select-none font-bold text-lg mb-3">Friends</h2>
            <table className="friends mb-3">
                {friends.map(friendRelationship => {
                    const friendUser = getFriendUser(currentUsername, friendRelationship);
                    return (
                        <tr key={friendUser.username}>
                            <td>
                                <span className="mr-4">{friendUser.username}</span>
                            </td>
                            <td>
                                <button
                                    onClick={event => removeButtonHandler(friendUser.username, event)}
                                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
            <h2 className="select-none font-bold text-lg mb-3">Send friend request</h2>
            <div className="mb-3">
                <input
                    placeholder="Add a friend"
                    value={friendRequestUsername}
                    onChange={event => setFriendRequestUsername(event.target.value)}
                    className="appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                />
                <button
                    onClick={sendButtonHandler}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Send
                </button>
            </div>
            <h2 className="select-none font-bold text-lg mb-3">Friend requests</h2>
            <table>
                {friendRequests.map(friendRequest =>
                    <tr className="border-spacing-3" key={friendRequest.from_user.username}>
                        <td>
                            <span className="mr-4">{friendRequest.from_user.username}</span>
                        </td>
                        <td>
                            <button
                                onClick={event => acceptButtonHandler(friendRequest.from_user.username, event)}
                                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Accept
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={event => declineButtonHandler(friendRequest.from_user.username, event)}
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                                Decline
                            </button>
                        </td>
                    </tr>
                )}
            </table>
        </div>
    );
};

export default FriendsSidebar;