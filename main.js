import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.8/+esm";
const articleList = document.querySelector('.article-list')

let articles = [];

document.addEventListener("DOMContentLoaded", async () => {

    try {
        const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=86a1adfd80e4427d8c2493d5573ea849')

        console.log(res.data)

        articles = [...res.data.articles]

        articles = articles.filter((article)=>article.urlToImage).map((article, i) => buildArticle(article))

        articles.map((article, i) => renderArticle(article))
    }

    catch (err) {
        console.error(err)
    }

})


// çekilen veriyi html elementine dönüştüren fonksiyon
const buildArticle = (article) => {
    try {
        const div = document.createElement('a');

        div.innerHTML = `
                <article class="news-article">
                    <div class="article-img-ctn">
                        <img
                        src="${article.urlToImage || './assets/images/notfound.jpg'}"
                        alt=""
                        onerror="this.onerror=null; this.src='./assets/images/notfound.jpg';"
                        >
                    </div>
                    <h2 class="article-title">
                        ${article.title}
                    </h2>
                    <span class="article-details">
                        ${article.author!==null ? `
                        <address>
                            ${article.author}
                        </address> -` :''}
                        
                        <time>${article.publishedAt}</time>
                    </span>
                </article>
    `

        console.log(div)

        return div;


    }
    catch (err) {
        console.error(err)
    }
}


// html elementini sayfaya enjekte eden fonksiyon
const renderArticle = (htmlArticle) => {
    articleList.appendChild(htmlArticle)
}




// handle img errors

const imgs = document.querySelectorAll('.img-fallback')


imgs.forEach((img) => {
    img.addEventListener('error', () => {
        img.src = './assets/images/notfound.jpg'
    })
})