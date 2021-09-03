import React from 'react';

import '../styles/components/Footer.css';
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';
import jb from '../images/neonjuanbui.svg';

export default function Footer() {
  return (
    <div className="Footer">
      <p className="Footer-title">Plantana</p>
      <p className="Footer-copy">Todos los Izquierdos Reservados</p>
      <div className="social-media">
        <a
          className="footer-button instagram"
          href="https://www.instagram.com/el_guaso0n_bebe/"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <AiOutlineInstagram />
        </a>
        <a
          className="footer-button instagram"
          href="https://www.juanbuui.com/"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <img className="icon-media" src={jb} alt="" />
        </a>
        <a
          className="footer-button github"
          href="https://github.com/Buitrago1970"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <AiOutlineGithub />
        </a>
      </div>
    </div>
  );
}
