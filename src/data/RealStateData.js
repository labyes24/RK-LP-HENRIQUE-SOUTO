import { useTranslation } from 'react-i18next'

/**
 * The property info
 * @typedef {Object} Property
 * @property {string} id - indicates the unique identifier of the property.
 * @property {string} brokerId - indicates the broker identifier of the property.
 * @property {string} RKCode - indicates the property code on RK Imóveis website.
 * @property {string} title - indicates the title of the property.
 * @property {string} region - indicates the region of the property.
 * @property {string} description - indicates the description of the property.
 * @property {string} price - indicates the price of the property.
 * @property {Object} details - indicates the details of the property.
 * @property {string} details.square - The square meters of the property.
 * @property {string} details.rooms - The rooms of the property.
 * @property {string} details.bathrooms - The bathrooms of the property.
 * @property {string} details.garage - The garage of the property.
 * @property {Array<string>} pictures - indicates the URL of the pictures of the property.
 */

const BROKER_ID = crypto.randomUUID()

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesPT = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9747',
    title: 'Copacabana Beach',
    region: 'Ingleses',
    description:
      'Charmosa unidade com 03 dormitórios, sendo 01 suíte, com 02 vagas de garagem e um hobby box para armazenamento adicional. Totalmente mobiliada e decorada com muito bom gosto e sofisticação. Situada na área nobre da praia Ingleses, a localização é bastante tranquila e próxima ao comércio local. O imóvel possui uma posição solar privilegiada, Oeste permitindo uma ótima iluminação e ventilação natural em todos os cômodos. O condomínio oferece área de lazer completa, proporcionando entretenimento para você e sua família.\n\n **Imóvel em Processo de**\n\n **Individualização de Matrícula**',
    price: 'R$ 1.300.000,00',
    details: {
      square: '98,72 m²',
      rooms: '3',
      bathrooms: '3',
      garage: '2',
    },
    pictures: [
      '/properties/copacabana-f01.jpg',
      '/properties/copacabana-f02.jpg',
      '/properties/copacabana-f03.jpg',
      '/properties/copacabana-f04.jpg',
      '/properties/copacabana-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9705',
    title: 'Vila Inglesa',
    region: 'Ingleses',
    description:
      'Charmosa unidade com 03 dormitórios, sendo 01 suíte. Além disso, oferece comodidade com 01 vaga de garagem e um hobby box para armazenamento adicional. Totalmente mobiliada e decorada com muito bom gosto e sofisticação. Situada na área nobre da praia dos Ingleses, a localização é bastante tranquila e próxima ao comércio local, proporcionando assim um ambiente agradável. O condomínio, por sua vez, oferece uma área de lazer completa, proporcionando opções de entretenimento e relaxamento para você e sua família.\n\n **Imóvel em Processo de**\n\n **Individualização de Matrícula**',
    price: 'R$ 1.980.000,00',
    details: {
      square: '119 m²',
      rooms: '3',
      bathrooms: '3',
      garage: '1',
    },
    pictures: [
      '/properties/vilainglesa-f01.jpg',
      '/properties/vilainglesa-f02.jpg',
      '/properties/vilainglesa-f03.jpg',
      '/properties/vilainglesa-f04.jpg',
      '/properties/vilainglesa-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9886',
    title: 'Estrela Verde',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Charmosa unidade com 02 dormitórios, sendo 01 suíte. Além disso, oferece comodidade com 01 vaga de garagem e um hobby box para armazenamento adicional. Imóvel mobiliado e com muito bom gosto. Situada na área nobre da praia dos Ingleses, a localização é bastante tranquila e próxima ao comércio local, proporcionando assim um ambiente agradável. O condomínio, por sua vez, oferece uma área de lazer completa, proporcionando opções de entretenimento e relaxamento para você e sua família.',
    price: 'R$ 790.000,00',
    details: {
      square: '77,45 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      '/properties/estrela-verde-f01.jpg',
      '/properties/estrela-verde-f02.jpg',
      '/properties/estrela-verde-f03.jpg',
      '/properties/estrela-verde-f04.jpg',
      '/properties/estrela-verde-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9616',
    title: 'Hercílio Luz',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Charmoso Duplex com 03 dormitórios, sendo 01 suíte. Além disso, oferece comodidade com 01 vaga de garagem e um hobby box para armazenamento adicional. Imóvel com posição Solar Frente Norte, localizado a 500 metros da praia dos Ingleses. Situada na área nobre da praia dos Ingleses, a localização é bastante tranquila e próxima ao comércio local, proporcionando assim um ambiente agradável. O condomínio, por sua vez, oferece uma área de lazer completa, proporcionando opções de entretenimento e relaxamento para você e sua família.',
    price: 'R$ 845.000,00',
    details: {
      square: '96,21 m²',
      rooms: '3',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      './properties/hercilio-luz-f01.jpg',
      './properties/hercilio-luz-f02.jpg',
      './properties/hercilio-luz-f03.jpg',
      './properties/hercilio-luz-f04.jpg',
      './properties/hercilio-luz-f05.jpg',
    ],
  },
]

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesES = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9747',
    title: 'Copacabana Beach',
    region: 'Ingleses',
    description:
      'Encantadora unidad con 03 habitaciones, 01 suite, con 02 estacionamientos y un hobby box para almacenamiento.adicional. Totalmente amueblado y decorado con mucho gusto y sofisticación. Ubicado en la zona privilegiada de Playa Ingleses, la ubicación es bastante tranquilo y cerca de comercios locales. La propiedad tiene una posición solar privilegiada, oeste permitiendo una Gran iluminación y ventilación natural en todos los ambientes. El condominio ofrece una completa zona de ocio, brindando entretenimiento para usted y su familia.\n\n **Propiedad en proceso de **\n\n **Individualización de la Inscripción**',
    price: 'R$ 1.300.000,00',
    details: {
      square: '98,72 m²',
      rooms: '3',
      bathrooms: '3',
      garage: '2',
    },
    pictures: [
      '/properties/copacabana-f01.jpg',
      '/properties/copacabana-f02.jpg',
      '/properties/copacabana-f03.jpg',
      '/properties/copacabana-f04.jpg',
      '/properties/copacabana-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9705',
    title: 'Vila Inglesa',
    region: 'Ingleses',
    description:
      'Encantadora unidad con 03 habitaciones, 01 de las cuales es suite. Además, ofrece comodidad con 01 plaza de aparcamiento y una caja de pasatiempos para almacenamiento adicional. Totalmente amueblado y decorado con mucho gusto y sofisticación. Ubicado en la zona privilegiada de Praia dos Ingleses, la ubicación es bastante tranquilo y cercano al comercio local, proporcionando así un entorno agradable. El condominio, a su vez, ofrece una completa zona de ocio, brindando opciones de entretenimiento y relajación para usted y su familia.\n\n**Propiedad en proceso de**\n\n**Individualización de la Inscripción**',
    price: 'R$ 1.980.000,00',
    details: {
      square: '119 m²',
      rooms: '3',
      bathrooms: '3',
      garage: '1',
    },
    pictures: [
      '/properties/vilainglesa-f01.jpg',
      '/properties/vilainglesa-f02.jpg',
      '/properties/vilainglesa-f03.jpg',
      '/properties/vilainglesa-f04.jpg',
      '/properties/vilainglesa-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9886',
    title: 'Estrela Verde',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO** \n\nEncantadora unidad con 2 dormitorios, 1 suite. Además, ofrece comodidad con 01 plaza de aparcamiento y una caja de pasatiempos para almacenamiento adicional. Propiedad amueblada con mucho gusto. Ubicado en la zona privilegiada de Praia dos Ingleses, la ubicación es bastante tranquilo y cercano al comercio local, proporcionando así un entorno agradable. El condominio, a su vez, ofrece una completa zona de ocio, brindando opciones de entretenimiento y relajación para usted y su familia.',
    price: 'R$ 790.000,00',
    details: {
      square: '77,45 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      '/properties/estrela-verde-f01.jpg',
      '/properties/estrela-verde-f02.jpg',
      '/properties/estrela-verde-f03.jpg',
      '/properties/estrela-verde-f04.jpg',
      '/properties/estrela-verde-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9616',
    title: 'Hercílio Luz',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO**\n\nEncantador Dúplex de 3 dormitorios, 1 suite. Además, ofrece comodidad con 01 plaza de aparcamiento y una caja de pasatiempos para almacenamiento adicional. Propiedad con posición Solar Frente Norte, ubicada a 500 metros de la playa. de los ingleses. Ubicado en la zona privilegiada de Praia dos Ingleses, la ubicación es bastante tranquilo y cercano al comercio local, proporcionando así un entorno agradable. El condominio, a su vez, ofrece una completa zona de ocio, brindando opciones de entretenimiento y relajación para usted y su familia.',
    price: 'R$ 845.000,00',
    details: {
      square: '96,21 m²',
      rooms: '3',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      './properties/hercilio-luz-f01.jpg',
      './properties/hercilio-luz-f02.jpg',
      './properties/hercilio-luz-f03.jpg',
      './properties/hercilio-luz-f04.jpg',
      './properties/hercilio-luz-f05.jpg',
    ],
  },
]

/**
 * The Properties data
 * @typedef {Object} PropertiesData
 * @property {Array<Property>} pt - The Portuguese property data.
 * @property {Array<Property>} es - The Spanish property data.
 */

/** @type {PropertiesData} The properties data */
const properties = {
  pt: propertiesPT,
  es: propertiesES,
}

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function useProperties() {
  const {
    i18n: { language },
  } = useTranslation()

  if (properties[language]) {
    return properties[language]
  } else {
    return properties['pt']
  }
}
