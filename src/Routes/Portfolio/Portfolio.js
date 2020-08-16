import React, { Component } from 'react';
import styled from "styled-components";
import Card from "./Card";

import MovieImg from "./MovieApp/movieapp.png";
import PaintImg from "./PaintingApp/painting.jpg";
import JobImg from "./JobScrapper/findjob.jpg";
import BeautyImg from "./CheckIngredients/beautyproducts.png";

const Container = styled.div`
    width: 100vw;
    align-items:center;
    padding: 0px 20px; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Section = styled.div`
    margin: 70px 70px;
    display: grid;
    grid-template-columns: repeat()(auto-fill, 25px);
    grid-gap: 25px; 
`;


export default class Portfolio extends Component {
    hideCanvas(){
        var canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.display = "none";
    }
    render() {
        return (
            <Container>
                {this.hideCanvas()}
              {/* <Section>
                  <Card id = "kakaotalk"
                  imageSrc = "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7b/fc/44/7bfc44b9-3016-40dd-90a9-e10292f2ab28/pr_source.png/643x0w.jpg"
                  title = "Kakaotalk Clone" />
              </Section> */}
              <Section>
                  <Card id = "movieapp"
                  imageSrc = {MovieImg}
                  title = "Movie App" />
              </Section>
              <Section>
                  <Card id = "jobscrapper"
                  imageSrc = {JobImg}
                  title = "Job Scraper" />
              </Section>
              <Section>
                  <Card id = "ingredients"
                  imageSrc = {BeautyImg}
                  title = "Check Ingredients" />
              </Section>
              <Section>
                  <Card id = "paint"
                  imageSrc = {PaintImg}
                  title = "Painting App" />
              </Section>       
            </Container>
        );
    }
}
