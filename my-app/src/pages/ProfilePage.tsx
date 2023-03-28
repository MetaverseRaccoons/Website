import ProfileContent from "../components/Profile/ProfileContentHolder";
import { useParams } from "react-router-dom";

const Profile = () => {
  /*
  const [userData, setUserData] = useState<User | null>();
  const localStorageData = window.localStorage.getItem("user")
  useEffect(() => {
    if (window.localStorage.getItem("user") !== null) {
        const user = JSON.parse(localStorageData || '{}')
        setUserData(user);
    } else {
        setUserData(null)
    }
  }, [localStorageData]);
  */

  const { username } = useParams();
  console.log(username);
  return (
    <div className="h-screen w-screen">
      <ProfileContent name={username || ""} id="7" certificateIds={[]} />
    </div>
  );
};

export default Profile;
