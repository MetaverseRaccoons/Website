import { getCertificateById } from "../../helpers/Certificates";
import { CertificateType } from "../../helpers/CertificateType";

interface CertificateContentProps {
  ids: string[];
}

const baseString = "w-full flex rounded p-3";

const stylingBasedOnType = (type: string) => {
  if (type === "groen") {
    return (
      baseString +
      " border-primary border-2 border-primary shadow-sm shadow-primary"
    );
  } else if (type === "rood") {
    return baseString + " border-error shadow-sm shadow-errorlight border-2";
  } else {
    return baseString + " border-2 bg-gray-200";
  }
};

const CertificateComponent = (certificate: CertificateType) => {
  return (
    <div className="pt-10">
      <div className={stylingBasedOnType(certificate.cert_type ?? "")}>
        <div className="w-full h-2/3 block">
          <label className="font-bold">{certificate.title}</label>
        </div>
        <div className="w-full h-1/2 block">
          <label className="w-full h-1/2 block">
            {certificate.description}
          </label>
        </div>
      </div>
    </div>
  );
};

const CertificateContent = (props: CertificateContentProps) => {
  const certificates = props.ids.map((id) => {
    return CertificateComponent(getCertificateById(id));
  });
  return (
    <div className="font-custom w-2/3 h-2/3 pb-10 justify-center">
      {certificates}
    </div>
  );
};

export default CertificateContent;
