import ProfileContent from "../components/Profile/ProfileContentHolder";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  return (
    <div className="h-max mb-10 w-screen">
      <ProfileContent name={username || ""} id="7" />
    </div>
  );
};

export default Profile;
