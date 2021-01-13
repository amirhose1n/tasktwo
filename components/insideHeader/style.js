import Styled from 'styled-components';

const Style = Styled.div`
    padding: 10px;
    display:flex;
    flex-direction:row;
    width:100%;
    min-height:60px;
    background:#f7f7f7;
    align-items: center;
    justify-content:space-between;
    .back-btn{
        font-size: 20px;
    }
    position:fixed;
    z-index:100;

`;

export default Style;