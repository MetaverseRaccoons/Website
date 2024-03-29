import ProfileHeader from "./ProfileHeader";
import CertificateContent from "./CertificateContent";
import * as backend from "../../backend";
import { useEffect, useState } from "react";
import { CertificatesScheme } from "../../backend";

interface ProfileProps {
  name: string;
  id: string;
}

const getUserData = async (name: string) => {
  const data = await backend.getUser(
    name,
    window.localStorage.getItem("access") || ""
  );
  const user_private = JSON.stringify(data).indexOf("message") !== -1;
  return { data, user_private };
};

const ProfileContent = (props: ProfileProps) => {
  const [userData, setUserData] = useState<backend.UserResponse>();
  const [userPrivate, setUserPrivate] = useState(true);

  useEffect(() => {
    const waitForUserData = async () => {
      const { data, user_private } = await getUserData(props.name);

      setUserData(data);
      setUserPrivate(user_private);
    };

    if (!userData) {
      waitForUserData();
    }
    console.log(userData);
  }, [userData, props.name]);

  const certificates = [
    { title: "Schakelgoeroe", description: "fzjfjmfdmlfdls" },
    { title: "De kunst van het remmen", description: "" },
    { title: "Meester van precisie", description: "" },
  ];

  const levelcertificates =
    userData?.level_sessions?.map((level) => {
      if (level.completed) {
        return {
          title: level.level.name ?? "",
          description: level.level.description ?? "",
        };
      }
      return {
        title: "",
        description: "",
      };
    }) ?? [];

  const violations =
    userData?.violations?.map((violation) => {
      return {
        title: violation.type ?? "",
        description: "",
      };
    }) ?? [];

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap items-center justify-center mt-5 h-2/3 w-2/3 border-2 shadow-lg">
        <ProfileHeader
          user_private={userPrivate}
          username={userData?.username ?? ""}
          email={userData?.email ?? ""}
          is_learner={userData?.is_learner ?? false}
          is_instructor={userData?.is_instructor ?? false}
          has_drivers_license={userData?.has_drivers_license ?? false}
          is_shareable={userData?.is_shareable ?? false}
          km_driven={userData?.km_driven ?? 0}
          minutes_driven={userData?.minutes_driven ?? 0}
          certificates={[]}
          // certificates={userData?.certificates ?? []}
          level_sessions={userData?.level_sessions ?? []}
          violations={userData?.violations ?? []}
        />
        <CertificateContent
          ids={
            userData?.certificates.concat(levelcertificates, violations) ?? []
          }
        />
      </div>
    </div>
  );
};

export default ProfileContent;
