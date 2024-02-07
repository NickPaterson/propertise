
import { prisma } from './prisma.server';

export const getProperties = async () => {
    return await prisma.property.findMany({
        include: {
            estateAgent: true,
        }
    });
}

export const getProperty = async (id: string) => {
    return await prisma.property.findUnique({
        where: {
            id: id,
        },
    });
}
// TODO: createProperty
// export const createProperty = async (property: any) => {
//     return await prisma.property.create({
//         data: {
//             address: {
//                 line1: property.address.line1,
//                 line2: property.address.line2,
//                 city: property.address.city,
//                 state: property.address.state,
//                 postcode: property.address.postcode,
//                 coordinates: property.address.coordinates,
//             },
//             downloads: {
//                 homeReport: {
//                     url: property.downloads.homeReport.url,
//                     caption: property.downloads.homeReport.caption,
//                 },
//                 epcCertificate: {
//                     url: property.downloads.epcCertificate.url,
//                     caption: property.downloads.epcCertificate.caption,
//                 },
//                 brochures: {
//                     url: property.downloads.brochures.url,
//                     caption: property.downloads.brochures.caption,
//                 },
//             },
//             estateAgent: {
//                 name: property.estateAgent.name,
//                 branch: property.estateAgent.branch,
//                 address: {
//                     line1: property.estateAgent.address.line1,
//                     line2: property.estateAgent.address.line2,
//                     city: property.estateAgent.address.city,
//                     state: property.estateAgent.address.state,
//                     postcode: property.estateAgent.address.postcode,
//                     coordinates: property.estateAgent.address.coordinates,
//                 },
//                 phone: property.estateAgent.phone,
//                 email: property.estateAgent.email,
//                 website: property.estateAgent.website,
//                 logo: {
//                     url: property.estateAgent.logo.url,
//                     caption: property.estateAgent.logo.caption,
//                 },  
//             },
//             keyFeatures: property.keyFeatures,
//             media: {
//                 images: {
//                     url: property.media.images.url,
//                     caption: property.media.images.caption,
//                 },
//                 videos: {
//                     url: property.media.videos.url,
//                     caption: property.media.videos.caption,
//                 },
//                 floorplans: {
//                     url: property.media.floorplans.url,
//                     caption: property.media.floorplans.caption,
//                 },
//                 virtualTours: {
//                     url: property.media.virtualTours.url,
//                     caption: property.media.virtualTours.caption,
//                 },
//                 thumbnail: {
//                     url: property.media.thumbnail.url,
//                     caption: property.media.thumbnail.caption,
//                 },
//             },
//             nearby: {
//                 amenities: {
//                     name: property.nearby.amenities.name,
//                     distance: property.nearby.amenities.distance,
//                 },
//                 schools: {
//                     name: property.nearby.schools.name,
//                     distance: property.nearby.schools.distance,
//                     rating: property.nearby.schools.rating,
//                 },
//             },
//             priceInformation: {
//                 price: property.priceInformation.price,
//                 priceOption: property.priceInformation.priceOption,
//             },
            

//         },
//     });
// }

