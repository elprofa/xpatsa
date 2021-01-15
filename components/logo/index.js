import { ImgLogo } from './logo.stc';
import Logo_Xpatsa from '../img/Logo_Xpatsa.png';

const Logo = (props) => {
    const {position} = props;
    return (
        <ImgLogo className={position}>
            <img src={Logo_Xpatsa.jpg} alt="Logo Xpasta" id={id} />
        </ImgLogo>
    )
}

export default Logo;