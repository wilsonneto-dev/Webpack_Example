import $ from 'jquery';

var app = {
    init(){
      $("button").on(
          "click", 
          () => {
        
            alert("button clicked.")
        
        })  
    }
}