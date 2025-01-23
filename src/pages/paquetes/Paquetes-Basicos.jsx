import './Paquetes-Basicos.css'
import { useEffect, useState } from "react";
import NavbarComponent from "../../components/Navbar";
import FooterComponent from "../../components/Footer";
import HeroTuisty from "../../components/Hero-Tuisty";
import PlanesSection from "../../components/Planes-Section";
import { heroData, planesData } from "../../data";
import Loading from '../../components/Loading';


function PaquetesBasicos () {
    const { title, subtitle, backgroundImage, links } = heroData.heroPaqueteBasico;
    const { plans, termsUrl, policiesUrl } = planesData.planesBasicosPage;
    const [loading, setLoading] = useState(true);

        useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
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
                <HeroTuisty
                    title={title}
                    subtitle={subtitle}
                    backgroundImage={backgroundImage}
                    links={links}
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

export default PaquetesBasicos