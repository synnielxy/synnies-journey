import { useState } from "react";
import { Link } from "react-router-dom";
import { usePlay } from "../contexts/Play";

export const Nav = () => {
  const { play } = usePlay();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      {/* 
      section === 1 || 3 : textSections[0]
      section === 6 || 8 : textSections[1]
      section === 11 || 13 : textSections[2]
      section === 16 || 18 : textSections[3]
      section === 21 || 23 : textSections[4]
      section === 26 || 28 : textSections[5]
      section === 31 || 33 : textSections[6]
      section === 36 || 38 : textSections[7]
                             section / step
      */}
      {play && (
        <div className="hamburger-menu-container">
          <label htmlFor="checkbox" className="hamburger-menu">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
          </label>
          <aside className="sidebar">
            <nav>
              <div
                className="sidebar-item"
                onClick={() => {
                  setIsChecked(false);
                }}
              >
                <Link to="/">Home</Link>
              </div>
              <div
                className="sidebar-item"
                onClick={() => {
                  setIsChecked(false);
                }}
              >
                <Link to="/about">About</Link>
              </div>
              <div
                className="sidebar-item"
                onClick={() => {
                  setIsChecked(false);
                }}
              >
                <Link to="/dev">Dev</Link>
              </div>
              <div
                className="sidebar-item"
                onClick={() => {
                  setIsChecked(false);
                }}
              >
                <Link to="/contact">Contact</Link>
              </div>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
};
