
import Styled from 'styled-components';

const Style = Styled.div`
html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
    color: inherit;
    text-decoration: none;
}


*{
    box-sizing:border-box;
}

.empty-pages{
    display:flex;
    padding:10px;
    font-size:20px;
    font-weight:bold;
    align-items:center;
    justify-content:center;
}

`;

export default Style;