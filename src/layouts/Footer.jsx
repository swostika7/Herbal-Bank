
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div>
         <div className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto p-8">
        <img src="assets/muktinath.png" className="h-14 w-auto"></img>
        <div className="flex flex-col space-y-2 py-6">
          <p>Basundhara, Kathmandu</p>
          <p>+977-01-4950097</p>
          <p className="hover:underline">info@muktinathitech.com.np</p>
        </div>
        <p className="border-b text-white py-3"></p>
        <div className="flex justify-between py-6 text-secondary">
          <p>© 2024 Muktinath Itech Limited. All rights reserved.</p>
          <div className="flex text-2xl space-x-4">
            <FaInstagram  className="hover:text-one cursor-pointer"/>
            <LiaFacebook className="hover:text-one cursor-pointer"/>
            <CiLinkedin  className="hover:text-one cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer