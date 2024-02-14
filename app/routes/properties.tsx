import { LoaderFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { PropertyCard } from '../components/property-card';
import { getProperties } from "~/utils/properties.server";
import { ButtonSwitch } from '../components/button-switch';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faList } from "@fortawesome/pro-regular-svg-icons";
import { faGrid2, faLocationDot } from "@fortawesome/pro-solid-svg-icons";
import { Property } from '@prisma/client';
    
export const loader: LoaderFunction = async () => {
    const properties = await getProperties();
    return json({ properties });
}

export default function Properties() {
    const icons: IconDefinition[] = [faList, faGrid2, faLocationDot];
    const { properties } = useLoaderData<typeof loader>();
    return (
        <div>
            <ButtonSwitch icons={icons} />
            <div className='property-list'>
                {properties && properties.map((property: Property) => (
                    <PropertyCard key={property.id} property={property} estateAgent={property.estateAgent} />
                ))}
            </div>
                
        
        </div>
    );
}