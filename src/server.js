import express from "express";
import { create, chatCreate, createImage} from './bot.js';

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
    try {

        if (!req.body.prompt) return res.send("error: prompt could not be empty")

        const { data } = await create(req.body.prompt)

        const { choices } = data
        res.send(choices[0].text);

    } catch (e) {
        console.error(e);
    }

});

app.post("/chat", async (req, res) => {
    try {

        if (!req.body.prompt) return res.send("error: prompt could not be empty")

        const { data } = await chatCreate(req.body.prompt)

        const { choices } = data
        res.send(choices[0].message);

    } catch (e) {
        console.error(e);
    }

});

app.post("/image", async (req, res) => {
    try {

        if (!req.body.prompt) return res.send("error: prompt could not be empty")

        const { data } = await createImage(req.body.prompt)

        res.send(data);

    } catch (e) {
        console.error(e);
    }

});

app.listen(4006);