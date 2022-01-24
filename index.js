const URL = "https://jsonplaceholder.typicode.com/users";



function foo()
   {
    document.getElementById('3').style.display="none";
   }
    function str()
    { 
        if(document.getElementById('3').style.display=="none")
        {
            if(document.getElementById('1').value =="" || document.getElementById('1').value !="admin")
                document.getElementById('1').style.border = "2px solid red";
            else  
                document.getElementById('1').style.border = "2px solid greenyellow";

            if(document.getElementById('2').value =="" || document.getElementById('2').value !="admin")
                document.getElementById('2').style.border = "2px solid red";
            else  
                document.getElementById('2').style.border = "2px solid greenyellow";
            
            if(document.getElementById('1').value =="admin" && document.getElementById('2').value =="admin")
            {   
                setTimeout(function(){alert("Hello Admin!")}, 200);
                setTimeout(we,200);
            }
        }
        else
        {
            if(document.getElementById('1').value =="")
                document.getElementById('1').style.border = "2px solid red";
            else  
                document.getElementById('1').style.border = "2px solid greenyellow";   
            if(document.getElementById('2').value =="" || document.getElementById('3').value =="" || document.getElementById('3').value != document.getElementById('2').value)
            {
                document.getElementById('2').style.border = "2px solid red";
                document.getElementById('3').style.border = "2px solid red";
            }
            else
            {
                document.getElementById('2').style.border = "2px solid greenyellow"; 
                document.getElementById('3').style.border = "2px solid greenyellow"; 

            }
            if(document.getElementById('1').value !="" && document.getElementById('2').value !="" && document.getElementById('2').value == document.getElementById('3').value)
            {
                we();
                document.getElementById('3').style.display="none";
                document.getElementById('4').innerHTML="Sign in";
                document.getElementById('5').innerHTML="Sign up";
            }
            
        }
    }  
    function we()
    {
        document.getElementById('1').value="";
        document.getElementById('2').value=""; 
        document.getElementById('3').value=""; 
        document.getElementById('1').style.border = "2px solid #00b4d8";
        document.getElementById('2').style.border = "2px solid #00b4d8"; 
        document.getElementById('3').style.border = "2px solid #00b4d8";  

    } 
    function a()
    {
        if(document.getElementById('3').style.display=="none")
        {
            document.getElementById('4').innerHTML ="OK";
            document.getElementById('5').innerHTML ="Back";
            document.getElementById('3').style.display="block";
        }
        else
        {
            we();
            document.getElementById('4').innerHTML ="Sign in";
            document.getElementById('5').innerHTML ="Sign up";
            document.getElementById('3').style.display="none";
        }

    }