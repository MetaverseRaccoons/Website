import { CertificateType } from "./CertificateType";

const Certificates: CertificateType[] = [
  {
    id: "0",
    title: "Schakelgoeroe",
    icon: "shift",
    description: `Je hebt de kunst van het schakelen en het soepel overschakelen tussen snelheden onder de knie naarmate je vordert in je virtuele reis. 
Je hebt de koppeling overwonnen en harmonie gevonden in het schakelen, en je bent klaar voor de weg. Puik gedaan, schakelgoeroe!`,
    cert_type: "groen",
  },
  {
    id: "1",
    title: "De kunst van het remmen",
    icon: "brake",
    description: `Je hebt een cruciale mijlpaal bereikt in je virtuele reis.
Je hebt met succes geleerd hoe je correct moet remmen, waarbij je controle en efficiëntie hebt getoond in verschillende verkeersomstandigheden.
Blijf op koers en blijf je vaardigheden verfijnen voor een soepele en veilige rijervaring.`,
    cert_type: "groen",
  },
  {
    id: "2",
    title: "Meester van precisie",
    icon: "spark",
    description: `Je hebt het uitdagende S-Park level succesvol afgerond en de techniek van nauwkeurig parkeren geperfectioneerd.
Met je geavanceerde vaardigheden en expertise benje nu klaar om elke parkeeruitdaging aan te gaan die je tegenkomt!
Ga zo door en blijf de virtuele parkeerplaatsen domineren.`,
    cert_type: "groen",
  },
  {
    id: "3",
    title: "Level 1",
    description: "Deze gebruiker is enorm matig",
    icon: "levels",
  },
  {
    id: "4",
    title: "Level 2",
    description: "Deze gebruiker is nog matiger",
    icon: "levels",
  },
  {
    id: "5",
    title: "Level 3",
    description: "Deze gebruiker is ubermatig",
    icon: "levels",
  },
  {
    id: "6",
    title: "speeding",
    description: "Deze gebruiker heeft de snelheidslimiet overschreden.",
    icon: "warning",
    cert_type: "rood",
  },
];

// OPMERKING: de id kan ook gevonden worden op basis van de index in de Certificates array zelf (dus zonder de id in het object zelf te matchen)
//              => voor het geval dat bepaalde id's verwijderd worden, ergens tussengevoegd...
// indien de id niet gevonden werd, returnt deze functie een leeg certificaat
const getCertificateByTitle = (id: string): CertificateType => {
  for (let i: number = 0; i < Certificates.length; i++) {
    if (Certificates[i].title === id) {
      return Certificates[i];
    }
  }
  return { id: "-1", title: "null", icon: "null", description: "null" };
};

export { Certificates, getCertificateByTitle };
