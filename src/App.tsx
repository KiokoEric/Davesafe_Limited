import './App.css';
import React from 'react';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
const About = React.lazy(() => import('./Pages/About/About'));
const Contact = React.lazy(() => import('./Pages/Contact/Contact'));
const Products = React.lazy(() => import('./Pages/Products/Products'));
const Head_Gear = React.lazy(() => import('./Pages/Information/Head_Gear/Head_Gear'));
const Foot_Wear = React.lazy(() => import('./Pages/Information/Foot_Wear/Foot_Wear'));
const Hand_Gloves = React.lazy(() => import('./Pages/Information/Hand_Gloves/Hand_Gloves'));
const School_Clothing = React.lazy(() => import('./Pages/Information/School_Clothing/School_Clothing'));
const Face_Protection = React.lazy(() => import('./Pages/Information/Face_Protection/Face_Protection'));
const Security_Uniform = React.lazy(() => import('./Pages/Information/Security_Uniform/Security_Uniform'));
const Hearing_Protection = React.lazy(() => import('./Pages/Information/Hearing_Protection/Hearing_Protection'));
const Protective_Clothing = React.lazy(() => import('./Pages/Information/Protective_Clothing/Protective_Clothing'));
const Respiratory_Protection = React.lazy(() => import('./Pages/Information/Respiratory_Protection/Respiratory_Protection'));

function App() {

return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<React.Suspense><About /> </React.Suspense>}/>
            <Route path='/Contact' element={<React.Suspense><Contact /></React.Suspense>}/>
            <Route path='/Products' element={<React.Suspense><Products /></React.Suspense>}/>
            <Route path='/HeadGear' element={<React.Suspense><Head_Gear/></React.Suspense>}/>
            <Route path='/FootWear' element={<React.Suspense><Foot_Wear /></React.Suspense>}/>
            <Route path='/HandGloves' element={<React.Suspense><Hand_Gloves /></React.Suspense>}/>
            <Route path='/SchoolClothing' element={<React.Suspense><School_Clothing /></React.Suspense>}/>
            <Route path='/FaceProtection' element={<React.Suspense><Face_Protection /></React.Suspense>}/>
            <Route path='/SecurityUniform' element={<React.Suspense><Security_Uniform /></React.Suspense>}/>
            <Route path='/HearingProtection' element={<React.Suspense><Hearing_Protection /></React.Suspense>}/>
            <Route path='/ProtectiveClothing' element={<React.Suspense><Protective_Clothing/></React.Suspense>}/>
            <Route path='/RespiratoryProtection' element={<React.Suspense><Respiratory_Protection /></React.Suspense>} />
        </Routes>
        <Footer />
    </>
)
}

export default App
