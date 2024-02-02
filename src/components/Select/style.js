import styled from 'styled-components'
import CaretDown from 'assets/icon/arrowDown.svg'

const StyledSelect = styled.select`
    appearance: none;
    background-image: url(${CaretDown});
    background-repeat: no-repeat;
    background-position: right center;
    background-color: transparent;
    padding-right: 14px;
    border: none;
    font-size: ${({theme}) => theme.normal};
    color: ${({theme}) => theme.grayDark};

    ::-ms-expand {
        display: none;
    }
`;

export default StyledSelect;