import Container from "./Container";
export default function Navbar() {
  return (
    <div className=" bg-[#FFFFFF] shadow-md border-b-[0.5px] border-gray-300">
      <Container>
        <nav className="py-4 flex-1 md:flex justify-between items-center">
          <h1 className="text-2xl font-semibold md:font-bold">
            CS — Ticket System
          </h1>
          <div className="flex justify-between md:flex items-center gap-3 md:gap-8 md:text-lg text-base py-2 md:py-0">
            <a href="#" className="text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-800">
              FAQ
            </a>
            <a href="#" className="text-gray-800">
              Changelog
            </a>

            <a href="#" className="text-gray-800">
              Blog
            </a>
            <a href="#" className="text-gray-800">
              Download
            </a>
            <a href="#" className="text-gray-800">
              Contact
            </a>
            <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white md:px-6 px-4 py-2 rounded-lg hover:cursor-pointer text-base md:text-xl">
              + New Ticket
            </button>
          </div>
        </nav>
      </Container>
    </div>
  );
}
