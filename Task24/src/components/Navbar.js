import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="logo bold">Shoe Collection</div>
            <div className="links">
                <a href="./">Home</a>
                <a href="./">Categories</a>
                <a href="./">About Us</a>
            </div>
            <div className="login bold">Login</div>
        </nav>
    );
};

export default Navbar;
