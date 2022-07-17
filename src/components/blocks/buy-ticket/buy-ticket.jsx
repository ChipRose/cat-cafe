import React from 'react';

import catImg from '../../../assets/buy-ticket/cat.svg';
import BuyForm from '../../ui/buy-form/buy-form';
import Title from '../../ui/title/title';

import {
  StyledBuyTicket,
  StyledBuyTicketWrapper,
  StyledBuyTicketFormWrapper,
  StyledBuyTicketFormBlock,
  StyledBuyTicketImageBlock,
} from './style.js';

function BuyTicket () {

return (
  <StyledBuyTicket>
    <StyledBuyTicketWrapper>
      <Title  level={2} $size={44} $margin={24}>
        {'Купить билет'}
      </Title>
      <StyledBuyTicketFormWrapper>
        <StyledBuyTicketFormBlock>
          <BuyForm/>
        </StyledBuyTicketFormBlock>
        <StyledBuyTicketImageBlock>
          <img src={catImg} alt={"Кот в цветочном горшке"}/>
        </StyledBuyTicketImageBlock>
      </StyledBuyTicketFormWrapper>
    </StyledBuyTicketWrapper>
  </StyledBuyTicket>
);
}
export default BuyTicket;