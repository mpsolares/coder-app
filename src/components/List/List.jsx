import React from 'react';
import { Link } from "react-router-dom";
import '../List/List.css'

export const List = () => {
  return (
    <div className="row px-4">
        <ul className="nav mb-4">
            <li className="nav-item">
              <Link className="nav-link active text-secondary text-list" to={"/"}>All Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-secondary text-list" to={"/women"}>Woman</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-secondary text-list" to={"/men"}>Men</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-secondary text-list" to={"#"}>Accesories</Link>
            </li>
          </ul>
    </div>
  )
}
