import styled from "styled-components";

const StyledForm = styled.form.attrs((props)=>({
  method: "post",
  enctype: "multipart/form-data",
}))`
  width: 800px;
  min-height: 500px;
  padding: ${(props)=>props.theme.indent};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props)=>props.theme.contrastBgColor};
  border-radius: ${(props)=>props.theme.borderRadius};
`;

const StyledFieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;
`;

const StyledInputBlock = styled(StyledFieldset)`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export {StyledForm, StyledInputBlock, StyledFieldset};