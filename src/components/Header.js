import React from "react";
/*
 This function returns a function.
2. This function returns a <header> element with a heading and a button.
3. The heading is a <h2> element. The heading text is "Shopster".
4. The button is a <button> element. The button has an onclick event listener.
5. That event listener calls the function that has been returned by the function.
6. That function sets the `isDarkMode` property to its opposite value.
7. That function is passed through to the <button> element as an onclick event listener.
8. That listener calls the `onDarkModeClick` callback with no arguments.
9. The `onDarkModeClick` callback is passed through to the Header component.
10. The Header component receives that function and stores it as a prop.
11. The `isDarkMode` prop is updated automatically based on the state of the app's root store.
*/
function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
