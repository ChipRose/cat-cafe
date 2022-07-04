import React, { useState } from "react";


import InputImage from '../../ui/input-image/input-image';
import { useInfoStars } from '../../../context/stars-context';
import Button from "../../ui/button/button";

import {
  StyledFormWrapper,
  StyledForm,
  StyledInputBlock,
  StyledFieldset,
  StyledNameInput,
  NewFormTextarea,
  FormSubmitButton
} from "./style";

function FormNew({ isShow, onClose }) {
  const { addCard } = useInfoStars();
  const [starPhoto, setStarPhoto] = useState('');
  const [starName, setStarName] = useState('');
  const [aboutText, setAboutText] = useState('');
  const [dataPublish, setData] = useState(new Date());

  const isButtonEnable = starName && aboutText && starPhoto;

  return isShow ? (
    <StyledFormWrapper>
      <StyledForm
        onSubmit={evt => {
          evt.preventDefault();
          setData(new Date());
          addCard({ starName, aboutText, starPhoto, dataPublish, feature: 'empty' });
          setStarName('');
          setAboutText('');
          setStarPhoto('');
        }}
      >
        <StyledInputBlock>
          <InputImage photoPreview={starPhoto} setPhoto={setStarPhoto}>{'Загрузить фото'}</InputImage>
          <StyledNameInput
            type="text"
            placeholder="Кличка кота"
            name="name"
            value={starName}
            onChange={evt => setStarName(evt.target.value)}
          />
          <NewFormTextarea
            placeholder="Напишите пару слов"
            name="about"
            value={aboutText}
            onChange={evt => setAboutText(evt.target.value)}
          />
        </StyledInputBlock>
        <StyledFieldset>
          <FormSubmitButton
            type="submit"
            disabled={!isButtonEnable}
          >
            {"Сохранить"}
          </FormSubmitButton>
          <Button
            type="reset"
            onClick={onClose}
          >{"Отменить"}
          </Button>
        </StyledFieldset>
      </StyledForm>
    </StyledFormWrapper>
  ) : null;
};

export default FormNew;