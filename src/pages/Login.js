import '../App.scss';
import '../styles/login.scss';

import Auth from '../components/Auth/Main.js';

function App() {
    return (
        <div className="App">
            <div id='background'>
                <Auth/>
            </div>
        </div>
    );
}

export default App;