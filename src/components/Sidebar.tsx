// components/Sidebar.tsx
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Calculate from '@mui/icons-material/Calculate';
import indexRoutes from '../routes/';
import { Link } from 'react-router-dom';

interface SidebarProps {
  openNav: boolean;
}

const Sidebar = ({ openNav }: SidebarProps) => {
  return (
    openNav && (
      <aside className="bg-white-800 w-40 absolute mt-12 leading-8 transition-all duration-300 ease-in-out hover:w-2/12">
        <ul className="text-center space-y-1 w-full font-bold mt-16">
          {indexRoutes.map((r) => (
            <Link key={r.path} to={r.path}>
              <li className="bg-white-900 hover:bg-white text-custom-green cursor-pointer p-3">
                {r.name == 'Vendas' ? <PointOfSaleIcon className="mx-2" /> : <Calculate className="mx-2" />}
                {r.name}
              </li>
            </Link>
          ))}
        </ul>
      </aside>
    )
  );
};

export default Sidebar;
