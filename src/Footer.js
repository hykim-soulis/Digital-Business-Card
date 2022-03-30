import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faBandAid,
  faCertificate,
  faBaseball,
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className="footer">
      <button className="icons">
        <FontAwesomeIcon icon={faCoffee} />
      </button>
      <button className="icons">
        <FontAwesomeIcon icon={faBandAid} />
      </button>
      <button className="icons">
        <FontAwesomeIcon icon={faCertificate} />
      </button>
      <button className="icons">
        <FontAwesomeIcon icon={faBaseball} />
      </button>
    </div>
  );
}
