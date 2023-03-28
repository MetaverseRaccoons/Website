import {
  acceptFriendRequest,
  declineFriendRequest,
  FriendRelation,
  FriendsResponse,
  removeFriend,
  sendFriendRequest,
  UserResponse,
} from "../../backend";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FriendsSidebarProps {
  currentUsername: string;
  friends: FriendsResponse;
  friendRequests: FriendsResponse;
  reload: () => void;
}

function getFriendUser(
  currentUsername: string,
  friendRelation: FriendRelation
): UserResponse {
  if (friendRelation.from_user.username === currentUsername) {
    return friendRelation.to_user;
  } else {
    return friendRelation.from_user;
  }
}

const FriendsSidebar = ({
  currentUsername,
  friends,
  friendRequests,
  reload,
}: FriendsSidebarProps) => {
  const accessToken = localStorage.getItem("access") as string;
  const [friendRequestUsername, setFriendRequestUsername] = useState("");

  async function sendButtonHandler(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    const { message } = await sendFriendRequest(
      friendRequestUsername,
      accessToken
    );
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
    <div className="flex flex-col font-custom">
      <h2 className="select-none font-bold text-lg mb-3">Friends</h2>
      <table className="friends mb-3">
        {friends.map((friendRelationship) => {
          const friendUser = getFriendUser(currentUsername, friendRelationship);
          return (
            <tr key={friendUser.username}>
              <td>
                <span className="mr-4">{friendUser.username}</span>
              </td>
              <td className="flex flex-auto items-center justify-end">
                <Link
                  to={"/profile/" + friendUser.username}
                  className="w-auto h-1/2 mr-5 font-custom tracking-wide bg-primary hover:shadow-md hover:shadow-primary text-normal font-bold text-white py-1 px-2 rounded"
                >
                  Profile
                </Link>
                <button
                  onClick={(event) =>
                    removeButtonHandler(friendUser.username, event)
                  }
                  className="w-auto h-1/2 font-custom tracking-wide bg-error hover:shadow-md hover:shadow-errorlight text-normal font-bold text-white py-1 px-2 rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <h2 className="select-none font-bold text-lg mb-3">
        Send friend request
      </h2>
      <div className="mb-3">
        <input
          placeholder="Add a friend"
          value={friendRequestUsername}
          onChange={(event) => setFriendRequestUsername(event.target.value)}
          className="h-1/2 appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mr-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
        />
        <button
          onClick={sendButtonHandler}
          className="w-auto h-1/2 mr-5 font-custom tracking-wide bg-primary hover:shadow-md hover:shadow-primary text-normal font-bold text-white py-1 px-2 rounded"
        >
          Send
        </button>
      </div>
      <h2 className="select-none font-bold text-lg mb-3">Friend requests</h2>
      <table>
        {friendRequests.map((friendRequest) => (
          <tr
            className="border-spacing-3"
            key={friendRequest.from_user.username}
          >
            <td>
              <span className="mr-4">{friendRequest.from_user.username}</span>
            </td>
            <td className="flex flex-auto items-center justify-end">
              <button
                onClick={(event) =>
                  acceptButtonHandler(friendRequest.from_user.username, event)
                }
                className="w-auto h-1/2 mr-5 font-custom tracking-wide bg-primary hover:shadow-md hover:shadow-primary text-normal font-bold text-white py-1 px-2 rounded"
              >
                Accept
              </button>
              <button
                onClick={(event) =>
                  declineButtonHandler(friendRequest.from_user.username, event)
                }
                className="w-auto h-1/2 font-custom tracking-wide bg-error hover:shadow-md hover:shadow-errorlight text-normal font-bold text-white py-1 px-2 rounded"
              >
                Decline
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default FriendsSidebar;
