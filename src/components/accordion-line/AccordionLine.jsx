import './AccordionLine.css'

import arrow from '../../assets/arrow.png';

const AccordionLine = ({lineClicked, setLineClicked, ...props}) =>
{

    const clickHandler = (e) =>
    {
        setLineClicked(!lineClicked);
    }
    return (
        <div className='accordion-line'
             onClick={() => clickHandler()}
                >
            <div className='accordion-line-question'>
                <h2>{props.accordionQuestion}</h2>
                <img
                    className='accordion-line-arrow' 
                    src={arrow} 
                    alt='Arrow icon'/> 
            </div>
            {lineClicked && 
            <p className='accordion-line-answer'>{props.accordionAnswer}</p>
            }
            </div>
    )
}

export default AccordionLine;