import { CertificateType } from "./CertificateType";

const Certificates: CertificateType[] = [
  {
    id: "0",
    title: "Rijbewijs",
    description:
      "Deze gebruiker heeft zijn of haar rijbewijs in de metaverse behaald.",
    cert_type: "groen",
  },
  {
    id: "1",
    title: "Antwerpen expert",
    description:
      "Voltooi alle levels in Antwerpen om dit certificaat te verdienen.",
    cert_type: "groen",
  },
  {
    id: "10",
    title: "100km",
    description: "Deze gebruiker heeft meer dan 100km virtueel gereden.",
    cert_type: "rood",
  },
  {
    id: "7",
    title: "Developer",
    description: "Ontwikkelaar van de simulator",
  },
];

// OPMERKING: de id kan ook gevonden worden op basis van de index in de Certificates array zelf (dus zonder de id in het object zelf te matchen)
//              => voor het geval dat bepaalde id's verwijderd worden, ergens tussengevoegd...
// indien de id niet gevonden werd, returnt deze functie een leeg certificaat
const getCertificateById = (id: string): CertificateType => {
  for (let i: number = 0; i < Certificates.length; i++) {
    if (Certificates[i].id === id) return Certificates[i];
  }
  return { id: "-1", title: "null", description: "null" };
};

export { Certificates, getCertificateById };
