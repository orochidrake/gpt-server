
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


export const create = (prompt) => openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 50,
    temperature: 0,
});


export const chatCreate = (prompt) => openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        { "role": "system", "content": "Você é um especialista em HTML, CSS, Javascript." }, 
        { role: "user", content: prompt }
    ],
    max_tokens: 50,

});
