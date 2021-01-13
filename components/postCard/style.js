import Styled from 'styled-components';

const Style = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-left:10px;
    color:#605f69;
    font-size:14px;
    white-space: nowrap;
    padding-top:20px;
    .ant-avatar{
        background:#f2f2f2;
        padding: 1px;
        img{
            border-radius:50%;
        }
    }
`;

export default Style;