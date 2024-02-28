import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Heroes from '../components/heroes/Heroes';
import Heroe from '../components/heroe/Heroe';

const Router = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Heroes />} />
                <Route path="/heroes" element={<Heroes />} />
                <Route path="/heroe/:nombre" element={<Heroe />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
