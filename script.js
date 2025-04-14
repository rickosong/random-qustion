// Daftar pertanyaan
const questions = [
    "Kamu gay?",
    "mau mati kapan?",
    "kapan nikah?",
    "yang dapat pertanyaan ini, harus push up 20x sambil nyanyi lagu KSI",
    "kamu mau gak jadi pacarku?",
  ];
  ``
  function getRandomQuestion() {
    const questionElement = document.getElementById("question");
    let counter = 0;
    const intervalDuration = 70; // seberapa cepat pertanyaan berganti (dalam ms)
    const animationDuration = 2000; // durasi animasi total (dalam ms)
  
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * questions.length);
      questionElement.textContent = questions[randomIndex];
      counter += intervalDuration;
  
      if (counter >= animationDuration) {
        clearInterval(interval);
        // Set pertanyaan akhir
        const finalIndex = Math.floor(Math.random() * questions.length);
        questionElement.textContent = questions[finalIndex];
      }
    }, intervalDuration);
  }
  