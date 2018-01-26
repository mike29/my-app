

import React, { Component } from 'react';
//import {sortGallery} from '';

import {tester}from "./tester";
//import image component
import PortfolioImages from 'C:/Users/Michael M. Simon/Documents/PROJECTS/MY PAGE/my-app/src/components/images-component/portfolioImages';
 class Portfolio extends Component {
    tester;


    handleGalleryTypeClick(event) {
        event.preventDefault();
        let el = event.target.text;

        switch(el) {
            case "UX/UI":

                this._connect(this._returnArrayOfphoto());
                break;
            case "Photograph":
                this._connect(this._returnArrayOfphoto());
                break;
            case "Logo":
                this._connect(this._returnArrayOfphoto());
                break;
            case "Web":
             return <div>{this.tester}</div>
                break;
            case "Graphic Design":
                console.log("it photo");
                break;
            case "Future Projects":
                console.log("it photo");
                break;
        }

    }

    _returnArrayOfphoto (images) {
        images = ["http://verk.premiumcoding.com/wp-content/uploads/2012/04/verk-portfolio-image-4-380x300.jpg",
            "http://themes.themewaves.com/tweeco/wp-content/uploads/sites/31/2015/08/portfolio-7-380x300.jpg",
            "http://verk.premiumcoding.com/wp-content/uploads/2012/04/verk-portfolio-image-4-380x300.jpg",
            "http://flawlessdabarber.com/wp-content/uploads/2013/03/hero-380x300.jpg",
            "http://images.simple-webdesign.com/paneuro-international-ro-380x300.jpg",
            "http://verk.premiumcoding.com/wp-content/uploads/2012/04/verk-portfolio-image-4-380x300.jpg",
            "http://themes.dfd.name/eight/wp-content/uploads/2014/12/Scene-2-380x300.jpg",
            "http://verk.premiumcoding.com/wp-content/uploads/2012/04/verk-portfolio-image-4-380x300.jpg",
            "https://sortechs.com/wp-content/uploads/2017/01/portfolio3-380x300.jpg",
            "http://verk.premiumcoding.com/wp-content/uploads/2012/04/verk-portfolio-image-4-380x300.jpg",
            "http://websitedesignaustintexas.com/wp-content/uploads/houstry-after800x600-380x300.jpg",
            "http://www.iconicgraphics.com/wp-content/uploads/galileo_small-380x300.jpg" ];
        return images;
    }

    _connect(arr) {
        //console.log('connected');
        {/*}
         var elem = document.createElement("img");
         elem.setAttribute("src", "http://verk.premiumcoding.com/wp-content/uploads/2012/04/verk-portfolio-image-4-380x300.jpg");
         elem.setAttribute("height", "299.84");
         elem.setAttribute("width", "379.8");
         elem.setAttribute("alt", "portfolio image ofux work");

         //box1Image.style.visibility = (visible ? 'visible' : 'hidden');

         var first = document.createElement("h1");
         var text = document.createTextNode("Jason is pretty awesome");
         first.appendChild(text);

         var holder = "";
         for(var i=1; i<=12;i++){

         holder = ".b" + i.toString();

         console.log(holder);
         var theBox;


         theBox = document.querySelector(holder);
         theBox.appendChild(first);
         */}


        let selectDivContainer = document.querySelectorAll(".portfolio-images-holder");
        let secondDiv;

        for (let i = 0; i <= arr.length; i++)
        {
            let theImage = document.createElement("img");
            theImage.setAttribute("class", "col-md-3 portfolio-image");
            theImage.setAttribute("src", arr[i]);
            theImage.setAttribute("height", "299.84");
            theImage.setAttribute("width", "379.8");
            theImage.setAttribute("padding", "0");
            theImage.setAttribute("margin", "0");
            theImage.setAttribute("alt", "images of my work");
            // secondDivImg = document.createElement("span");
            // secondDivImg.className = "divImg";

            secondDiv = document.createElement("div");
            //secondDiv.className = "portfolio-images-div";
            secondDiv.setAttribute("class", "portfolio-images-div");
            //secondDiv.innerHTML = "Second";
            secondDiv.appendChild(theImage);
            if(selectDivContainer[i] !== null && selectDivContainer[i] !== undefined ){
                selectDivContainer[i].appendChild(secondDiv);
            }
        }

    }
    /*
     _erase() {

     var clickCount = 0;
     if(clickCount === 0) {
     this._connect(this._returnArrayOfphoto());
     clickCount++;
     }
     else {
     var box1Image = document.querySelectorAll(".portfolio-images-holder");
     box1Image.style.visibility = 'hidden';
     }

     }
     */

    _listPhotography() {

        console.log("alert function is fired ");
        this._connect(this._returnArrayOfphoto());

    }


    render() {

    return (
      <div className ="constainer-fluid">
      {/*<h1 className="portfolioTitle">PORTFOLIO </h1>*/}
      <div className="row">
          <div id= "sortGallery" className="btn-group btn-group-justified groupedLinks">
                <a id="ux" href="#" className="btn btn-primary one first"  onClick={this.handleGalleryTypeClick.bind(this)}>UX/UI</a>
                <a id="Photograph" href="#" className="btn btn-primary one" onClick={this.handleGalleryTypeClick.bind(this)}>Photograph</a>
                <a href="#" className="btn btn-primary one" onClick={this.handleGalleryTypeClick.bind(this)}>Logo</a>
                <a href="#" className="btn btn-primary one" onClick={this.handleGalleryTypeClick.bind(this)}>Sony</a>
                <a href="#" className="btn btn-primary one" onClick={this.handleGalleryTypeClick.bind(this)}>Web</a>
                <a href="#" className="btn btn-primary one" onClick={this.handleGalleryTypeClick.bind(this)}>Graphic Design</a>
                <a href="#" className="btn btn-primary one last" onClick={this.handleGalleryTypeClick.bind(this)}>Future Projects</a>

          </div>
          <div id="imageMainDiv" className="galleryMainHolder col-lg-12">
              <div className="col-md-3 boom portfolio-images-holder b1"></div>
              <div className="col-md-3 boom portfolio-images-holder b2"></div>
              <div className="col-md-3 boom portfolio-images-holder b3"></div>
              <div className="col-md-3 boom portfolio-images-holder b4"></div>
              <div className="col-md-3 boom portfolio-images-holder b5"></div>
              <div className="col-md-3 boom portfolio-images-holder b6"></div>
              <div className="col-md-3 boom portfolio-images-holder b7"></div>
              <div className="col-md-3 boom portfolio-images-holder b8"></div>

          </div>

          {/*
            make it 8 pics cut out this four

             <div className="col-md-3 boom portfolio-images-holder b9"></div>
              <div className="col-md-3 boom portfolio-images-holder b10"></div>
              <div className="col-md-3 boom portfolio-images-holder b11"></div>
             <div className="col-md-3 boom portfolio-images-holder b12"></div>

          */}

      </div>
      {/*
      <div className="row">
        <div className="col-md-12">

          <h1>What would I do</h1>
            <div className="col-md-6">
              <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
              <p>
                <a className="btn btn-primary btn-lg" href="/Aboutme" role="button">Learn more</a>
              </p>
            </div>
        </div>

      </div>
      */}
      </div>
    );
  }
}
export default Portfolio;
