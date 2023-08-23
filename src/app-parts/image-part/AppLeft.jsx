import './AppLeft.css'

import platformLines from '../../assets/lines-platform.png';
import mainImage from '../../assets/main-image.png';
import mailBox from '../../assets/mail-box.svg'
import singlePlatform from '../../assets/single-platform.svg'

const AppLeft = () =>
{
    return (
        <div className='app-left-part'>
            <img className='platform-lines' src={platformLines} alt="Platform and lines" />
            <img className='mail-box' src={mailBox} alt="mail 3d box" />
            <img src={mainImage} alt="A girl and pc, 3d art" />
            <img className='single-platform' src={singlePlatform} alt='Just platform'/>
        </div>
    )
}

export default AppLeft;