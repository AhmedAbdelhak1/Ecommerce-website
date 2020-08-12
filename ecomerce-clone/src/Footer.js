import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';

const FooterPage = () => {
  return (
    <MDBFooter  className="allfooter">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol className='ContentFooter'>
            
            <p>
              Here in our website  you can find a lot of products that you want and <br/> we will make sure that you will  buy the best  choice.
            </p>
          </MDBCol>
          <MDBCol className="centerItem" >
            <h5 className="title">Contact Us</h5>
            
            
            <ul className="ulItem">
            
              <li className="list-unstyled">
                <a href="#!">Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Youtube</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Twitter</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;