import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Container = styled.div`
    position: relative;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    /* border-radius: 7px; */
`;

const Image = styled.div`
    background-image: url(
        ${props => props.bgUrl}
    );
    height: 300px;
    width: 400px;
    background-size: cover;
    /* border-radius: 7px; */
    background-position: center center;
    transition: all 1.5s ease, opacity 0.2s linear;
`;

const ImageContainer = styled.div`
   margin-bottom: 10px;
    position: relative;
    overflow: hidden;
  
    &:hover{
        ${Image}{
            opacity: 0.3;
            transform: scale(1.5);
            /* transition: all 1.5s ease; */
        }
        span{
            opacity: 1;
        }
    }
    span{
        /* opacity: 0; */
        opacity:0;
        /* color: rgba(252,165,0, 0.9);     */
        color:rgba(0,0,0,0.4);
        /* background-color: white; */
        position: absolute;
        top: 50%;
        margin-left: -15px;
        margin-top: -10px;
        left: 50%;
    }
    /* border: solid black 2px; */
`;

const Title = styled.span`
    display:block;
    font-size: 15px;
    font-weight: 600;
    padding-bottom: 10px;
    opacity: 0.8;
    text-align:center;
`;

//add array (list of stuff used js, vanilla js, etc )
const Card = ({id, imageSrc, title}) => (
    <Link to = {`/portfolio/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl = {imageSrc} />
                <span>
                    <i className="fas fa-info-circle fa-3x"></i>
                 
                </span>
             
            </ImageContainer>
            <Title>{title}</Title>
        </Container>
    </Link>
)

Card.propTypes = {
    id: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Card; 