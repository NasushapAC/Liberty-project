import React from 'react';
import { 
    FaTwitter, 
    FaLinkedin, 
    FaMedium,
    FaGithub, 
    FaRedditAlien 
} from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="container mt-5">
          <div className="row foo__social ">
            <div className="col-12">
              <ul className="footer__social foot">
                <li class="fa fa-2x fa-facebook wow bounceIn social">
                  <FaTwitter />
                </li>
                <li>
                  <FaLinkedin />
                </li>
                <li>
                  <FaMedium />
                </li>
                <li>
                  <FaGithub />
                </li>
                <li>
                  <FaRedditAlien />
                </li>
              </ul>
            </div>
          </div>
          <div className="row foo__bar ">
            <div className="col-12">
              <ul className="footer__navbar foot">
                <li class="list-inline-item">
                  <a href="">Buy LDR</a>
                </li>
                <li class="list-inline-item">
                  <a href="">Buy LBS</a>
                </li>
                <li class="list-inline-item">
                  <a href="">LDR Token Contract</a>
                </li>
                <li class="list-inline-item">
                  <a href="">LBS Token Contract</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="footer__copyright  pt-5">
                <p>Copyright &copy; 2021, LibertyFinance</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer
