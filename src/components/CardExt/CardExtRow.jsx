import { cardExtData } from "./CardExtData";
import CardExt from "./CardExt";
import "./CardExt.css";

export default function CardRow() {
  return (
    <div className="cardrow-container row">
      {cardExtData.map(({ ImgSrc, CrdTitle, CrdText }) => (
        <CardExt ImgSrc={ImgSrc} CrdTitle={CrdTitle} CrdText={CrdText} />
      ))}
    </div>
  );
}
