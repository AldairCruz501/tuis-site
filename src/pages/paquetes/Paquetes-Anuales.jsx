import './Paquetes-Anuales.css'
import { useEffect, useState } from "react";
import NavbarComponent from '../../components/Navbar';
import FooterComponent from '../../components/Footer';
import HeroTuistyXL from '../../components/Hero-Tuisty-XL';
import { heroData, planesData } from "../../data";
import Loading from '../../components/Loading';
import PlanesSection from '../../components/Planes-Section';

function PaquetesAnuales () {
    const { title, subtitle, paragraph, backgroundImage } = heroData.heroPaqueteAnual;
    const { plans, termsUrl, policiesUrl } = planesData.planesAnualesPage;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
    };

    fetchData();
    }, []);

    return (
        <>
            <Loading loading={loading} />
            {!loading && (
                <>
                    <NavbarComponent></NavbarComponent>
                    <HeroTuistyXL
                        title={title}
                        subtitle={subtitle}
                        paragraph={paragraph}
                        backgroundImage={backgroundImage}
                    />
                    <PlanesSection 
                        plans={plans}
                        termsUrl={termsUrl}
                        policiesUrl={policiesUrl}
                    />
                    <FooterComponent></FooterComponent>
                </>
            )}
        </>
    );
}

export default PaquetesAnuales