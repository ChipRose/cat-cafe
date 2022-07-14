import styled, {css} from 'styled-components';

import { Ul } from '../../styled';

const StyledForm = styled.form`
  width: 540px;
  min-height: 511px;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: ${(props)=>props.theme.bgColor.contrast};
  border-radius: ${(props)=>props.theme.borderRadius.form};
`;

const FieldsWrapper = styled.div`
  flex: 1 1 auto;
  margin-bottom: 40px;
`;

const StyledLegend = styled.legend`
  ${(props)=> props.$small
  ? css`
    font-size: ${(props)=>props.theme.formLegendText.small.size};
    line-height: ${(props)=>props.theme.formLegendText.small.line};
    `
  : css `
    font-weight: ${(props)=>props.theme.formLegendText.weight};
  `}
  margin-bottom: ${(props)=>props.$margin||0}px;
`;

const StyledDurationList = styled(Ul)`
  display: flex;
  li {
    margin-right: 12px;
  }
  li:last-child {
    margin-right: 0;
  }
`;

const StyledPrice = styled.span`
  font-size: ${(props)=>props.theme.priceText.size};
  line-height: ${(props)=>props.theme.priceText.line};
  font-weight: ${(props)=>props.theme.priceText.weight};
`;

export {
  StyledForm,
  FieldsWrapper,
  StyledLegend,
  StyledDurationList,
  StyledPrice,
};