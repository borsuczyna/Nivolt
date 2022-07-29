import '../App.scss';
import '../styles/main.scss';
import '../styles/Login/main.scss';

import Auth from '../components/Auth/Main.js';

function App() {
    return (
        <div className="App">
            <div id='background'>
                <Auth type="register"/>
            </div>
        </div>
    );
}

export default App;