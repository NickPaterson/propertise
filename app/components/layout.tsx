import React from "react";
import { AsideSearch } from "./asidesearch";

export function Layout({ children }: { children: React.ReactNode }) {
    const handleClick = () => {
        document.body.classList.toggle("dark");
    }

    return (
        <div className="layout">
            <header>
                <nav>
                    <ul>
                        <li>Propertise</li>
                        <li>Buy</li>
                        <li>Rent</li>
                        <li>Agenices</li>
                    </ul>
                </nav>
                <div className="search-bar">
                    <input type="text" placeholder="Search" ></input>
                </div>
                <div 
                    id="themeToggler" 
                    className="theme-toggler" 
                    onClick={handleClick} 
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          handleClick();
                        }
                    }}
                    role="button" 
                    tabIndex={0}
                ></div>
            </header>
            <div className="page-content">
                <main>
                    {children}
                </main>
                <AsideSearch />  
            </div>
            
            <footer>

            </footer>
        </div>
    )
}