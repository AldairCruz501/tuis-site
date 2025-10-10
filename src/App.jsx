import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
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
import ColaboracionJusticia from './pages/Colaboracion-Justicia';
import LoginRegistro from './pages/Login-Registro';
import usePageTitle from './hooks/usePageTitle';
import Carrito from './pages/Cart/Carrito';
import { CartProvider } from './Context/Context';
import Pasarela from './pages/Pasarela/Pasarela';
import Success from './pages/Cart/success';
import { Recargas } from './pages/refllls/recargas';


// Componente genérico para PDFs fijos
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

// Componente para PDFs de folios dinámicos
const FolioPdfViewer = () => {
  const { folioId } = useParams();

  // Aquí defines el mapeo de folios -> PDF
  const pdfMap = {
    "1833634": "/pdf/folio/Tuisty-Nova-3-GB-x-30-dias.pdf",
    "1833650": "/pdf/folio/Tuisty-Estelar-5-GB-x-360-dias.pdf",
    "1833638": "/pdf/folio/Tuisty-Estelar-5-GB-x-90-dias.pdf",
    "1833635": "/pdf/folio/Tuisty-Estelar-5-GB-x-30-dias.pdf",
    "1833642": "/pdf/folio/Tuisty-Estelar-5-GB-x-180-dias.pdf",
    "1833637": "/pdf/folio/Tuisty-Gamer-40-GB-x-30-dias.pdf",
    "1833640": "/pdf/folio/Tuisty-Prime-15-GB-x-90-dias.pdf",
    "1833645": "/pdf/folio/Tuisty-Prime-15-GB-x-180-dias.pdf",
    "1833653": "/pdf/folio/Tuisty-Prime-15-GB-x-360-dias.pdf",
    "1833636": "/pdf/folio/Tuisty-Prime-15-GB-x-30-dias.pdf",
  };

  const pdfPath = pdfMap[folioId];

  if (!pdfPath) {
    return <p className="text-center mt-5">No se encontró PDF para el folio {folioId}</p>;
  }

  return <PdfViewer pdfPath={pdfPath} />;
};


function App() {
  return (
    <CartProvider>
      <Router>
        <PageTitleUpdater />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/paquetes' element={<Paquetes />} />
          <Route path='/paquetes/tuisty-express' element={<PaquetesBasicos />} />
          <Route path='/paquetes/tuisty-mensual' element={<PaquetesTuisty />} />
          <Route path='/paquetes/tuisty-trimestral' element={<PaquetesTrimestrales />} />
          <Route path='/paquetes/tuisty-semestral' element={<PaquetesSemestrales />} />
          <Route path='/paquetes/tuisty-anual' element={<PaquetesAnuales />} />
          <Route path='/cobertura' element={<Cobertura />} />
          <Route path='/compatibilidad' element={<Compatibilidad />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/acceder' element={<LoginRegistro />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/proceder-a-pagar' element={<Pasarela />} />
          <Route path='/colaboracion-con-la-justicia' element={<ColaboracionJusticia />} />
          <Route path='/aviso-de-privacidad' element={<AvisoPrivacidad />} />
          <Route path='/terminos-y-condiciones' element={<TerminosCondiciones />} />

          {/* PDFs fijos */}
          <Route path="/portabilidad-ift" element={<PdfViewer pdfPath="/pdf/Portabilidad-IFT.pdf" />} />
          <Route path="/contrato-adhesion-profeco" element={<PdfViewer pdfPath="/pdf/20240711-INBTEL-oficio-registro-contrato-de-adhesion.pdf" />} />
          <Route path="/carta-derechos-min" element={<PdfViewer pdfPath="/pdf/Carta-Derechos-Minimos-IFT.pdf" />} />
          <Route path="/politica-uso-justo" element={<PdfViewer pdfPath="/pdf/20240912-INBTEL-politica-de-uso-justo-MVNO-v1.pdf" />} />
          <Route path="/colaboracion-justicia" element={<PdfViewer pdfPath="/pdf/DATOS-PARA-COLABORACION-CON-LA-JUSTICIA.pdf" />} />
          <Route path="/cod-practicas-comerciales" element={<PdfViewer pdfPath="/pdf/20240912-INBTEL-codigo-de-practicas-comerciales-MVNO-v1.pdf" />} />

          {/* Ruta dinámica para folios */}
          <Route path="/folio/:folioId" element={<FolioPdfViewer />} />

          <Route path='/success' element={<Success />} />
          <Route path='/recargas' element={<Recargas />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

const PageTitleUpdater = () => {
  usePageTitle();
  return null;
};

export default App;
