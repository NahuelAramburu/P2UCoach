import { cardExpData } from "./CardExpData";
import CardExp from "./CardExp";
import "./CardExp.css";

export default function CardExpRow() {
  return (
    <div className="cardrow-container row">
      {cardExpData.map(({ ImgSrc, CrdTitle, CrdText }) => (
        <CardExp ImgSrc={ImgSrc} CrdTitle={CrdTitle} CrdText={CrdText} />
      ))}
    </div>
  );
}