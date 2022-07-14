import styled from 'styled-components';

import Title from '../../ui/title/title.jsx';

const StyledBuyTicket = styled.section`
  background-image: url("${process.env.PUBLIC_URL}/img/bg/dark-shape.svg");
  background-position: -261px calc(100% + 202px);
  background-repeat: no-repeat;
`;

const StyledBuyTicketWrapper = styled.div`
  width: ${(props) => props.theme.appWidth};
  padding: 100px  ${(props) => props.theme.indent};
  margin: 0 auto;
  box-sizing: border-box;
`;

const StyledBuyTicketFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBuyTicketFormBlock = styled.div`
  margin-right: 113px;
  flex: 0 0 540px;
`;

const StyledBuyTicketImageBlock = styled.div`
  flex: 0 0 447px;
  img{
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export {
  StyledBuyTicket,
  StyledBuyTicketWrapper,
  StyledBuyTicketFormWrapper,
  StyledBuyTicketFormBlock,
  StyledBuyTicketImageBlock,
};