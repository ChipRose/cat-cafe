import React from "react";

import Button from "../../ui/button/button";

import {StyledForm, StyledInputBlock, StyledFieldset} from "./style";

function FormNew() {
  return (
    <StyledForm>
      <StyledInputBlock>
        <input type="file" accept="image/png, image/jpeg"></input>
        <input type="text" placeholder="Кличка кота"></input>
        <textarea placeholder="Напишите пару слов"></textarea>
      </StyledInputBlock>
      <StyledFieldset>
        <Button type="submit" disabled>{"Сохранить"}</Button>
        <Button type="reset">{"Отменить"}</Button>
      </StyledFieldset>
    </StyledForm>
  );
};

export default FormNew;