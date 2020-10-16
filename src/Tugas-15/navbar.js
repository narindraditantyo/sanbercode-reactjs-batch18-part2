import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {};
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tugas9">Tugas-9</Link>
                    </li>
                    <li>
                        <Link to="/tugas10">Tugas-10</Link>
                    </li>
                    <li>
                        <Link to="/tugas11">Tugas-11 </Link>
                    </li>
                    <li>
                        <Link to="/tugas12">Tugas-12 </Link>
                    </li>
                    <li>
                        <Link to="/tugas13">Tugas-13</Link>
                    </li>
                    <li>
                        <Link to="/tugas14">Tugas-14</Link>
                    </li>

                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </ul>
            </div>
        );
    }
}
export default Navbar;