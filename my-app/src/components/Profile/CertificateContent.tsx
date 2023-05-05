import { getCertificateById } from "../../helpers/Certificates";
import { CertificateType } from "../../helpers/CertificateType";

interface CertificateContentProps {
    ids: string[]
}

const CertificateComponent = (certificate: CertificateType) => {
  return (
    <div className='pt-10'>
        <div className='w-full flex rounded border-2 border-gray-200 bg-gray-50 p-3'>
            <div className='w-full h-1/2 block'>
              <div className='flex h-8 my-2'>
                <img className='align-middle mr-2' src={'/icons/' + certificate.icon + '.png'} alt={certificate.icon} />
                <label className='font-bold my-auto '>
                  {certificate.title}
                </label>
              </div>
              <label>
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
  return <div className="w-2/3 h-2/3 pb-10 justify-center">{certificates}</div>;
};

export default CertificateContent;
