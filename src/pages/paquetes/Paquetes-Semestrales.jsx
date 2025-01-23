
import './Paquetes-Semestrales.css'
import { useEffect, useState } from "react";
import NavbarComponent from '../../components/Navbar';
import FooterComponent from '../../components/Footer';
import HeroTuistyXL from '../../components/Hero-Tuisty-XL';
import PlanTuisty from '../../components/Plan-Tuisty';
import { heroData, planesData } from "../../data";
import Loading from '../../components/Loading';

function PaquetesSemestrales () {
    const { title, subtitle, paragraph, backgroundImage } = heroData.heroPaqueteSemestral;
    const { plans, termsUrl, policiesUrl } = planesData.planesSemestralesPage;
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
                    <HeroTuistyXL
                        title={title}
                        subtitle={subtitle}
                        paragraph={paragraph}
                        backgroundImage={backgroundImage}
                    />
                    <PlanTuisty 
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

export default PaquetesSemestrales