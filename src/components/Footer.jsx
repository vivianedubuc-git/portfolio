import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <a href="mailto:vivianedubuc@outlook.com"><IoMdMail /></a>
            <a href="https://linkedin.com/in/vivianedubuc" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/vivianedubuc-git" target="_blank"><AiOutlineGithub /></a>
            <a href="https://artstation.com/vivianedubuc" target="_blank"><FaArtstation /></a>
        </footer>
    );
};

export default Footer;