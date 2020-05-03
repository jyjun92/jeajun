import React, { Component } from 'react';
import styled from "styled-components";
import coverImg from "./indeedjob.png";
import image1 from "./initial.png";
import image2 from "./filedownloaded.png";
import image3 from "./output.png";

const GitLinkedin = "https://github.com/jyjun92/LinkedinScrapper";
const GitIndeed = "https://github.com/jyjun92/Data-Scraping";


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
    width:70%;
    background-image: url(${props => props.bgImage});
    background-position: left top; 
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

class JobScrapper extends Component {
    render() {
        return (
            <Container>
            <Content>
                 <Cover bgImage = {coverImg} />
                 <Data>
                     <Title>Job Scraper</Title>
                     <ItemContainer>
                         <Item>
                             Languages and Frameworks used: 
                             <Itemsm>
                                 <li>Go</li>
                                 <li>HTML</li>
                             </Itemsm>
                         </Item>
                     </ItemContainer>
                     <ItemContainer> 
                         <Item>
                             Description:  
                             <Itemsm>
                                  Web scraper from LinkedIn Job and Indeed Job sites using Go. 
                                  When user enters a job keyword and clicks 'Search', jobs posted on the sites
                                  related to the entered keyword gets scraped and downloaded as csv file. 
                             </Itemsm>       
                         </Item>                      
                     </ItemContainer>
                     <ItemContainer>
                         <Item>
                             <span>
                             {/* <a class="ui-tooltip" title="tool tip text goes here"><span style="cursor: help;">Text
                              that you want to show the tooltip when hovered over.</span></a> */}
                                 <a href={GitIndeed} target = "_blank"> 
                                   <i className="fab fa-github fa-2x"></i>   
                                    <p>Indeed</p>     
                                 </a>
                             </span>
                             <span>
                                 <a href={GitLinkedin} target = "_blank">
                                    <i className="fab fa-github fa-2x"></i>
                                     <p>LinkedIn</p>
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

export default JobScrapper;