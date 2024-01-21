import React from "react";
import { AsideSearch } from "./asidesearch";
export function Layout({ children }: { children: React.ReactNode }) {
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