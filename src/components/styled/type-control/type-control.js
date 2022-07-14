import styled from 'styled-components';

const TypeControl = styled.span`
min-height: 18px;
padding-left: 26px;
position: relative;
display: block;
&::before{
  content: "";
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid ${(props)=>props.theme.buttonColor.default};
  border-radius: 50%;
}
&::after{
  content: "";
  width: 12px;
  height: 12px;
  position: absolute;
  left: 3px;
  top: 50%;
  display: ${({$checked})=> $checked ? 'block':'none'};
  transform: translateY(-50%);
  border-radius: 50%;
  background:  ${(props)=>props.theme.buttonColor.default};
}
`;

export default TypeControl;