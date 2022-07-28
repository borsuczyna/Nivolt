import {
    Routes,
    Route,
} from "react-router-dom";

import Index from '../pages/index';
import Test from '../pages/test';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    )
}

export default Router;