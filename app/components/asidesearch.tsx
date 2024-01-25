import FormField from '~/components/form-field';
import { faLocationDot, faHouse, faCircleSterling, faBed, faSort } from '@fortawesome/pro-solid-svg-icons';
import { faSliders } from '@fortawesome/pro-regular-svg-icons';
import { faCircleDashed } from '@fortawesome/pro-thin-svg-icons';
export function AsideSearch() {
    return (
        <aside className="aside-search">
            <form>
                <FormField 
                    value='1'
                    icon={faLocationDot}
                    type='select'
                    htmlFor='location'
                    options={['Paisley, Scotland', 'Glasgow, Scotland']}
                />
                <FormField 
                    value='0'icon={faCircleDashed}
                    type='select'
                    htmlFor='radius'
                    options={['Radius', '1 mile', '2 miles', '5 miles']}
                />
                <FormField 
                    value='0'
                    icon={faHouse}
                    type='select'
                    htmlFor='type'
                    options={['Property Type', 'House', 'Flat', 'Land']}
                />
                <FormField 
                    value='0'
                    icon={faCircleSterling}
                    type='select'
                    htmlFor='price'
                    options={['Price Range', '£0 - £50,000', '£50,001 - £100,000', '£100,001 - £250,000']}
                />
                <FormField 
                    value='0'
                    icon={faBed}
                    type='select'
                    htmlFor='bedrooms'
                    options={['Bedrooms', '1', '2', '3']}
                />
                <FormField 
                    value='0'
                    icon={faSliders}
                    type='select'
                    htmlFor='filters'
                    options={['Filters']}
                />
                <FormField 
                    value='0'
                    icon={faSort}
                    type='select'
                    htmlFor='sort'
                    options={['Sort']}
                />
                
                <button type='submit' className='accent-btn'>Search</button>
            </form>
        </aside>
    )
}