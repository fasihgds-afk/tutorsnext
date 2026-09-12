import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Redirects URLs to lowercase to maintain consistent URL formatting
 */
const LowercaseRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    const lowercasePath = pathname.toLowerCase();

    // If the path has any uppercase letters, redirect to lowercase version
    if (pathname !== lowercasePath) {
      navigate(lowercasePath + search + hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default LowercaseRedirect;
