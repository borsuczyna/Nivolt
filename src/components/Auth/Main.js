import Block from './Block';
import Waves from './Waves';
import Top from './Top';
import Form from './Form';
import Button from './Button';
import Input from './Input';
import Logo from '../../img/logo.png';

function Auth() {
    return (
        <div>
            <Block>
                <Top>
                    <Waves/>
                    <img src={Logo} alt='logo' id='brand-logo'/>
                </Top>
                <Form>
                    <Input placeholder='Username'/>
                    <Input placeholder='Password' type="password"/>
                </Form>
                <Button>LOGIN</Button>
            </Block>
            <div id='auth-forgot-password'>I've forgotten my password</div>
        </div>
    )
}

export default Auth;