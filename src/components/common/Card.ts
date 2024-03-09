import styled from "styled-components";

export const CardStyle = styled.div`
background-color: #fff;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
margin: 10px;
`
export const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Display 3 cards in a row on desktop */
gap: 20px;

@media (max-media: 768px) {
    grid-template-columns: 1fr;
} 
`
export const ArrowIcon = styled.span`
  color: #E01D59;
  font-size: 20px;
`;

export const ArrowContainer = styled.div`
text-align: right;
margin: 20px 30px;
`;
