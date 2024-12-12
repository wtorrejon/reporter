import React from "react";

interface HeaderProps {
    title: string;
}

///explicame que es esto
const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="container mx-auto ">
                <h1>CABIESES APP</h1>
        </header>
    );
};  
export default Header;
