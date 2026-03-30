import express from 'express';
import axios from 'axios'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(cors())

app.get('/api/news', async (req, res) => {
    try {

        const category = req.query.category;

        console.log("params:",req.params)
        console.log("category:",req.params.category)
        console.log("url: ", req.url)

        let response;

        response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}${category ? `&category=${category}` : ''}`)
        // console.log(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}${category ? `&category=${category}` : ''}`)

        const articles = response.data.articles.map((art) => {
            return {...art,id:encodeURIComponent(art.url)}
        })
        return res.status(200).send({success:true, articles})

    }
    catch (err) {
        console.error(err)
        return res.status(500).send({ success: false, error: err })
    }
})




app.listen(3000, ()=>console.log('Sunucu 3000 portunda dinliyor.'))