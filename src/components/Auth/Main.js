import Block from './Block';
import Waves from './Waves';
import Top from './Top';
import Form from './Form';
import Button from './Button';
import Input from './Input';
import Logo from '../../img/logo.png';

function Auth() {
    return (
        <Block>
            <Top>
                <Waves/>
                <img src={Logo} alt="logo" id="brand-logo"/>
            </Top>
            <Form>
                Username
                <Input placeholder="Username"/>
                Password
                <Input placeholder="Password"/>
            </Form>
            <Button>LOGIN</Button>
        </Block>
    )
}

export default Auth;