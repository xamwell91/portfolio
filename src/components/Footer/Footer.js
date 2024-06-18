import React from "react";
import Container  from "react-bootstrap/Container";
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram} from "react-icons/fa";



function Footer() {
    return (
        <Container className="footer tc">
                {/** In each URL write the URL of your account*/}
                <a href="https://github.com/samuelthapamagar" target="_blank">
                  <FaGithub  className="icon ma3"/>  
                </a>
                <a href="https://www.linkedin.com/in/samuelthapamagar/" target="_blank">
                   <FaLinkedinIn  className="icon ma3"/> 
                </a>
                
                <a href="https://www.facebook.com/samuelthapamagar777?mibextid=kFxxJD" target="_blank">
                   <FaFacebook  className="icon ma3"/> 
                </a>

                <a href="https://www.instagram.com/samuel.thapa.magar/" target="_blank">
                   <FaInstagram  className="icon ma3"/> 
                </a>
                <hr/>

        </Container>
    );

}

export default Footer