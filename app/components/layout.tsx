import React, { useState } from "react";
import { AsideSearch } from "./asidesearch";
import NavBar from './navbar';

export function Layout({ children }: { children: React.ReactNode }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
      };

    return (
        <div className="layout">
            <header>
                <NavBar toggleSearch={toggleSearch} isSearchOpen={isSearchOpen}/>
            
            </header>
            <div className="page-content">
                
                <main>
                    {children}
                </main>
                {isSearchOpen && <AsideSearch />}
            </div>
            
            <footer>

            </footer>
        </div>
    )
}