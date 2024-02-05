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
import logo from "../../assets/logo.jpg"

const FooterComponent = () => {
    return (
        <Footer container className='my-2 bg-gray-800'>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <FooterBrand
                            href="/"
                            src={ logo }
                            alt="Logo"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FooterTitle title="about" />
                            <FooterLinkGroup col>
                                <FooterLink href="/about" target='_blank'>Firoz Autos</FooterLink>
                                <FooterLink href="/service" target='_blank'>Firoz Motors</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Follow us" />
                            <FooterLinkGroup col>
                                <FooterLink href="#">Facebook</FooterLink>
                                <FooterLink href="#">Instagram</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Legal" />
                            <FooterLinkGroup col>
                                <FooterLink href="/privacy-policy" target='_blank'>Privacy Policy</FooterLink>
                                <FooterLink href="/terms" target='_blank'>Terms &amp; Conditions</FooterLink>
                            </FooterLinkGroup>
                        </div>
                    </div>
                </div>
                <FooterDivider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright href="/" by="Firoz Autos" year={ new Date().getFullYear() } />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FooterIcon href="$" icon={ BsFacebook } />
                        <FooterIcon href="#" icon={ BsInstagram } />
                        <FooterIcon href="#" icon={ BsTwitter } />
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default FooterComponent;