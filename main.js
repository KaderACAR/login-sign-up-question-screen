document.getElementById("ask-btn").addEventListener("click", async function() {
    const question = document.getElementById("question").value;
    if (question.trim() === "") {
        alert("Lütfen bir soru girin.");
        return;
    }

    // API Anahtarınızı burada belirtin 
    const apiKey = 'AIzaSyD4sOOQzPsyll-E6ZydWqVEUmvmzLLmixk'; // Burada API anahtarınızı kullanın
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' +apiKey; // API URL'si

    const responseArea = document.getElementById("response");

    // API isteği oluşturma
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents : [{
                parts: [{
                    text: question
                }]
            }]
        })
    });

    // API yanıtını işleme
    const data = await response.json();
    console.log(data);
    // Yanıtı ekranda gösterme
    if (data.candidates 

    ) {
        responseArea.innerHTML = `<p>${data.candidates[0].content.parts[0].text}</p>`;
    } else {
        responseArea.innerHTML = `<p>Bir şeyler yanlış gitti. Lütfen tekrar deneyin.</p>`;
    }
});