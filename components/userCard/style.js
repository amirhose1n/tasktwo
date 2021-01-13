import Styled from 'styled-components';

const Style = Styled.div`
    .user-card{
    display:flex;
    flex-direction:row;
    color:#605f69;
    font-size:14px;
    white-space: nowrap;
    padding-top:10px;
    padding-bottom:10px;
    .avatar-box{
        position:relative;
        .bordered-dot{
            position:absolute;
            bottom:-5px;
            right:1px;
            span{
                border:2px solid white;
                height: 14px;
                width: 14px;
            }
        }
    }
    .title-box{
        padding-lefT:10px;
        display:flex;
        flex-direction:column;
        font-weight:bold;
        .first-name{
            color:#5f5f67;
            font-size:18px;
        }

        .last-name{
            color:#c3c3c8;
            font-size:18px;
        }
    }
}
`;

export default Style;