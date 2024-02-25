import src from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/'>
      <img src={src} alt='logotype' style={{ cursor: 'pointer' }} />{' '}
    </Link>
  );
}

export default Logo;
