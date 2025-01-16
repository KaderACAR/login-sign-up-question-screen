
 document.getElementById("btnSignCommon").onclick = function() {
     window.location.href = 'login.html';
 };

        document.addEventListener('DOMContentLoaded', function(){
        document.getElementById("loginContainer").addEventListener("submit", (e) =>{
            e.preventDefault(); // burada formun varsayılan davranışını engelliyoruz. sayfayı yenilemesini
          
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
           
            const validEmail = "acar@gmail.com";
            const validPassword = "12345";
       
            if(email === validEmail && password === validPassword){
               alert("giriş başarılı!");
                window.location.href = "main.html";
            }else{
               document.getElementById("message").textContent = "E-posta veya şifre hatalı!";
           }
           
        });
    });


  