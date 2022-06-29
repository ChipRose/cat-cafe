import styled from "styled-components";

import Title from "../../ui/title/title";
import Address from "../../ui/address/address";
import AboutImage from "../../../assets/about/in-a-chair.svg";

const AboutContainer = styled.div`
  width: 1140px;
  padding: 77px 20px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const AboutTextBLock = styled.div`
  margin-right: 56px;
  flex: 0 0 598px;
`;

const AboutTitle = styled(Title)`
  margin-bottom: 20px;
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
  background: rgba(255, 238, 173, 1);
`;

const AboutImageBlock = styled.div`
  width: 446px;
  height: auto;
`;

const AboutImg = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

function About() {
  return (
    <section>
      <AboutContainer>
        <AboutTextBLock>
          <AboutTitle level={1} size={44}>
            {"Первое в России котокафе"}
          </AboutTitle>
          <AboutInfo>
            <AboutText>
              Крупнейшее котокафе России, в котором живёт 50 кошек и котов,
              и каждый из них ищет новый дом. Животных можно гладить,
              фотографировать, играть с ними.
            </AboutText>
          </AboutInfo>
          <AboutWorkTime>
            Рабочее время с 8:00 до 23:00
            </AboutWorkTime>
          <Address />
        </AboutTextBLock>
        <AboutImageBlock>
          <AboutImg
            src={AboutImage}
            width="446"
            height="446"
            alt="Девушка в кресле с котом на спинке"
          />
        </AboutImageBlock>
      </AboutContainer>
    </section>
  );
}

export default About;
