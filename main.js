document.getElementById("ask-btn").addEventListener("click", async function() {
    const question = document.getElementById("question").value;
    if (question.trim() === "") {
        alert("Lütfen bir soru girin.");
        return;
    }

    // API Anahtarınızı burada belirtin 
    const apiKey = 'AIzaSyD4sOOQzPsyll-E6ZydWqVEUmvmzLLmixk'; // Burada API anahtarınızı kullanın
    const url = 'https://gemini.google.com/'; // API URL'si

    const responseArea = document.getElementById("response");

    // API isteği oluşturma
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "",  // Kullanmak istediğiniz model
            prompt: question,
            max_tokens: 100, // Cevap uzunluğu
        })
    });

    // API yanıtını işleme
    const data = await response.json();

    // Yanıtı ekranda gösterme
    if (data.choices && data.choices[0]) {
        responseArea.innerHTML = `<p>${data.choices[0].text}</p>`;
    } else {
        responseArea.innerHTML = `<p>Bir şeyler yanlış gitti. Lütfen tekrar deneyin.</p>`;
    }
});