import { useState } from 'react'

import './AppRight.css'
import {AccordionHeader} from '../../components'
import {AccordionLine} from '../../components'
const AppRight = () =>
{
    const [activeLine, setActiveLine] = useState(0);
    const accordionLineArr = 
    [
        {
            question: "How many team members can I invite?",
            answer: "You can invite at least five team members."
        },
        {
            question: "What is the maximum file upload size?",
            answer: "No more than 2GB. All files in your account must fit your allotted storage space."
        },
        {
            question: "How do I reset my password?",
            answer: "In order to change password, you need to click settings, then personal informatin and change password."
        },
        {
            question: "Can I cancel my subscription?",
            answer: "Of course, you can cancel subscription whenever you want."
        },
        {
            question: "Do you provide additional support?",
            answer: "Obviously, we do provide additional support!"
        },
    ]
    return (
        <div className='app-right-part-wrapper'>
            <AccordionHeader />
            <div className='accordion-line-wrapper'>
                {accordionLineArr.map((line, index) => {
                    return (
                    <AccordionLine 
                    accordionQuestion={line.question}
                    accordionAnswer={line.answer}

                    lineIndex={index + 1}
                    key={index + 1}
                        

                    activeLine={activeLine}
                    setActiveLine={setActiveLine}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default AppRight;