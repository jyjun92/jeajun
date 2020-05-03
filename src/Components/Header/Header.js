import React from 'react';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";

const resumeLink = "https://drive.google.com/file/d/1o3pt1ubDmS9GWixchIqGfk9NvuLGaL87/view?usp=sharing"
const linkedinLink = "https://www.linkedin.com/in/jea-yoen-jun-90ab0095/";
const githubLink = "https://github.com/jyjun92/";

const Header = styled.header`
    color: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rgba(250,250,250,0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(230,230,230,0.8);
`;

const List = styled.ul`
    display:flex;
`;

const Item = styled.li `
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 4px solid ${props => props.current ? "orange" : "transparent"};
    transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)` 
    height: 50px;
    display: flex;
    align-items:center;
    justify-content:center;
`;

const IconList = styled.ul`
    position: absolute; 
    top: 0px;
    right:0px;
    display:flex;
    justify-content: flex-end; 
    margin-top: 12px;
`;

const Icon = styled.li`
    width: 50px;
    height: 50px; 
    text-align: center; 
    &:hover{
        cursor: pointer;
    }
`;

export default withRouter(({location: {pathname}}) => (
<Header>
    {/* {console.log(pathname)} */}
    <List>
        <Item current={pathname === "/home"}>
            <SLink to="/home">Home</SLink>
        </Item>
        <Item current={pathname.includes("/portfolio")}>
            <SLink to="/portfolio">Portfolio</SLink>
        </Item>     
        <Item current={pathname === "/contact"}>
            <SLink to="/contact">Contact</SLink>
        </Item>
    </List>
    <IconList>
    <Icon>
            <span>
            <a href={githubLink} target = "_blank"> 
            <i class="fab fa-github fa-2x"></i>
              </a>
          </span>
        </Icon>
        <Icon>
            <span>
            <a href={resumeLink} target = "_blank"> 
            <i class="far fa-file fa-2x"></i>
              </a>
          </span>
        </Icon>
        <Icon>
            <span>
            <a href={linkedinLink} target = "_blank"> 
              <i class="fab fa-linkedin fa-2x"></i>
              </a>
          </span>
        </Icon>
    </IconList>
</Header>
)); 