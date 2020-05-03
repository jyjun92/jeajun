import React, { Component } from 'react';
import styled from "styled-components";
import coverImg from "./katalk1.jpg";
import image1 from "./mykatalk1.png";
import image2 from "./mykatalk2.png";
import image3 from "./mykatalk3.png";
import image4 from "./mykatalk4.png";
import image5 from "./mykatalk5.png";


 

const KakaotalkLink = "https://www.kakaocorp.com/service/KakaoTalk";
const GitKakaotalk = "https://github.com/jyjun92/kakaotalk";

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
    /* :not(:last-child){ */
        margin-bottom:100px;
    justify-content: space-around;
   
`;

const Cover = styled.div`
    width:70%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    height: 100%;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 30%;
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
        &:hover{
            cursor: pointer;
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
    width: 30%;
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

class Kakaotalk extends Component {
    render() {
        return (
            <Container>
               <Content>
                    <Cover bgImage = {coverImg} />
                    <Data>
                        <Title>Kakaotalk Clone</Title>
                        <ItemContainer>
                            <Item>
                                Languages and Frameworks used: 
                                <Itemsm>
                                    <li>CSS</li>
                                    <li>HTML</li>
                                </Itemsm>
                            </Item>
                        </ItemContainer>
                        <ItemContainer> 
                            <Item>
                                Description:  
                                <Itemsm>
                                     Clone user interface of the most popular Korean messenger application.
                                </Itemsm>       
                            </Item>                      
                        </ItemContainer>
                        <ItemContainer>
                            <Item>
                                <span>
                                    <a href={GitKakaotalk} target = "_blank">
                                       <i className="fab fa-github fa-2x"></i>
                                    </a>
                                </span>
                            </Item>
                        </ItemContainer>
                        <ItemContainer>
                            <Item>
                                <a href={KakaotalkLink} target = "_blank" className = "link">
                                    Go to KakaoTalk Page
                                </a>
                            </Item>
                        </ItemContainer>
                    </Data>
               </Content>
               <Content>
                    <IndivImg bgImage = {image1}/>
                    <IndivImg bgImage = {image2}/>
                    <IndivImg bgImage = {image3}/>           
               </Content>
               <Content>
                    <IndivImg bgImage = {image4}/>
                    <IndivImg bgImage = {image5}/>           
               </Content>
            </Container> 
        );
    }
}
export default Kakaotalk;