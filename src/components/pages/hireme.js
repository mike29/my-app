import React, { Component } from 'react';
import FontAwesome, { Componen } from 'react-fontawesome';
import PortfolioImages from 'C:/Users/Michael M. Simon/Documents/PROJECTS/MY PAGE/my-app/src/components/images-component/portfolioImages';

class Hireme extends Component {
  render() {
    return (

        <div className ="constainer-fluid">
          <div className="page-container">
            <h1 className="portfolioTitle">  Holla! </h1>
            <PortfolioImages/>
            
            <p>New Line</p>

            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            </p>
            <div className="social-icons">
            <p className= 's-logo'>safdzgd</p>
                        <a href="http://www.twitter.com">
                            <FontAwesome className='s-logo'
                            name='twitter'
                            size='3x'
                            //aria-hidden="true"
                            //spin
                            //style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                        </a>
                        <a href="http://www.facebook.com">
                            <FontAwesome className='s-logo'
                            name='facebook'
                            size='3x'
                            />
                        </a>
                        <a href="http://www.linkedin.com">
                            <FontAwesome className='s-logo'
                            name='linkedin'
                            size='3x'
                            />
                        </a>
              </div>
              </div>
        </div>
    );
  }
}
export default Hireme;
