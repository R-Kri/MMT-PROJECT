import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Plane, Hotel, Map } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Travel Explorer</h3>
                        <p className="text-sm mb-4">Your trusted partner for memorable travel experiences. We specialize in flights, hotels, and curated tour packages worldwide.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Plane className="w-4 h-4" /> Flight Booking
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Hotel className="w-4 h-4" /> Hotel Reservations
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Map className="w-4 h-4" /> Tour Packages
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span>+91 78572 27384</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:info@travelexplorer.com" className="hover:text-white transition-colors">
                                    info@travelexplorer.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>123 Travel Street, Delhi, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Travel Explorer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;