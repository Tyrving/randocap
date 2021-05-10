  function randocase(){
    var toCap = false;
    var inputText = document.body.innerHTML;
    var newInput = "";
    for(i=0; i<inputText.length; i++){
      if(inputText.charAt(i)=='<'){
         toCap = false;
      } else if (inputText.charAt(i)=='>'){
        toCap = true;
      }
      if(toCap){
        if(Math.random() >= 0.5){
          newInput += inputText.charAt(i).toUpperCase();
        } else {
          newInput += inputText.charAt(i).toLowerCase();
        }
      } else {
        newInput += inputText.charAt(i);
      }
    }
    document.body.innerHTML = newInput;
  }

randocase();
