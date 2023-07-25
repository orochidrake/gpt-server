import express from "express";
import { create, chatCreate} from './bot.js';

const app = express();

app.get("/", async (req, res) => {
    try {
        const { q } = req.query

        if (!q) return res.send("error: no query")

        const { data } = await create(q)

        const { choices } = data
        res.send(choices[0].text);

    } catch (e) {
        console.error(e);
    }

});

app.get("/chat", async (req, res) => {
    try {
        const { q } = req.query

        if (!q) return res.send("error: no query")

        const { data } = await chatCreate(q)

        const { choices } = data
        res.send(choices[0].message);

    } catch (e) {
        console.error(e);
    }

});

app.listen(4006);