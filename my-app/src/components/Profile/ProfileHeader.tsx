import { profile } from "console";
import { UserResponse } from "../../backend";

const km_driven_titles = (km: number) => {
  if (km < 100) {
    return "Beginner";
  } else if (km < 500) {
    return "Veteraan";
  } else {
    return "Professioneel";
  }
};

const ProfileHeader = (props: UserResponse) => {
  const { username, km_driven, is_shareable } = props;

  const profilecontent = () => {
    return (
      <div className="mt-5 h-1/3 w-5/6 border-b-2 flex flex-wrap border-gray-300">
        <div className="w-full h-full flex-wrap block">
          <label className="pb-3 w-full h-1/2 tracking-wider font-custom font-extrabold text-3xl text-gray-800 block">
            {username}
          </label>
          <div className="flex flex-wrap bottom-0 w-full h-1/2 block">
            <label className="w-1/2 h-full tracking-wider font-custom text-xl text-gray-500">
              {km_driven_titles(km_driven)}
            </label>
            <div className="w-1/2 items-right font-custom text-xl text-gray-500 flex flex-row-reverse">
              <label className="w-auto mx-3 font-bold">{km_driven}</label>
              <label className="w-auto">km:</label>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const not_shareable = () => {
    return (
      <div className="mt-5 h-1/3 w-5/6 border-b-2 border-gray-300">
        <div className="w-1/2 h-full flex-wrap justify-center">
          <label className="bottom-0 w-full h-1/2 tracking-wider font-custom font-bold text-xl text-gray-500 text-center">
            Gebruikersprofiel is onbeschikbaar.
          </label>
        </div>
      </div>
    );
  };

  return is_shareable ? not_shareable() : profilecontent();
};

export default ProfileHeader;
