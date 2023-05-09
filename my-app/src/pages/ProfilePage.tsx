import ProfileContent from "../components/Profile/ProfileContentHolder";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  return (
    <div className="h-screen w-screen">
      <ProfileContent name={username || ""} id="7" certificateIds={["0"]} />
    </div>
  );
};

export default Profile;
