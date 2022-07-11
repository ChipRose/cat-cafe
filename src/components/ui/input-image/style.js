import styled from 'styled-components';

const StyledInputFileWrapper = styled.div`
  display: flex;
`;

const InputFileWrapper = styled(StyledInputFileWrapper)`
  margin-bottom: 20px;
`;

const StyledInputFile = styled.input`
  outline:0;
  opacity:0;
  pointer-events:none;
  user-select:none;
`;

const StyledInputFileLabel = styled.label`
  width: 160px;
  height: 140px;
  display: block;
  padding: ${(props) => props.theme.indent};
  box-sizing: border-box;
  align-self: center;
  font-size: 14px;
  text-align:center;
  color: grey;
  background: ${(props) => props.theme.inputBgColor.main};
  border-radius: ${(props) => props.theme.borderRadius.main};
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    color: rgba(0,0,0,1);
    box-shadow: 0 0 0 2px ${(props) => props.theme.outline.solid}
  }
`;

const InputFileLabel = styled(StyledInputFileLabel)`
  margin-right: 20px;
`;

const StyledInputFileText = styled.p`
  margin: 0;
`;

const StyledPreview = styled.div`
  display:flex;
  justify-content: center;
  align-item: center;
  border-radius:  ${(props) => props.theme.borderRadius};
  overflow: hidden;
  img {
    width: 160px;
    height: 140px;
    object-fit: cover;
  }
`;

export {
  InputFileWrapper,
  StyledInputFile,
  InputFileLabel,
  StyledInputFileText,
  StyledPreview,
};
