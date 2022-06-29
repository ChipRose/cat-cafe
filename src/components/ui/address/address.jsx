import styled from "styled-components";

import AddressIcn from "../../../assets/icons/map-flag.svg";

const StyledAddress = styled.address`
  display: flex;
  font-style: normal;
`;

const AddressImageBlock = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const AddressIcon = styled.img`
  max-width: 100%;
`;

function Address() {
  return (
    <StyledAddress>
      <AddressImageBlock>
        <AddressIcon
          width="16"
          height="17"
          src={AddressIcn}
          alt="Указаталь адреса"
        />
      </AddressImageBlock>
      <span>
        Санкт-Петербург, набережная реки Карповки, дом 5, литера П
      </span>
    </StyledAddress>
  );
}

export default Address;
