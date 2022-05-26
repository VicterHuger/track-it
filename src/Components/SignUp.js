import {Link} from "react-router-dom";
import styled from "styled-components";
import UserConfigStyle from "./UserConfigStyle";
import Forms from "./Forms";

// function isImgLink(url) {
//     if(typeof url !== 'string') return false;
//     return(url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null);
// }

export default function SignUp(){
    return(
        <UserConfigStyle>
            <Forms>
            <input type="text" placeholder="nome" required/>
            <input type="url" placeholder="foto" required/>
            </Forms>
            <Link to="/" >
                <SignUpLink>Já tem uma conta? Faça login!</SignUpLink>
            </Link>
        </UserConfigStyle>
        
    );
}

const SignUpLink=styled.h4`
    text-decoration:underline;
    color:#52B6FF;
    font-size:14px;

`;