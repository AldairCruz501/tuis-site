
import './Paquetes-Semestrales.css'
import { useEffect, useState } from "react";
import NavbarComponent from '../../components/Navbar';
import FooterComponent from '../../components/Footer';
import HeroTuistyXL from '../../components/Hero-Tuisty-XL';
import { heroData, planesData } from "../../data";
import Loading from '../../components/Loading';
import PlanesSection from '../../components/Planes-Section';
import ShippingTerms from '../../components/Shipping-Terms';
import FloatingWhatsAppButton from '../../components/WhatsApp-Button';

function PaquetesSemestrales () {
    const { title, subtitle, paragraph, backgroundImage } = heroData.heroPaqueteSemestral;
    const { plans } = planesData.planesSemestralesPage;
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
                    <HeroTuistyXL
                        title={title}
                        subtitle={subtitle}
                        paragraph={paragraph}
                        backgroundImage={backgroundImage}
                    />
                    <main>
                        <PlanesSection
                            plans={plans}
                        />
                        <ShippingTerms/>
                    </main>
                    <FloatingWhatsAppButton/>
                    <FooterComponent/>
                </>
            )}
        </>
    );
}

export default PaquetesSemestrales