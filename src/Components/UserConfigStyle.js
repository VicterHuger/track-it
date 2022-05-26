import Container from "./../Styles/Container";
import ImageLogo from "../Styles/ImageLogo";

import Logo from "./../Assets/images/logo.png";

export default function UserConfigStyle({children}){
   return(
    <Container>
        <ImageLogo src={Logo} alt="Logo of TrackIt: Parels bars in background and a rising graphic in front" /> 
        {children}
    </Container>
   )
}