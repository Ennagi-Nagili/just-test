import './Button.scss'
import Bistro from './like_fill.svg'

const Navbar = () => {
    return (
        <div className="container3">
        <a className="logo">
          <img  className="Bistro" />
          <h2 className="Bistro">Bistro Bliss</h2>
        </a>
        <ul className="list1">
          <li><a href="main.html" className="link">Home</a></li>
          <li><a href="about.html" className="link">About</a></li>
          <li><a href="manu.html" className="link">Menu</a></li>
          <li><a href="pages.html" className="link">Pages</a></li>
          <li><a href="contact.html" className="link">Contact</a></li>
          <button className="button0">
            <a href="#" className="button0">Book A Table</a>
          </button>
        </ul>
      </div>
    );
};
export default Navbar ;