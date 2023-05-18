import styled from "styled-components";
import { Link } from "react-router-dom"; //outra forma de manipular//


export const Loading = styled.div`
color: #fff;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;

`;

export const Container = styled.div`
max-width: 700px;
background-color: #fff;
border-radius: 4px;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
padding: 30px;
margin:  80px auto;
`;

export const Owner = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


img{
    width: 150px;
    border-radius: 20%;
    margin: 20px 0px;
}

h1{
    font-size: 30px;
    color:#0d2636;
    
}

p{
    margin-top: 5px;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;

}

`;

export const BackLink = styled(Link)` //outra forma de manipular//
border: 0;
outline: 0;
background: transparent;

`;

export const FilterIssuesList = styled.div`
   display: flex;
   
button{
    margin-left:10px;
    outline: 0;
    color:  #fff ;
    background:#0d2636;
    border: none;
    border-radius: 4px;
    padding: 5px;
}

span{
    display: flex;
    align-items: flex-end;
    color: red;
    margin-left:10px;
    font-style: italic ;
}

`;

export const IssuesList = styled.ul`
margin-top: 30px;
padding: 30px;
border-top: 1px solid #eee;
list-style: none;

li{
    display: flex;
    padding: 15px 10px;

    & + li{
        margin-top: 12px;
    }
}

img{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: solid 2px #0d2636;
}

div{
    flex:1;
    margin-left: 12px;

    p{
        margin-top: 10px;
        font-size: 12px;
        color:#000;
    }
}

strong{
    font-size: 15px;

    a{
        text-decoration: none;
        color:#222;
        transform: 0.3s;
        margin-bottom: 100px;

        &:hover{
            color: #0071db;
        }
    }
    span{
        background: #222;
        color:#fff;
        font-size: 12px;
        padding: 1px 4px;
        border-radius: 4px;
        margin:5px;
        
        
    }
}

`;

export const Pagination = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

    button{
        outline: 0;
        border: 0;
        background: #222;
        color: #fff;
        padding: 5px 10px;
        border-radius: 4px;
    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }
    
    }

`;




