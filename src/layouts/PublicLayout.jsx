import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/common/Footer';
import Footer1 from '../components/common/Footer1';
import { useHomeContext } from '../hooks/useHomeContext';

const PublicLayout = () => {
  const { isHome1 } = useHomeContext();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer: Home Footer for Home, Home-1 Footer for Home-1 */}
      {isHome1 ? <Footer1 /> : <Footer />}
    </div>
  );
};

export default PublicLayout;

