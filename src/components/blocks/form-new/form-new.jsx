import React, { useState } from "react";

import { useAddInfoStars } from '../../../context/stars-context';
import Button from "../../ui/button/button";

import { StyledForm, StyledInputBlock, StyledFieldset, StyledNameInput, StyledTextarea } from "./style";

function FormNew() {

  const addCard = useAddInfoStars();
  const [newStar, setStars] = useState('');

  return (
    <StyledForm>
      <StyledInputBlock>
        <input type="file" accept="image/png, image/jpeg"></input>
        <StyledNameInput
          type="text"
          placeholder="Кличка кота"
          value={newStar}
          onChange={evt => setStars(evt.target.value)}
          onKeyPress={evt => addCard(evt.key, newStar)}
        />
        <StyledTextarea placeholder="Напишите пару слов" />
      </StyledInputBlock>
      <StyledFieldset>
        <Button type="submit">{"Сохранить"}</Button>
        <Button type="reset">{"Отменить"}</Button>
      </StyledFieldset>
    </StyledForm>
  );
};

export default FormNew;