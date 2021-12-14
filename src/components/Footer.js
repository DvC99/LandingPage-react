import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Footer.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Footer(){
    return(
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Bienvenido a nuestro blog de Cafe, donde recomendamos las mejores recetas.
                </p>
                <p className="footer-subscription-text">
                    Puedes suscribirte en este momento.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Digita tu email" className="footer-input "/>
                        <Button buttonStyle="btn--outline">Suscribir</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Sobre nosotros</h2>
                        <Link to='/sing-up'>¿Como trabajamos?</Link>
                        <Link to='/sing-up'>Testimonios</Link>
                        <Link to='/sing-up'>Carreras</Link>
                        <Link to='/sing-up'>Fundadores</Link>
                        <Link to='/sing-up'>Terminos y Servicios</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Sobre nosotros</h2>
                        <Link to='/sing-up'>¿Como trabajamos?</Link>
                        <Link to='/sing-up'>Testimonios</Link>
                        <Link to='/sing-up'>Carreras</Link>
                        <Link to='/sing-up'>Fundadores</Link>
                        <Link to='/sing-up'>Terminos y Servicios</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/sing-up'>Enviar videos</Link>
                        <Link to='/sing-up'>Agencia</Link>
                        <Link to='/sing-up'>Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Redes Sociales</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>YouTube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            <FontAwesomeIcon icon="coffee" />
                        </Link>
                    </div>
                    <small className="website-rights">Cafe c 2020</small>
                    <div className="social-icons">
                        <Link to='/' target="_black" aria-label="Facebook" className="social-icon-link facebook">
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </Link>
                        <Link to='/' target="_black" aria-label="Instagram" className="social-icon-link Instagram">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </Link>
                        <Link to='/' target="_black" aria-label="Twitter" className="social-icon-link twitter">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </Link>
                        <Link to='/' target="_black" aria-label="Twitter" className="social-icon-link linkedin">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;