//this is more like detail router
//add couldn't find page later
import React, { Component } from 'react';
import CheckIngredients from "../CheckIngredients";
import JobScrapper from "../JobScrapper";
import Kakaotalk from "../Kakaotalk";
import MovieApp from "../MovieApp";
import PaintingApp from "../PaintingApp";

export default class Detail extends Component {
    state = { 
        id: "",
    }
    constructor(props){
        super(props);
        const {
            location: {pathname}
        } = props;
        this.state = {
            id: pathname
        };
       
    }

    render() {
        const {id} = this.state;  
        return (
            <> 
                {id.includes("/kakaotalk")? <Kakaotalk /> :
                id.includes("/movieapp")? <MovieApp/> :
                id.includes("/paint")? <PaintingApp/> :
                id.includes("/ingredients")? <CheckIngredients/> :
                id.includes("/jobscrapper")? <JobScrapper/> :
                <div>Sorry, could not found the work</div>
                }
            </>
        );
    }
}
