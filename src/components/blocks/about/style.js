import styled from "styled-components";

const AboutContainer = styled.div`
  width: ${(props)=>props.theme.appWidth};
  padding: 77px ${(props)=>props.theme.indent};
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const AboutTextBLock = styled.div`
  margin-right: 56px;
  flex: 0 0 598px;
`;

const AboutInfo = styled.div`
  margin-bottom: 40px;
`;

const AboutText = styled.p`
  margin-top: 0;  
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const AboutWorkTime = styled.p`
  padding: 8px;
  margin: 0 0 20px;
  display: inline-block;
  border-radius: 8px;
  background: ${(props)=>props.theme.accentBgColor};
`;

const AboutImageBlock = styled.div`
  width: 446px;
  height: auto;
`;

const AboutImg = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

export {AboutContainer, AboutTextBLock, AboutInfo, AboutText, AboutWorkTime, AboutImageBlock, AboutImg};