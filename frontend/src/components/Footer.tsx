import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-12">
      <div>
        <Link to="/" className="flex justify-center items-center gap-2">
          <img
            src="/logoFooter.png"
            alt="Ever After Elegance Logo"
            width="70"
            height="60"
          />
          <h2 className="text-white font-semibold font-poppins mb-2">
            Ever After Elegance
          </h2>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
