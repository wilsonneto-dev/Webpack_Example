import $ from 'jquery';

var app = {
    init(){
      $("button").on(
          "click", 
          () => {
        
            console.log("button clicked.")
        
        })  
    }
}

app.init();