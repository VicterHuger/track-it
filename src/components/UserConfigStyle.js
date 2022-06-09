import Container from "../assets/styles/Container";
import ImageLogo from "../assets/styles/ImageLogo";

import Logo from "../assets/images/logo.png";

export default function UserConfigStyle({children}){
   return(
    <Container>
        <ImageLogo src={Logo} alt="Logo of TrackIt: Parels bars in background and a rising graphic in front" /> 
        {children}
    </Container>
   )
}