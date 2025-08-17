import { CurrencyIcon } from "lucide-react";
import { useContext,createContext } from "react";

export const currencyContext = createContext({
    currencyIcon : ""
});