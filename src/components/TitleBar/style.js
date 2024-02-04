import StyledIcon from 'components/Icon/style';
import styled from 'styled-components'

const Title = styled.div`
    display: grid;
`;

const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${StyledIcon} {
        cursor: pointer;
    }
`;

const StyledTitleBar = styled.div`
    display: grid;
    grid-template-columns: 64px 1fr 112px;
    padding: 30px;
    max-height: 110px;
    border-bottom: 1px solid ${({theme}) => theme.gray4};
`;

export default StyledTitleBar;
export { Title, Actions};