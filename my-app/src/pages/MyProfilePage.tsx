import ProfileContent from "../components/Profile/ProfileContentHolder";
import { useEffect, useState } from "react";
import * as backend from "../backend";

const MyProfile = () => {
  const accessToken = localStorage.getItem("access") as string;
  const [currentUserName, setCurrentUserName] = useState<string>();

  useEffect(() => {
    backend.getPersonalUser(accessToken).then((personalUserResponse) => {
      setCurrentUserName(personalUserResponse.username);
    });
  }, []);

  return (
    <div className="h-screen w-screen">
      <ProfileContent name={currentUserName ?? ""} id="7" certificateIds={[]} />
    </div>
  );
};

export default MyProfile;
