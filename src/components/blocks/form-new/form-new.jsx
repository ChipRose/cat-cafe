import React, { useState } from "react";

import clip from "../../../assets/icons/clip.svg";
import doc from "../../../assets/icons/doc.svg";
import { useInfoStars } from '../../../context/stars-context';
import Button from "../../ui/button/button";

import {
  StyledFormWrapper, 
  StyledForm, 
  StyledInputBlock,
  StyledFieldset, 
  NewFormInputFileWrapper,
  StyledInputFile, 
  StyledInputFileText,
  NewFormLabel, 
  StyledPreview,
  StyledNameInput, 
  NewFormTextarea, 
  FormSubmitButton
} from "./style";

function FormNew({ isShow, onClose }) {
  const { addCard } = useInfoStars();
  const [starPhoto, setStarPhoto] = useState('');
  const [starName, setStarName] = useState('');
  const [aboutText, setAboutText] = useState('');

  const isButtonEnable = starName && aboutText;

  return isShow ? (
    <StyledFormWrapper>
      <StyledForm
        onSubmit={evt => {
          evt.preventDefault();
          addCard({ starName, aboutText, starPhoto })
          setStarName('');
          setAboutText('');
        }}
      >
        <StyledInputBlock>
          <NewFormInputFileWrapper>
            <NewFormLabel>
              <img
                src={clip}
                width="20"
              />
              <StyledInputFileText>Загрузить фото</StyledInputFileText>
              <StyledInputFile
                type="file"
                accept="image/png, image/jpeg"
                name="image"
                valuedefault={starPhoto}
                onChange={(evt) => {
                  const file = evt.target.files[0];
                  const reader = new FileReader();
                  reader.onload = () => {
                    setStarPhoto(reader.result);
                  };
                  if (file) {
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </NewFormLabel>
            <StyledPreview>
              <img src={starPhoto||doc}></img>
            </StyledPreview>
          </NewFormInputFileWrapper>
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