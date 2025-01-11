
const modalTrigger = document.querySelector('.modal-trigger');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');
const form = document.getElementById('signup-form');


// Modalı aç
console.log(modalTrigger);
if (modalTrigger !== null) {
    modalTrigger.addEventListener('click', () => {
        modalOverlay.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    });
    
    // Modalı kapat
    function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => {
            modalOverlay.style.display = 'none';
        }, 300);
    }
    
    closeButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            passwordConfirm: document.getElementById('password-confirm').value
        };
    
        // Şifre kontrolü
        if (formData.password !== formData.passwordConfirm) {
            alert('Şifreler eşleşmiyor!');
            return;
        }  
        // Formu temizle ve modalı kapat
        closeModal();
    });
}


// Form gönderme

if (document.getElementById("ask-btn") !== null){
    document.getElementById("ask-btn").addEventListener("click", function () {
        const question = document.getElementById("question").value;
        const responseArea = document.getElementById("response");
    
        if (question.trim() === "") {
            responseArea.textContent = "Lütfen bir soru girin.";
            return;
        }
    
        // AI bağlanıyormuş gibi simülasyon (gerçek bağlantı entegrasyonu API ile yapılır)
        responseArea.textContent = "AI düşünüyor...";
        setTimeout(() => {
            // Örnek cevap (Gerçek bir AI yanıtı API çağrısı ile alınır)
            responseArea.textContent = `Sorunuz: "${question}"\nCevap: Bu, örnek bir yanıttır!`;
        }, 2000);
    });
}


  