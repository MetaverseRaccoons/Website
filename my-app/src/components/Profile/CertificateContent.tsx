import { getCertificateById } from "../../helpers/Certificates";
import { CertificateType } from "../../helpers/CertificateType";

interface CertificateContentProps {
    ids: string[]
}

const CertificateComponent = (certificate: CertificateType) => {
  return (
    <div>
        <div className='w-full flex-wrap rounded border-2 border-teal-200 block'>
            <label className='font-bold w-full h-1/2 block'>
                {certificate.title}
            </label>
            <label className='w-full h-1/2 block'>
                {certificate.description}
            </label>
        </div>
    </div>
  );
};

const CertificateContent = (props: CertificateContentProps) => {
  const certificates = props.ids.map((id) => {
    return CertificateComponent(getCertificateById(id));
  });
  return <div className="w-full h-2/3 flex flex-wrap justify-center">{certificates}</div>;
};

export default CertificateContent;
