
import './Paquetes-Tuisty.css'
import { useEffect, useState } from "react";
import NavbarComponent from "../../components/Navbar";
import FooterComponent from "../../components/Footer";
import HeroTuisty from "../../components/Hero-Tuisty";
import PlanesSection from "../../components/Planes-Section";
import { heroData,planesData } from "../../data";
import Loading from '../../components/Loading';
import ShippingTerms from '../../components/Shipping-Terms';
import FloatingWhatsAppButton from '../../components/WhatsApp-Button';
import AppStoreTuis from '../../components/AppStoreTuis';

function PaquetesTuisty () {
    const { title, subtitle, backgroundImage} = heroData.heroPaqueteTuisty;
    const { plans } = planesData.planesTuistyPage;
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
                    <NavbarComponent/>
                    <HeroTuisty
                        title={title}
                        subtitle={subtitle}
                        backgroundImage={backgroundImage}
                    />
                    <main>
                        <PlanesSection
                            plans={plans}
                        />
                        <ShippingTerms/>
                        <AppStoreTuis/>
                    </main>
                    <FloatingWhatsAppButton/>
                    <FooterComponent/>
                </>
            )}
        </>
    );
}

export default PaquetesTuisty