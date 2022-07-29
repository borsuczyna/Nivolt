import Block from './Block';
import Waves from './Waves';
import Top from './Top';
import Logo from '../../img/logo.png';

function Auth() {
    return (
        <Block>
            <Top>
                <Waves/>
                <img src={Logo} alt="logo" id="brand-logo"/>
            </Top>
        </Block>
    )
}

export default Auth;