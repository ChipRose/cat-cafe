import React, { useState } from "react";

import { useInfoStars } from '../../../context/stars-context';
import Button from "../../ui/button/button";

import { StyledFormWrapper, StyledForm, StyledInputBlock, StyledFieldset, StyledNameInput, StyledTextarea } from "./style";

function FormNew({ isShow }) {

  const { addCard } = useInfoStars();
  const [starName, setStarName] = useState('');
  const [aboutText, setAboutText] = useState('');

  const isButtonEnable = starName && aboutText;

  return isShow ? (
    <StyledFormWrapper>
      <StyledForm
        onSubmit={evt => {
          evt.preventDefault();
          addCard({ starName, aboutText })
          setStarName('');
          setAboutText('');
        }}
      >
        <StyledInputBlock>
          <input type="file" accept="image/png, image/jpeg"></input>
          <StyledNameInput
            type="text"
            placeholder="Кличка кота"
            name="name"
            value={starName}
            onChange={evt => setStarName(evt.target.value)}
          />
          <StyledTextarea
            placeholder="Напишите пару слов"
            name="about"
            value={aboutText}
            onChange={evt => setAboutText(evt.target.value)}
          />
        </StyledInputBlock>
        <StyledFieldset>
          <Button
            type="submit"
            disabled={!isButtonEnable}
          >
            {"Сохранить"}
          </Button>
          <Button type="reset">{"Отменить"}</Button>
        </StyledFieldset>
      </StyledForm>
    </StyledFormWrapper>
  ) : null;
};

export default FormNew;