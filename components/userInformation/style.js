import Styled from 'styled-components';

const Style = Styled.div`
  padding:10px;
  padding-top:60px;
  display:flex;
  flex-direction:column;
  .img-box{
      width:100%;
      display:flex;
      flex-direction:column;
      align-items:center;
      span{
          font-size:18px;
      }
    }
    div{
        padding-top:20px;
    }
`;

export default Style;