import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";


const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color: inherit;
    }
    
    *{
        box-sizing: border-box; 
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px; 
        background-color: rgba(250,250,250,1);
        color:black;
        padding-top: 50px;
    }

    canvas{
        width: 100vw;
        height: 100vh;
        margin: auto;
        position: absolute;
        top:0;
        z-index: -1;
    }

    @keyframes typewriter{
    from{width: 0;}
    to{width: 5.9em;}
    }
    @keyframes blinkTextCursor{
    from{border-right-color: black;
        border-width:3px;}
    to{border-right-color: transparent;
        border-width:3px;}
    }


`;

export default globalStyles;