import React from 'react';
import styled from "styled-components";
import axios from "axios";

//https://formcarry.com/profile/form/bLTBhvcejzaS  

const Container = styled.div`
    display: block;
    padding: 20px 20px;
    margin: 50px 25%;
    background: transparent;
    box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.248) !important;
`;

const TitleContainer = styled.div`
    padding-bottom: 90px;
`;

const Title = styled.div`
    font-size: 30px;
    text-align: center;
    line-height: 1.2;
    padding-bottom: 10px;
`;

const TitleBorder = styled.div`
    margin: 0 auto;
    width: 25%;
    border-top: 5px solid #adadad;
    border-image: linear-gradient(
            to left, 
            #FF5F6D, #FFC371) 1; 
`;

const Form = styled.form`
    max-width: 520px; 
    margin: 50px auto;
`;

const Input = styled.input`
    border:none;
    background-color:transparent;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;
    display: block;
    flex-wrap: wrap;
    width: 100%;
    font-size: 15px;
    color: #777777;
    line-height: 1.2;

    &:focus, :hover{
        outline: none;
        border-image: linear-gradient(
            to left, 
            #FF5F6D, #FFC371) 1; 
    }
`;

const Textbox = styled.textarea`
    /* resize: vertical; */ 
    border:none;
    height: 150px;
    background-color:transparent;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;
    display: block;
    width: 100%;
    font-size: 15px;
    color: #777777;
    line-height: 1.2;
  
    &:focus, :hover{
        outline: none;
        border-image: linear-gradient(
            to left, 
            #FF5F6D, #FFC371) 1; 
    }
`;

const Button = styled.button`
    margin:0 auto;
    outline: none;
    color: #FAFAFA;
    font-weight: 500;
    font-size:15px;
    display: block;
    border: 2px solid;
    border-image: linear-gradient(
            to left, 
            #FF5F6D, #FFC371) 1; 
    background-image: linear-gradient(to left, #FF5F6D, #FFC371);
    width: 100px;
    padding: 10px 20px;
    text-align: center;
    transition: all 0.2s ease-in-out;
    &:hover{ 
        cursor: pointer; 
        box-shadow: 0 4px 15px 0 rgba(252, 142, 112, 0.75);  
        /* transition: 0.2s ease-in-out; */
    }
`;


class Contact extends React.Component{ 
  
   
    constructor(props) {
    super(props);
    this.state = {
     name: '',
     email: '',
     message: ''
    }
    }
   handleForm = e =>{
       axios.post(
           "https://formcarry.com/s/bLTBhvcejzaS",
           this.state, 
           {
               headers: {"Accept": "application/json"}}
            ).then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            });
            e.preventDefault();
   }

    hideCanvas(){
        var canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.display = "none";
    }
    render() {
    return(
    <>
    <Container>
        {this.hideCanvas()}
        {/*changed id from contact-form to my-form*/}
        <Form id="my-form" onSubmit={this.handleForm} method="POST">
            <TitleContainer>
                <Title>CONTACT ME</Title> 
                <TitleBorder />
            </TitleContainer>
          
            <Input type="text" 
            className="form-control"
            placeholder="Name" 
            id="name" 
            value={this.state.name} 
            onChange={this.onNameChange.bind(this)} />         
      
            <Input 
            type="email" 
            className="form-control" 
            placeholder="Email address"
            value={this.state.email} 
            id="email" aria-describedby="emailHelp" 
            onChange={this.onEmailChange.bind(this)} />   

            <Textbox 
            className="form-control" 
            placeholder="Message" 
            id="message" 
            value={this.state.message} 
            onChange={this.onMessageChange.bind(this)} />
                
            <Button id="submit" value="send" 
            type="submit" 
            onClick = {this.handleSubmit.bind(this)}
            className="btn btn-primary"    
            >SUBMIT</Button>
       
        </Form>

    </Container>
    </>
   );
    }

    handleSubmit(event){
        window.alert("Message has been sent successfully.");
        this.setState({name: "", email: "", message: ""})
    }
   
    onNameChange(event) {
   this.setState({name: event.target.value})
    }
   
    onEmailChange(event) {
   this.setState({email: event.target.value})
    }
   
    onMessageChange(event) {
   this.setState({message: event.target.value})
    }
}


export default Contact;