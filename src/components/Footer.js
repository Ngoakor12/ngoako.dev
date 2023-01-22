import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="creator">&copy; {currentYear} Ngoako Ramokgopa</p>
    </footer>
  );
}

export default Footer;
