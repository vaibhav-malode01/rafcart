import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

export default function Logo()
{
    return(
    <div className="flex justify-center text-2xl gap-x-4 ml-24 mt-5">
    <FaFacebook /> <FaTwitter /> <IoLogoInstagram />
    </div>
    )
}