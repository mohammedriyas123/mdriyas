let outputbox = document.getElementById("output");
   
   function display(num){
     outputbox.value += num;
   }
   function calculate(){
     try{
       outputbox.value = eval(outputbox.value);
  
     }
     catch(err)
     {
       alert("invalid")
     }
   }
    function Clear(){
      outputbox.value= " ";
    }
    function Del(){
      outputbox.value =outputbox.value.slice(0,-1);
    }