import styled, {css} from "styled-components";

const StyledForm = styled.section`
  width: 800px;
  min-height: 500px;
  padding: ${(props)=>props.theme.indent};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props)=>props.theme.bgColor.contrast};
  border-radius: ${(props)=>props.theme.borderRadius};
`;

const StyledFieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;
`;

const StyledInputBlock = styled(StyledFieldset)`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const StyledField = css`
  padding: 15px;
  box-sizing: border-box;
  font-size: ${(props)=>props.theme.mainText.size};
  color: ${(props)=>props.theme.txtColor.main};
  background: ${(props)=>props.theme.inputBgColor.main};
  border: none;
  border-radius: ${(props)=>props.theme.borderRadius};
`;

const StyledNameInput = styled.input.attrs((props)=>({
  type: props.type
}))`
  ${StyledField};
  width: 50%;
  min-height: 48px;
  margin-bottom: 20px;
`;

const StyledTextarea = styled.textarea`
  ${StyledField};
  width: 100%;
  min-height: 200px;
  resize: none;
`;

export {StyledForm, StyledInputBlock, StyledFieldset, StyledNameInput, StyledTextarea};