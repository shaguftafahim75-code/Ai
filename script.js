const askBtn = document.getElementById('askBtn');
const questionInput = document.getElementById('question');
const answerDiv = document.getElementById('answer');

askBtn.addEventListener('click', async () => {
  const question = questionInput.value;
  if (!question) return;

  answerDiv.textContent = "Thinking...";

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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' // Replace with your key
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }]
      })
    });

    const data = await response.json();
    answerDiv.textContent = data.choices[0].message.content;
  } catch (err) {
    answerDiv.textContent = "Error: " + err.message;
  }
});
