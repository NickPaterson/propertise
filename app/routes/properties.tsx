import { LoaderFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { PropertyCard } from '../components/property-card';
import { getProperties } from "~/utils/properties.server";
import { ButtonSwitch } from '../components/button-switch';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faList } from "@fortawesome/pro-regular-svg-icons";
import { faGrid2, faLocationDot } from "@fortawesome/pro-solid-svg-icons";

export const loader: LoaderFunction = async () => {
    const properties = await getProperties();
    return json({ properties });
}

export default function Properties() {
    const icons: IconDefinition[] = [faList, faGrid2, faLocationDot];
    const { properties } = useLoaderData<typeof loader>();
    const hardCodedProperty = {
        "id": "1",
        "title": "1 bed flat for sale",
        "address": {
            "line1": "Flat 1, 1-3",
            "line2": "Lambeth High Street",
            "city": "London",
            "postcode": "SE1 7JN"
        },
        "media": {
            "images": [
                { "url": "http://via.placeholder.com/300x205", "caption": "Image 1" },
                { "url": "https://media.rightmove.co.uk/dir/crop/10:9-16:9/loc/1011/915_1432_IMG_01_0000_max_476x317.jpg", "caption": "Image 2" },
                { "url": "https://media.rightmove.co.uk/dir/crop/10:9-16:9/loc/1011/915_1432_IMG_02_0000_max_476x317.jpg", "caption": "Image 3" },
                { "url": "https://media.rightmove.co.uk/dir/crop/10:9-16:9/loc/1011/915_1432_IMG_03_0000_max_476x317.jpg", "caption": "Image 4" },
                { "url": "https://media.rightmove.co.uk/dir/crop/10:9-16:9/loc/1011/915_1432_IMG_04_0000_max_476x317.jpg", "caption": "Image 5" },
                { "url": "https://media.rightmove.co.uk/dir/crop/10:9-16:9/loc/1011/915_1432_IMG_05_0000_max_476x317.jpg", "caption": "Image 6" },
                { "url": "https://media.rightmove.co.uk/dir/crop/10:9-16:9/loc/1011/915_1432_IMG_06_0000_max_476x317.jpg", "caption": "Image 7" }
            ],
            "videos": [
                { "url": "https://www.youtube.com/watch?v=ZQDJuQr4XRg", "caption": "Video 1" },
                { "url": "https://www.youtube.com/watch?v=ZQDJuQr4XRg", "caption": "Video 2" },
                { "url": "https://www.youtube.com/watch?v=ZQDJuQr4XRg", "caption": "Video 3" }
            ]
        },
        "priceInformation": {
            "price": "500,000",
            "priceOption": "Guide price"
        },
        "propertyInformation": {
            "summary": "A stunning 1 bedroom flat situated on the 1st floor of a modern development with lift and boasting bright and spacious interiors throughout and a lovely private Balcony.",
            "rooms": [
                { "name": "3", "description": "Double bedroom" },
                { "name": "1", "description": "1 bathroom" },
                { "name": "1", "description": "1 reception room" }
            ]
        },
        "estateAgent": {
            "name": "Estate Agent Name",
            "address": {
                "line1": "Foxtons London Bridge",
                "line2": "1-2 Mill Street",
                "city": "London",
                "postcode": "SE1 2BD"
            },
            "phone": "020 7386 6500",
            "email": "",
            "website": "",
            "backgroundColor": "#D2E8EC",
            "textColor": "#000000",
            "logo": {
                "url": "/estate-agent-placeholder-logo.png",
                "caption": "Estate agent logo",
            },

        }
    };
    return (
        <div>
            <ButtonSwitch icons={icons} />
            <div className='property-list'>
                {properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
                <PropertyCard property={hardCodedProperty} />
            </div>
                
        
        </div>
    );
}