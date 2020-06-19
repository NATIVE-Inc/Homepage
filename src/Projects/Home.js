import React from "react";
import {
  Link
} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.css';
// {/* Hompage which contains the link to all the projects I am working on */}
export default function Home() {
    return (
        <div className="main_container">
          <img className="brand" src={require('./logo.svg')} alt="native-logo" />
          <ul className="row">
            <li>
              <Link className="btn  btn-outline-dark" to="/nativeschools">Schools</Link>
            </li>
            <li>
              <Link className="btn  btn-outline-dark" to="/writerapp">Writer</Link>
            </li>
            <li>
              <Link className="btn  btn-outline-dark" to="/counter">Counter</Link>
            </li>
            <li>
              <Link className="btn  btn-outline-dark" to="/ads">Ads</Link>
            </li>
            <li>
              <Link className="btn  btn-outline-dark" to="/kanban">Kanban</Link>
            </li>
            <li>
              <Link className="btn  btn-outline-dark" to="/finder">Finder</Link>
            </li>
          </ul>
          <footer>
            <Link className="footer" to="/sponsors"><p>Sponsored by</p></Link>
          </footer>
        </div>
  );
}
