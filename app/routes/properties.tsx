//import { LoaderFunction, json } from '@remix-run/node';
// import { useLoaderData } from '@remix-run/react';
import { PropertyCard } from '../components/property-card';
//import { getProperties } from "~/utils/properties.server";
import { ButtonSwitch } from '../components/button-switch';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faList } from "@fortawesome/pro-regular-svg-icons";
import { faGrid2, faLocationDot } from "@fortawesome/pro-solid-svg-icons";

// export const loader: LoaderFunction = async () => {
//     const properties = await getProperties();
//     return json({ properties });
// }

export default function Properties() {
    const icons: IconDefinition[] = [faList, faGrid2, faLocationDot];
    //const { properties } = useLoaderData<typeof loader>();
    const hardCodedProperty = {
        "id": "1",
        "title": "1 bed flat for sale",
        "address": {
            "line1": "Flat 1, 1-3",
            "line2": "Glasgow Street",
            "city": "Glasgow",
            "state": "Glasgow",
            "postcode": "G1 1XX",
            "coordinates": {
                "latitude": 55.8617,
                "longitude": -4.2526
            }
        },
        "downloads": {
            "homeReport": {
                "url": "",
                "caption": "Home report"
            },
            "epcCertificate": {
                "url": "",
                "caption": "EPC certificate"
            },
            "brochures": [
                { "url": "", "caption": "Brochure 1" },
                { "url": "", "caption": "Brochure 2" }
            ],
        },
        "estateAgent": {
            "name": "Estate Agent Name",
            "branch": "Branch name",
            "address": {
                "line1": "123 Main Street",
                "line2": "Glasgow",
                "city": "Glasgow",
                "state": "Glasgow",
                "postcode": "G1 1XX",
                "coordinates": {
                    "latitude": 55.8617,
                    "longitude": -4.2526
                },
            },
            "phone": "020 7386 6500",
            "email": "",
            "website": "",
            "backgroundColor": "#D2E8EC",
            "textColor": "#000000",
            "logo": {
                "url": "/estate-agent-placeholder-logo.png",
                "caption": "Estate agent logo"
            }
        },
        "keyFeatures": [
            "Key feature 1",
            "Key feature 2",
            "Key feature 3"
        ],
        "media": {
            "images": [
                { "url": "http://via.placeholder.com/300x205", "caption": "Image 1" },
                // ... more images ...
            ],
            "videos": [
                { "url": "https://www.youtube.com/watch?v=ZQDJuQr4XRg", "caption": "Video 1" },
                // ... more videos ...
            ],
            "floorplans": [
                { "url": "http://via.placeholder.com/300x205", "caption": "Floorplan 1" },
                // ... more floorplans ...
            ],
            "virtualTours": [
                { "url": "https://www.youtube.com/watch?v=ZQDJuQr4XRg", "caption": "Virtual tour 1" },
                // ... more virtual tours ...
            ],
            "thumbnail": {
                "url": "http://via.placeholder.com/300x205",
                "caption": "Thumbnail"
            },
        },
        "nearby": [
            {
                "amenities": [
                    { "name": "Amenity 1", "distance": 0.5 },
                    // ... more amenities ...
                ],
                "schools": [
                    { "name": "School 1", "distance": 0.6, "rating": 8.0 },
                    // ... more schools ...
                ]
            }
            // ... more nearby entries if needed ...
        ],
        "priceInformation": {
            "price": 500000.00, 
            "priceOption": "Guide price"
        },
        "propertyInformation": {
            "rooms": [
                { 
                    "name": "Bedroom", 
                    "dimensions": {"width": 3.0, "length": 4.0, "area": 12.0}, 
                    "features": ["Feature 1", "Feature 2", "Feature 3"],
                    "description": "Double bedroom" 
                },
                
                
            ],
            "bedroomCount": 3,
            "bathroomCount": 2,
            "receptionRoomCount": 1,
            "propertyType": "Flat",
            "councilTaxBand": "Band C",
            "energyPerformance": {
                "currentRating": "C",
                "potentialRating": "B",
                "currentEnvironmentalRating": "C",
                "potentialEnvironmentalRating": "B"
            },
            "propertyHistory": "",
            "propertyTenure": "Freehold",
            "propertyAge": "New build",
            "propertyCondition": "Excellent",
            "propertyKeyFeatures": [
                "Key feature 1",
                "Key feature 2",
                "Key feature 3"
            ],
            "propertyTags": [
                "Tag 1",
                "Tag 2",
                "Tag 3"
            ],
            "propertyStyle": "Flat",
            "additionalInformation": "Additional information",
            "summary": "A stunning 1 bedroom flat...",
            "floorArea": {
                "width": 60.0, // Assuming this is the total width of the floor
                "length": 100.0, // Assuming this is the total length of the floor
                "area": 6000.0 // Assuming this is the total area in square meters
            },
            "description": "A stunning 1 bedroom flat situated on the 1st floor of a modern development with lift and boasting bright and spacious interiors throughout and a lovely private Balcony."
        }
    };
    return (
        <div>
            <ButtonSwitch icons={icons} />
            <div className='property-list'>
                {/* {properties && properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))} */}
                <PropertyCard property={hardCodedProperty} />
            </div>
                
        
        </div>
    );
}