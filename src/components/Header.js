import headerImage from '../images/header.png';
import '../styles/components/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="./">
        <img className="header__image" src={headerImage} alt="Rick & Morty" />
      </Link>
      <h1 className="header__title">Rick & Morty character finder</h1>
    </header>
  );
}

export default Header;
