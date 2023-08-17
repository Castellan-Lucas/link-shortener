import React from "react";
import { BsInstagram } from "react-icons/bs";
import {AiFillFacebook} from 'react-icons/ai'
import '../Rodape/Rodape.sass'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h2>Shortly</h2>
      </div>
      <div className="footer-section">
        <h3>Features</h3>
        <a>Encurtador de links</a>
        <a>Links de marca</a>
        <a>Análise</a>
      </div>
      <div className="footer-section">
        <h3>Resources</h3>
        <a>Blog</a>
        <a>Desenvolvedores</a>
        <a>Suporte</a>
      </div>
      <div className="footer-section">
        <h3>Company</h3>
        <a>Sobre</a>
        <a>Nosso time</a>
        <a>Carreiras</a>
        <a>Contato</a>
      </div>
    </footer>
  );
};

export default Footer;
