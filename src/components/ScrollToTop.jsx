import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Page ke top par scroll karega smoothly
    window.scrollTo(0, 0);
  }, [pathname]); // Jab bhi pathname (URL) badlega, ye run hoga

  return null;
};

export default ScrollToTop;