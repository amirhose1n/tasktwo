import Styled from 'styled-components';

const Style = Styled.div`
    .header{
        background-color:#f7f7f7;
        padding:20px 10px 0px 10px;
        .search-box{
            .ant-select{
                width:80%;
            }
            .ant-btn{
                width:20%;
            }
        }
        .header-box{
        display:flex;
        justify-content:space-between;
        align-items:center;
        background-color:#f7f7f7;
        .action-box{
            display:flex;
            flex-direction:row;
            div{
                span{
                    font-size:22px;
                    color:#3d3d44;
                }
                padding-left:15px;
            }
        }
        .title-box{
            font-size:24px;
            color:#3d3d44;
            padding-bottom:2px;
        }}
    }
    .dot-box{
        display:inline-block;
        position:absolute;
        right:-16px;
    }
    
    .tab-header{
        background-color:#f7f7f7;
        padding: 6px 30px;
        .tab-header-links{
            padding: 0px 10px;
            display: flex;
            justify-content: space-between;
            span{
                color:#9d9ca1;
                font-size:18px;
                font-weight:bold;
                position:relative;
            }
        }
    }
    .tab-footer{
        position:fixed;
        bottom:0px;
        padding: 6px 50px;
        background-color:#f7f7f7;
        width:100%;
        border-top: 1px solid #dcdcdc;
        .tab-footer-links{
            padding: 0px 10px;
            min-height: 60px;
            display: flex;
            justify-content: space-between;
            span{
                font-size:22px;
            }
        }
    }
`;

export default Style;