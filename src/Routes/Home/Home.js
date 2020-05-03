import React, { Component } from 'react';
import styled from "styled-components";
import {placehold} from "./placehold";

//TO DO: need to figure out how to not show placehold elsewhere 

const TypeWriter = styled.h1`
position: relative;
top: 45vh;
font-size: 80px;
font-weight: 600;
width: 24em;
margin: 0 auto;
border-right: 2px solid rgba(255,255,255,.75);
text-align: center;
white-space: nowrap;
overflow: hidden;
transform: translateY(-50%); 
animation: typewriter 2s steps(20) 1s 1 normal both,
             blinkTextCursor 500ms steps(20) infinite normal;
`; 


export default class Home extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }

    showCanvas(){
        document.createElement("canvas");
        document.getElementsByTagName("canvas")[0].style.display = "block";
    }
    render() {
        return (
            <>
                {this.showCanvas()}
                <TypeWriter>Hello! I'm Jea</TypeWriter>
            </>
        );
    }
};
 