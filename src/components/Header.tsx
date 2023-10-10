import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Logo from '../assets/images/logo.png';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Header = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <>
      <header className="w-full absolute z-10">
        <div className="mx-auto flex justify-start items-center sm:px-16 px-6 py-4 bg-white">
          <button className="mx-2" onClick={() => setOpenNav(!openNav)}>
            <DensityMediumIcon className="text-custom-green" />
          </button>
          <img src={Logo} alt="Logo" />
          <div className="mx-auto flex justify-center items-center sm:px-16 px-6 py-4 bg-white">
            <h1 className="text-custom-green font-bold text-4xl mr-3">VENDAS</h1>
          </div>
        </div>
      </header>
      <Sidebar openNav={openNav} />
    </>
  );
};

export default Header;
