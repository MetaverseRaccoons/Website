import ProfileContent from "../components/Profile/ProfileContentHolder";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  console.log(username);
  return (
    <div className="h-screen w-screen">
      <ProfileContent name={username || ""} id="7" certificateIds={[]} />
    </div>
  );
};

export default Profile;
