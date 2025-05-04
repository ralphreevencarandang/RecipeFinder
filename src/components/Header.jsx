import { Link } from "react-router";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeProvider";
const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <section className="shadow-sm">
      <div className={` navbar max-container padding-x `}>
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost text-xl px-2 bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent"
          >
            Dishcovery
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent font-kanit">
                  Categories
                </summary>
                <ul className=" rounded-t-none p-2">
                  <li>
                    <Link
                      to="/category"
                      className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent font-kanit"
                    >
                      Category
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/country"
                      className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent font-kanit"
                    >
                      Country
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
