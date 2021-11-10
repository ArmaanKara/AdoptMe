import { createContext } from "react";
//Cretes theme properites as a global state; rather than prop drilling.Applying it to only buttons

const ThemeContext = createContext(["red", () => {}]);

export default ThemeContext;
