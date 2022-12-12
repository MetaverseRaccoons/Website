import {CertificateType} from './CertificateType'

const Certificates: CertificateType[] = [
    {
        id: '0',
        title: 'pro autobestuurder',
        description: 'zeer goed achter het stuur'
    }
]


// OPMERKING: de id kan ook gevonden worden op basis van de index in de Certificates array zelf (dus zonder de id in het object zelf te matchen)
//              => voor het geval dat bepaalde id's verwijderd worden, ergens tussengevoegd...
// indien de id niet gevonden werd, returnt deze functie een leeg certificaat
const getCertificateById = (id: string) : CertificateType => {
    for(let i: number = 0; i < Certificates.length; i++) {
        if (Certificates[i].id === id) return Certificates[i]
    }
    return {id: '-1', title: 'null', description:'null'};
}

export {Certificates, getCertificateById};