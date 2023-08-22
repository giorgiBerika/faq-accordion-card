import './AppRight.css'
import {AccordionHeader} from '../../components'
import {AccordionLine} from '../../components'
const AppRight = () =>
{
    return (
        <div className='app-right-part-wrapper'>
            <AccordionHeader />
            <div className='accordion-line-wrapper'>
                <AccordionLine />
            </div>
        </div>
    )
}

export default AppRight;