import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from "../../assets/logo.png"; // Updated logo path
import hondaLogo from "../../assets/honda-logo-bg.png";

const FooterComponent = () => {
    return (
        <Footer container className='my-0 bg-green-600 text-white'>
            <div className="w-full text-white">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <FooterBrand
                            href="/"
                            src={ logo }
                            alt="Logo"
                        />
                        <div className="mt-4 text-sm text-white">
                            <p className='w-96 text-justify'>
                                Firoz Autos is a Honda Bangladesh authorized leading Motor Bike dealer and service provider, dedicated to delivering top-notch vehicle maintenance and repair solutions. Our team of skilled technicians ensures your vehicle runs smoothly and efficiently.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div className='text-white'>
                            <FooterTitle title="about" className='text-white' />
                            <FooterLinkGroup col>
                                <FooterLink href="/about" target='_blank' className='text-white'>Firoz Autos</FooterLink>
                                <FooterLink href="/service" target='_blank' className='text-white'>Firoz Motors</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Follow us" className='text-white' />
                            <FooterLinkGroup col>
                                <FooterLink href="https://www.facebook.com/firozautos/" target='_blank' className='text-white'>Facebook</FooterLink>
                                <FooterLink href="www.instagram.com" target='_blank' className='text-white'>Instagram</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Legal" className='text-white' />
                            <FooterLinkGroup col>
                                <FooterLink href="/privacy-policy" target='_blank' className='text-white'>Privacy Policy</FooterLink>
                                <FooterLink href="/terms" target='_blank' className='text-white'>Terms &amp; Conditions</FooterLink>
                            </FooterLinkGroup>
                        </div>
                    </div>
                </div>
                <FooterDivider />
                <div className="w-full sm:flex sm:items-center sm:justify-between text-white">
                    <FooterCopyright href="/" by="Firoz Autos" year={ new Date().getFullYear() } className='text-white' />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-white">
                        <FooterIcon href="https://www.facebook.com/firozautos/" target='_blank' icon={ BsFacebook } className='text-white' />
                        <FooterIcon href="#" icon={ BsInstagram } className='text-white' />
                        <FooterIcon href="#" icon={ BsTwitter } className='text-white' />
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default FooterComponent;