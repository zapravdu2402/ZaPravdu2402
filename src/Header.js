import React from "react";

const Header = (props) => {
  return (
    <header>
      <nav className="bg-cyan-400">
        <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <span className="flex h-8 w-auto">🇺🇦</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {};

export default Header;
