let a = document.getElementById('movingbox');
var i=0;
var j=0;
var k=176.3;
var l=180;

let timerid = setInterval(() => {


         if (i<=176.3) {
            i++;
            a.style.marginTop=i +"px";
        } 
        
        
        else if(j<=180)
            {
                j++;
                a.style.marginLeft= j + "px";
               
            }
        
           
           else if(k>=0)
                {
                    k--;
                    a.style.marginTop= k + "px";
                    
                }
                else if(l>=0)
                    {
                        l--;
                        a.style.marginLeft= l + "px";
                        
                    }
                  else
                  {
                    i=0;
                    j=0;
                    k=176.3;
                    l=180;
                  }

   
    
}, 10);



