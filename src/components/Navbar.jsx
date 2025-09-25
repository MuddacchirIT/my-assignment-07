import { MdOutlineMenu } from "react-icons/md";
import Container from "./Container";
export default function Navbar() {
  return (
    <div className=" bg-[#FFFFFF] shadow-md border-b-[0.5px] border-gray-300">
      <Container>
        <nav className="py-4 flex justify-between items-center">
          <h1 className="md:text-2xl text-xl font-bold">CS — Ticket System</h1>
          <div className="md:flex hidden items-center text-lg gap-7">
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
            <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg hover:cursor-pointer">
              + New Ticket
            </button>
          </div>
          <div className="block md:hidden z-20 relative">
            <MdOutlineMenu
              size={28}
              className="text-gray-800 cursor-pointer relative z-20"
            />
          </div>
        </nav>
      </Container>
    </div>
  );
}
