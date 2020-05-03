import React, { Component } from 'react';
import styled from "styled-components";
import coverImg from "./cover.png";
import searchImg1 from "./search_initial.png";
import searchImg2 from "./search_keywordentered.png";
import detailImg from "./movie_detail.png";
import tvImg1 from "./tv_toprated.png";
import tvImg2 from "./tv_airingtoday.png";
import movieImg1 from "./movie_upcoming.png";

const GitMovieApp = "https://github.com/jyjun92/movie_app";
const MovieappLink ="https://jyjun92.github.io/movie_app/";

//publish and include site link

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
        &:hover{
            cursor: pointer;
        }
    }
    .link{
        color: #0D66D6;
    }
`;

const Item_sm = styled.div`
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

class MovieApp extends Component {
    render() {
        return (
            <Container>
            <Content>
                 <Cover bgImage = {coverImg} />
                 <Data>
                     <Title>Movie App</Title>
                     <ItemContainer>
                         <Item>
                             Languages and Frameworks used: 
                             <Item_sm>
                                 <li>React</li>
                                 <li>HTML</li>
                                 <li>Styled-Components</li>
                             </Item_sm>
                         </Item>
                     </ItemContainer>
                     <ItemContainer> 
                         <Item>
                             Description:  
                             <Item_sm>
                                  Movie application (using a movie database API) where users can find 'Now Playing', 'Upcoming', 'Popular', 'Top Rated' movies/TV shows, view ratings, search, and see more details such as playtime, release year, and genre. 
                             </Item_sm>       
                         </Item>                      
                     </ItemContainer>
                     <ItemContainer>
                         <Item>
                             <span>
                                 <a href={GitMovieApp} target = "_blank">
                                    <i className="fab fa-github fa-2x"></i>
                                 </a>
                             </span>
                             <Divider />
                             <span>
                                 <a href={MovieappLink} target = "_blank">
                                 <i class="far fa-eye fa-2x"></i>
                                  
                                 </a>
                             </span>
                         </Item>
                     </ItemContainer>                 
                 </Data>
            </Content>
            <Content>
                 <IndivImg bgImage = {movieImg1}/>                   
            </Content>
            <Content>
                <IndivImg bgImage = {tvImg2}/>
            </Content>
            <Content>
                <IndivImg bgImage = {searchImg1} />
            </Content>
            <Content>
                <IndivImg bgImage = {searchImg2} />
            </Content>
            <Content>
                <IndivImg bgImage = {detailImg} />
            </Content>
         </Container> 
        );
    }
}

export default MovieApp;