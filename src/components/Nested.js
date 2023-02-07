import Card from "./Card";

export default function Nested({text, number, number1}){
    return (
        <Card>
         {text} {number} {number1}
        </Card>
    );
}