require('dotenv').config();
const { OpenAI } = require('openai');
const prompt = require('prompt-sync')()

const openai = new OpenAI({ apiKey: process.env.OPENIA_KEY });

async function getOpenAIResponse(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7
        });
        console.log(response.choices[0].message.content);
    } catch (error) {
        console.error('Erro ao chamar OpenAI API:', error.response?.data || error.message);
    }
}


const resposta = prompt("Me pergunte algo: ")
console.log()
getOpenAIResponse(resposta);