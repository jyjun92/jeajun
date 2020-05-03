import React, { Component } from 'react';
import styled from "styled-components";
import coverImg from "./paintcover.png";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";



const GitPaint = "https://github.com/jyjun92/paintjs";
const PaintLink ="https://jyjun92.github.io/paintjs/"; 

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
    margin-bottom:100px;

    justify-content: space-around;
   
`;

const Cover = styled.div`
    width:40%;
    background-image: url(${props => props.bgImage});
    background-position: left top; 
    background-repeat: no-repeat;
    background-size: auto 100%;
    height: 100%;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 60%;
    margin-left: 10px;
    color:#3C1F1D;
    background-color:transparent;
`;

const Title = styled.h3`
    font-size: 50px;
    margin: 20px 20px;
`;

const ItemContainer = styled.div`
    margin: 20px 20px;
`;

const Item = styled.span`
    font-size: 17px;
    
    /* opacity: 0.7; */
    line-height:1.3;
    width: 60%;
    span{ 
        p{
            display:inline-block ;
            font-size:8px;
        }
        &:hover{
            cursor: pointer;
            /* p{
                display: inline-block;
            } */
        }
    }
    .link{
        color: #0D66D6;
    }
`;

const Itemsm = styled.div`
    margin: 10px 0;
    font-size: 15px;
    opacity: 0.8;
    line-height: 1.3;
    width: 100%;    
`;

const IndivImg = styled.div`
    width: 90%;
    background-image: url(${props => props.bgImage});
    background-position: center top; 
    background-repeat: no-repeat;
    background-size: auto 100%;
   
    height: 100%; 
    border-radius: 5px;
    :not(:last-child){
        margin-right: 5px;
    }
`;

const Divider = styled.span`
    margin: 0 10px;
`;

class PaintingApp extends Component {
    render() {
        return (
            <Container>
            <Content>
                 <Cover bgImage = {coverImg} />
                 <Data>
                     <Title>Paint Canvas</Title>
                     <ItemContainer>
                         <Item>
                             Languages and Frameworks used: 
                             <Itemsm>
                                 <li>Javascript</li>
                                 <li>CSS</li>
                                 <li>HTML</li>
                             </Itemsm>
                         </Item>
                     </ItemContainer>
                     <ItemContainer> 
                         <Item>
                             Description:  
                             <Itemsm>
                                  Painting application with basic functionalities where user can select 
                                  colors, change brush size, and save.
                             </Itemsm>       
                         </Item>                      
                     </ItemContainer>
                     <ItemContainer>
                         <Item>
                             <span>
                             {/* <a class="ui-tooltip" title="tool tip text goes here"><span style="cursor: help;">Text
                              that you want to show the tooltip when hovered over.</span></a> */}
                                 <a href={GitPaint} target = "_blank"> 
                                   <i className="fab fa-github fa-2x"></i>   
                                 
                                 </a>
                             </span>
                             <Divider />
                             <span>
                                 <a href={PaintLink} target = "_blank">
                                 <i class="far fa-eye fa-2x"></i>
                                  
                                 </a>
                             </span>
                         </Item>
                     </ItemContainer>                 
                 </Data>
            </Content>
            <Content>
                 <IndivImg bgImage = {image1}/>                   
            </Content>
            <Content>
                <IndivImg bgImage = {image2}/>
            </Content>
            <Content>
                <IndivImg bgImage = {image3} />
            </Content>
         </Container> 
        );
    }
}

export default PaintingApp;