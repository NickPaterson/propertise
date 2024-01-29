import { Property } from '@prisma/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBed, faBath, faToilet, faRulerCombined, faLayerGroup } from '@fortawesome/pro-regular-svg-icons';
import { faPhone, faEnvelope, faImage, faFilm, faBookmark,faGlobePointer } from '@fortawesome/pro-solid-svg-icons';
import { ButtonSwitch } from '../components/button-switch';
import { Link } from 'react-router-dom';
interface props {
    property: Property;
}

export function PropertyCard({ property }: props, propertyCardType: string = 'property-card-list') {
    const { title, address, estateAgent, media, priceInformation, propertyInformation } = property;
    const icons: IconDefinition[] = [faImage, faFilm, faLayerGroup];
    const estateAgentDivStyle = {
        background: `${estateAgent.backgroundColor} !important`,
        color: `${estateAgent.textColor} !important`
    };
    return (
        <div className={`property-card ${propertyCardType}`}>
            <ButtonSwitch icons={icons} />
            <div className='property-card__content'>
                <div className="property-card__image">
                    <img src={media.images[0].url} alt={media.images[0].caption} />
                </div>
                <div className='property-card__info'>
                    <h2 className='property-card__title'>{title}</h2>
                    <p className='property-card__address'>{address.line1} {address.line2} {address.city}</p>
                    <p className='property-card__summary'>{propertyInformation.summary}</p>
                    <div className='property-card__icons'>
                        <div className='property-card__icon'>
                            <FontAwesomeIcon icon={faBed} />
                            <span>{propertyInformation.rooms[0].name}</span>
                        </div>
                        <div className='property-card__icon'>
                            <FontAwesomeIcon icon={faBath} />
                            <span>{propertyInformation.rooms[1].name}</span>
                        </div>
                        <div className='property-card__icon'>
                            <FontAwesomeIcon icon={faToilet} />
                            <span>{propertyInformation.rooms[2].name}</span>
                        </div>
                        <div className='property-card__icon'>
                            <FontAwesomeIcon icon={faRulerCombined} />
                            <span>60m<sup>2</sup></span>
                        </div>
                    </div>
                    <div className='property-card__price'>
                        <span className='property-card__price-span'>£{priceInformation.price}</span>
                        <span className='property-card__price-option-span'>{priceInformation.priceOption}</span>
                    </div>
                    <div className='property-card__bookmark'>
                        <button className='bookmark-button'><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>
                <div 
                    className='property-card__agent' 
                    style={estateAgentDivStyle}>
                    <img src={estateAgent.logo.url} alt={estateAgent.logo.caption} />
                    <p className='property-card__agent-call'><FontAwesomeIcon icon={faPhone} /> Call Agent</p>
                    <p className='property-card__agent-email'><FontAwesomeIcon icon={faEnvelope} />Email Agent</p>
                    <p className='property-card__agent-email'><FontAwesomeIcon icon={faGlobePointer} />Website</p>

                </div>
            </div>
        </div>
    );
}

export default PropertyCard;
