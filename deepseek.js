require('dotenv').config();
const axios = require('axios');
const prompt = require('prompt-sync')()
const API_KEY = process.env.DEEPSEEK_KEY;
const API_URL = 'https://api.deepseek.com/v1/chat/completions';

async function getDeepSeekResponse(userInput) {
    try {
        const response = await axios.post(
            API_URL,
            {
                model: "deepseek-chat",
                messages: [{ role: "user", content: userInput }],
                temperature: 0.7
            },
            {
                headers: {
                    "Authorization": `Bearer ${API_KEY}`, 
                    "Content-Type": "application/json"
                }
                
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error('Erro ao chamar DeepSeek API:', error.response?.data || error.message);
    }
}
const pergunta = prompt("Me pergunte algo: ");
console.log();
getDeepSeekResponse(pergunta);