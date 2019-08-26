import $ from 'jquery';

import './style.scss';

var app = {
    init(){
      $("button").on(
          "click", 
          () => {
        
            console.log("button clicked.")
            window.alert("here");

        })  
    }
}

app.init();