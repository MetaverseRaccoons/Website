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
  const data = await backend.getPersonalUser(
    window.localStorage.getItem("access") || ""
  );
  return data;
};

const ProfileContent = (props: ProfileProps) => {
  const [userData, setUserData] = useState<backend.UserResponse>();

  useEffect(() => {
    const waitForUserData = async () => {
      const data = await getUserData(props.name);

      setUserData(data);
    };

    if (!userData) {
      waitForUserData();
    }
    console.log(userData);
  }, [userData, props.name]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap items-center justify-center mt-5 h-2/3 w-2/3 border-2 shadow-lg">
        <ProfileHeader
          username={userData?.username ?? ""}
          email={userData?.email ?? ""}
          is_learner={userData?.is_learner ?? false}
          is_instructor={userData?.is_instructor ?? false}
          has_drivers_license={userData?.has_drivers_license ?? false}
          is_shareable={userData?.is_shareable ?? false}
          km_driven={userData?.km_driven ?? 0}
          minutes_driven={userData?.minutes_driven ?? 0}
        />
        <CertificateContent ids={props.certificateIds} />
      </div>
    </div>
  );
};

export default ProfileContent;
