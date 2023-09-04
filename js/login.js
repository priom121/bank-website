document.getElementById('btn-submit').addEventListener('click',function(){
        const emailField = document.getElementById('user-email');
        const email =  emailField.value ;
//         console.log(email);   
         const passField =document.getElementById('user-pass');
         const password = passField.value;
//          console.log(pass); 
     if(email === 'sontan@gamil.com' && password === 'd'){
                  window.location.href = 'bank.html';            
     }
     else{
         alert('plz write password & email')
     }
})