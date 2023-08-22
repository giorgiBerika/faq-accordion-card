import { useState } from 'react'

import './AppRight.css'
import {AccordionHeader} from '../../components'
import {AccordionLine} from '../../components'
const AppRight = () =>
{
    const [lineClicked, setLineClicked] = useState(false);
    const accordionLineArr = 
    [
        {
            question: "How many team members can I invite?",
            answer: "No more than 2GB. All files in your account must fit your allotted storage space."
        },
        {
            question: "What is the maximum file upload size?",
            answer: "No more than 2GB. All files in your account must fit your allotted storage space."
        },
        {
            question: "How do I reset my password?",
            answer: "No more than 2GB. All files in your account must fit your allotted storage space."
        },
        {
            question: "Can I cancel my subscription?",
            answer: "No more than 2GB. All files in your account must fit your allotted storage space."
        },
        {
            question: "Do you provide additional support?",
            answer: "No more than 2GB. All files in your account must fit your allotted storage space."
        },
    ]
    return (
        <div className='app-right-part-wrapper'>
            <AccordionHeader />
            <div className='accordion-line-wrapper'>
                {accordionLineArr.map((line) => {
                    return (
                        <AccordionLine 
                    accordionQuestion={line.question}
                    accordionAnswer={line.answer}
                    
                    lineClicked={lineClicked}
                    setLineClicked={setLineClicked}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default AppRight;