import logo from "../assets/images/logo.png";

const Header = () => {

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="flex items-center justify-between py-2 mb-4">
                <a href="/" className="flex items-center">
                    <img className="h-10" src={logo} alt="makemytrip" />
                </a>
                <button className="bg-gradient-to-r from-blue-300 to-blue-800 px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-lg text-center font-semibold cursor-pointer text-white text-xs sm:text-sm md:text-base">
                    Login
                </button>
            </header>
        </div>
    );
};

export default Header;