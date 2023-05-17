import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="h-[5rem] w-full bg-header">
            <div className="flex items-center justify-between text-link">
                <div className="p-5 ml-24">
                    <div>
                        <h1 className="text-3xl font-medium">
                            <Link to='/'>HarmonyHub</Link>
                        </h1>
                    </div>
                </div>
                <div className="text-xl mr-24">
                    <ul className="flex gap-10">
                        <li className="hover:underline">
                            <Link to='/harmonyhub'>What is HarmonyHub?</Link>
                        </li>
                        <li className="hover:underline">
                            <a target="blank" href="https://github.com/mehmetenfa/harmony-hub">Source Code</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;