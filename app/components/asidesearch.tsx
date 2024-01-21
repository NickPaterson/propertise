import InputDropdown from './inputdropdown';
import { faLocationDot, faHouse, faCircleSterling, faBed, faSort } from '@fortawesome/pro-solid-svg-icons';
import { faSliders } from '@fortawesome/pro-regular-svg-icons';
import { faCircleDashed } from '@fortawesome/pro-thin-svg-icons';
export function AsideSearch() {
    return (
        <aside className="aside-search">
            <form>
               <InputDropdown 
                    icon={faLocationDot} 
                    placeholder={'Paisley, Scotland'} 
                    classname={''} 
                />
                <InputDropdown 
                    icon={faCircleDashed}
                    placeholder={'Radius'}
                    classname={''}
                />
                <InputDropdown 
                    icon={faHouse}
                    placeholder={'Property Type'}
                    classname={''}
                />
                <InputDropdown 
                    icon={faCircleSterling}
                    placeholder={'Price Range'}
                    classname={''}
                />
                <InputDropdown 
                    icon={faBed}
                    placeholder={'Bedrooms'}
                    classname={''}
                />
                <InputDropdown 
                    icon={faSliders}
                    placeholder={'Filters'}
                    classname={''}
                />
                <InputDropdown 
                    icon={faSort}
                    placeholder={'Sort'}
                    classname={''}
                />
                <button>Search</button>
            </form>
        </aside>
    )
}