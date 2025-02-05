import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {  BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Paquetes from './pages/Paquetes';
import PaquetesBasicos from './pages/paquetes/Paquetes-Basicos';
import PaquetesTuisty from './pages/paquetes/Paquetes-Tuisty';
import PaquetesTrimestrales from './pages/paquetes/Paquetes-Trimestrales';
import PaquetesSemestrales from './pages/paquetes/Paquetes-Semestrales';
import PaquetesAnuales from './pages/paquetes/Paquetes-Anuales';
import Cobertura from './pages/Cobertura';
import Compatibilidad from './pages/Compatibilidad';
import Nosotros from './pages/Nosotros';
import AvisoPrivacidad from './pages/Aviso-Privacidad';
import TerminosCondiciones from './pages/Terminos-Condiciones';
import LoginRegistro from './pages/Login-Registro';
import usePageTitle from './hooks/usePageTitle';
import Carrito from './pages/Cart/Carrito';
import { CartProvider } from './Context/Context';
import { useEffect } from 'react';
import Pasarela from './pages/Pasarela/Pasarela';

const PdfViewer = ({ pdfPath }) => {
  return (
    <iframe
      src={pdfPath}
      title="PDF Viewer"
      width="100%"
      height="100%"
      style={{ border: "none", height: "100vh" }}
    />
  );
};


function App() {
  return (
    <CartProvider>
      <Router>
        <PageTitleUpdater />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/paquetes' element={<Paquetes />}/>
          <Route path='/paquetes/paquetes-basicos' element={<PaquetesBasicos />}/>
          <Route path='/paquetes/paquetes-tuisty' element={<PaquetesTuisty />}/>
          <Route path='/paquetes/paquetes-trimestrales' element={<PaquetesTrimestrales/>}/>
          <Route path='/paquetes/paquetes-semestrales' element={<PaquetesSemestrales/>}/>
          <Route path='/paquetes/paquetes-anuales' element={<PaquetesAnuales/>}/>
          <Route path='/cobertura' element={<Cobertura/>}/>
          <Route path='/compatibilidad' element={<Compatibilidad/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path ='/acceder' element={<LoginRegistro/>}/>
          <Route path ='/carrito' element={<Carrito/>}/>
          <Route path ='/proceder-a-pagar' element={<Pasarela/>}/>
          <Route path='/aviso-de-privacidad' element={<AvisoPrivacidad/>}/>
          <Route path='/terminos-y-condiciones' element={<TerminosCondiciones/>}/>
          <Route path="/portabilidad-ift" element={<PdfViewer pdfPath="/pdf/Portabilidad-IFT.pdf" />} />
          <Route path="/contrato-adhesion-profeco" element={<PdfViewer pdfPath="/pdf/20240711-INBTEL-oficio-registro-contrato-de-adhesion.pdf" />} />
          <Route path="/carta-derechos-min" element={<PdfViewer pdfPath="/pdf/Carta-Derechos-Minimos-IFT.pdf" />} />
          <Route path="/politica-uso-justo" element={<PdfViewer pdfPath="/pdf/20240912-INBTEL-politica-de-uso-justo-MVNO-v1.pdf" />} />
          <Route path="/colaboracion-justicia" element={<PdfViewer pdfPath="/pdf/DATOS-PARA-COLABORACION-CON-LA-JUSTICIA.pdf" />} />
          <Route path="/cod-practicas-comerciales" element={<PdfViewer pdfPath="/pdf/20240912-INBTEL-codigo-de-practicas-comerciales-MVNO-v1.pdf" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

const PageTitleUpdater = () => {
  usePageTitle();
  return null;
};


export default App
