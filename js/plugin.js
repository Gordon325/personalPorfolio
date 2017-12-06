// jQuery Plugin

//Pop-Up

/*---------------------------------------------------
    LESS Elements 0.9
  ---------------------------------------------------
    A set of useful LESS mixins
    More info at: http://lesselements.com
  ---------------------------------------------------*/
/* --------------------------------------------- */
/* 			 Popdown Plugin Styling              */
/* --------------------------------------------- */
/* The dark transparent background */
#popdown-opacity {
  background: url(../img/blend-bg.png) repeat;
}
/* The white dialog itself */
#popdown-dialog {
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
#popdown-dialog .body {
  padding: 30px;
}
/* The dialog loading indicator */
.popdown-loading {
  padding: 20px;
  background: url(../img/popdown-loading.gif) no-repeat center center;
}
/* Added to dialog when loading is complete */
/* --------------------------------------------- */
/* 			 Your Styling Styling                */
/* --------------------------------------------- */
div.popdown-content {
  /* endof footer */

}
div.popdown-content header h2 {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
  font-size: 16px;
  text-align: left;
  padding: 15px 10px;
  font-weight: 400;
  font-family: "Helvetica Neue", Helvetica, "pragmatica-web", Arial, sans-serif;
  color: #464646;
}
div.popdown-content section.body {
  padding: 20px;
  text-align: left;
}
div.popdown-content section.body h3 {
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: #727272;
  font-family: "Helvetica Neue", Helvetica, "pragmatica-web", Arial, sans-serif;
}
div.popdown-content section.body p {
  font-size: 16px;
  color: #B3B3B1;
}
div.popdown-content footer {
  padding: 0px 20px 20px 0;
  text-align: right;
}
div.popdown-content footer button {
  margin: 0;
  padding: 0;
  padding: 10px 30px;
  background-color: #3BB69E;
  border: none;
  font-size: 12px;
  cursor: pointer;
  outline: none;
  color: #fff;
  text-transform: uppercase;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
div.popdown-content footer button:hover {
  background-color: #329c87;
}
/* endof div.popdown-content*/