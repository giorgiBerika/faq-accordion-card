import './AccordionLine.css'

import arrow from '../../assets/arrow.png';

const AccordionLine = ({activeLine, setActiveLine, ...props}) =>
{

    const clickHandler = (e) =>
    {
        if(activeLine === props.lineIndex)
        {
            setActiveLine(0);
        }else
        {

            setActiveLine(props.lineIndex);
        }
    }
    return (
        <div className={`accordion-line ${(activeLine === props.lineIndex) ?  'active-line' : ''}`}
             onClick={() => clickHandler()}
                >
            <div className='accordion-line-question'>
                <h2 className={`${(activeLine === props.lineIndex) ?  'active-line-question' : ''}`}
                >{props.accordionQuestion}</h2>
                <img
                    className={`accordion-line-arrow ${(activeLine === props.lineIndex) ?  'accordion-line-arrow-active' : ''}`} 
                    src={arrow} 
                    alt='Arrow icon'/> 
            </div>
            {(activeLine === props.lineIndex) && 
            <p className='accordion-line-answer'>{props.accordionAnswer}</p>
            }      
            </div>
    )
}

export default AccordionLine;