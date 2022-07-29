import Block from './Block';
import Waves from './Waves';
import Top from './Top';
import Form from './Form';
import Button from './Button';
import Input from './Input';
import Logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

function Auth({ type }) {
    return (
        <div id="auth-main">
            <Block type={type}>
                <Top>
                    <Waves/>
                    <img src={Logo} alt='logo' id='brand-logo'/>
                </Top>
                <Form>
                    <Input placeholder='Username'/>
                    {type === 'register' && <Input placeholder='Email'/>}
                    <Input placeholder='Password' type="password"/>
                    {type === 'register' && <Input placeholder='Confirm Password' type="password"/>}
                </Form>
                <Button>{type === 'register' ? 'REGISTER' : 'LOGIN'}</Button>
            </Block>
            <Link id='auth-forgot-password' to={type === 'register' ? '/login' : '/register'}>{type === 'register' ? 'Already have an account?' : 'Don\'t have an account?'}</Link>
            {type !== 'register' && <Link id='auth-forgot-password' to="#">Forgot Password?</Link>}
        </div>
    )
}

export default Auth;