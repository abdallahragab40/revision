import { createContext } from "react";
import Layout from "./Layout";

const user = { name: "Ahmed Ali" };
const theme = { name: "Black-Theme" };

export const UserContext = createContext();
export const ThemeContext = createContext();

function Page() {
  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={theme}>
        <Layout />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default Page;
