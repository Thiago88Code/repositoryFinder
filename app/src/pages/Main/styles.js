
import styled, { keyframes, css } from "styled-components";




export const Container = styled.div`
max-width: 700px;
background: #FFF;
border-radius: 4px;
padding: 30px;
margin: 80px auto;
box-shadow: 0 0 20px rgba(0,0,0, 0.2);

h1{
    
    font-size: 20px;
    display: flex;
    align-items: center;
    
    
}
svg{
    margin-right: 10px;
}

`;
export const Form = styled.form`

margin-top: 30px;
display: flex;
   
input{
    flex-grow:1 ;
    border:solid 1px ${props => (props.error ? "#Ff0000" : "#eee")}; // Interessante!! mudando atibuto interno.
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
}

`;

const animate = keyframes`

from{
    transform: rotate(0deg);

}to{
    transform: rotate(360deg);

}
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: "submit",//ver
    disabled: props.loading
}))

    `   
    
    background: #0D2636;
    border: none;
    border-radius: 4px;
    margin-left: 10px;
    
    
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        margin-left: 10px;
    }

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }
    ${props => props.loading &&
        css`
            svg{
                animation: ${animate} 2s linear infinite;
            }
        `}

    
`;


export const List = styled.ul`

list-style: none;
margin-top: 20px;

li{
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + li{ // INTERESSANTE!!!!
    border-top: solid 1px #eee;
}
}
a{
    color: #0d2636;
}
`;

export const DeleteButton = styled.button.attrs({
    type: "button"
})`

margin-left: 6px;
border: 0;
background: transparent; //IMPORTANTE
color: #0d2636;

`;


