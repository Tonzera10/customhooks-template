
import { CardContainer, StyleImage } from "./style";

export const Card = ({text, backgroudColor, textColor, img}) => {
  return (
    <CardContainer backgroudColor={backgroudColor} textColor={textColor}>
   

      <p>{text}</p>
      <StyleImage src={img}/>
    </CardContainer>
  );
};