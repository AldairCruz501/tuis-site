import { useEffect, useState } from "react";
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import "./Cobertura.css"
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import Loading from '../components/Loading';



export default function Cobertura () {

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
                    <section>
                        <Container className='col-md-6 p-lg-2 mx-auto my-auto'>
                            <div className='pt-5 mt-5'>
                                <h1 className='display-1 fw-bold text-uppercase text-white title-cobertura text-center'>Nuestra Cobertura</h1>
                            </div>
                        </Container>
                        <Container fluid className='text-center'>
                            <Fade>
                                <div className='pt-5 mt-5 mb-5 pb-5'>
                                    <img src="./img/cobertura-tuis-1.jpg" alt=""  className='img-fluid w-100'/>
                                </div>
                            </Fade>
                        </Container>
                    </section>
                    <FooterComponent></FooterComponent>
                </>
            )}
        </>
    );
}