import TextLaundry from "../components/TextLaundry";
import NumberContextProvider from "../store/number-context";

export default function Laundry(){
    return (
        <NumberContextProvider>
            <TextLaundry></TextLaundry>
        </NumberContextProvider>
    );
}