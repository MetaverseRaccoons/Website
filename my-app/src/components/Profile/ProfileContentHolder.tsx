import ProfileHeader from "./ProfileHeader";
import CertificateContent from "./CertificateContent";
import * as backend from "../../backend";
import { useEffect, useState } from "react";

interface ProfileProps {
  name: string;
  id: string;
  certificateIds: string[];
}

const getUserData = async (name: string) => {
  const data = await backend.getUser(
    name,
    window.localStorage.getItem("access") || ""
  );
  return data.username;
};

const ProfileContent = (props: ProfileProps) => {
  const [userData, setUserData] = useState<string>();

  useEffect(() => {
    const waitForUserData = async () => {
      const data = await getUserData(props.name);

      setUserData(data);
    };

    if (!userData) {
      waitForUserData();
    }
  }, [userData]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap items-center justify-center mt-3 h-2/3 w-2/3 border-2 rounded">
        <ProfileHeader name={userData || "ben"} />
        <CertificateContent ids={props.certificateIds} />
      </div>
    </div>
  );
};

export default ProfileContent;
