if (
    document.getElementById("btnSignCommon-1") &&
    document.getElementById("btnSignCommon-2")
  ) {
    document
      .getElementById("btnSignCommon-1")
      .addEventListener("click", function () {
        window.location.href = "login.html";
      });
  
    document
      .getElementById("btnSignCommon-2")
      .addEventListener("click", function () {
        window.location.href = "login.html";
      });
  }
  
  console.log(document.getElementById("loginContainer"));
  
  document.getElementById("loginContainer").addEventListener("submit", (e) => {
    e.preventDefault(); 
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    console.log(email, password);
  
    const validEmail = "acar@gmail.com";
    const validPassword = "12345";
  
    if (email === validEmail && password === validPassword) {
      alert("giriş başarılı!");
      window.location.href = "main.html";
    } else {
      document.getElementById("message").textContent =
        "E-posta veya şifre hatalı!";
    }
  });
  
 
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeButton = document.querySelector('.close-button');
  const signUpForm = document.getElementById('signup-form');
  
  document.querySelector('.modal-trigger').addEventListener('click', () =>{
    modalOverlay.style.display = 'block';  // modalı açmak için 
  });
  
  closeButton.addEventListener('click', () =>{
    modalOverlay.style.display = 'none';  // modalı kapatmak için
  });
  
  signUpForm.addEventListener('submit' , (e) => {
      e.preventDefault();  // sayfa yenilenmesin diye ekledim
  
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('password-confirm').value;
  
  if(!name || !email || !password || !passwordConfirm) {
      alert('Lütfen tüm alanları doldurun.');
      return;
  }
  
  if(password !== passwordConfirm) {
      alert('Şifreler eşleşmiyor.');
      return;
  }
  
  if (!email.includes('@') || email.indexOf('@') === 0 || email.lastIndexOf('.') < email.indexOf('@')) {
      alert('Lütfen geçerli bir e-posta adresi girin.');
      return;
      // email.includes('@'): E-postada @ sembolü olup olmadığını kontrol eder.
      // email.indexOf('@') === 0: @ sembolünün en başta olup olmadığını kontrol eder.
      // email.lastIndexOf('.') < email.indexOf('@'): . sembolünün @'dan sonra gelip gelmediğini kontrol eder.
  }
  
  alert('Your account has been successfully created!');
  signUpForm.reset();
  modalOverlay.style.display = 'none'; 
  
  })