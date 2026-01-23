import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.8/+esm";
const articleList = document.querySelector('.article-list')


let articles = [];
let showcase = [];

document.addEventListener("DOMContentLoaded", async () => {

    try {
        const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=86a1adfd80e4427d8c2493d5573ea849')

        console.log(res.data)

        articles = [...res.data.articles]

        articles = articles.filter((article) => article.urlToImage).map((article, i) => buildArticle(article))

        articles.map((article, i) => renderArticle(article))
    }

    catch (err) {
        console.error("err during loading articles:", err)
    }

    try {
        const res = await axios.get('https://newsapi.org/v2/everything?q=world&apiKey=86a1adfd80e4427d8c2493d5573ea849')

        console.log("sc:", res)

        showcase = res.data.articles.slice(0, 6)


    }
    catch (err) {
        console.error("err during loading showcase:", err)

    }

    loadShowcase()

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
                        ${article.author !== null ? `
                        <address>
                            ${article.author}
                        </address> -` : ''}
                        
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

// showcase kısmını yükleyen fonksiyon

const loadShowcase = () => {

    const displayText = document.querySelector('.hero-text')
    const displayImage = document.querySelector('.display-image');
    const secondaryImages = document.querySelectorAll('.secondary-image')
    secondaryImages.forEach((img, index) => {
        img.src = showcase[index + 1].urlToImage
        img.dataset.article = index + 1
    })


    displayText.firstElementChild.innerText = showcase[0].title

    console.log(showcase[0])
    displayImage.src = showcase[0].urlToImage || './assets/images/notfound.jpg';

    secondaryImages.forEach((img, index) => {
        img.addEventListener('mouseover', () => {
            // img.classList.add('hovered')

            let art = showcase[img.dataset.article];
            displayText.firstElementChild.innerText = art.title
            displayImage.src = art.urlToImage
            displayImage.parentElement.href = "amogus"
        })

        img.addEventListener('mouseleave', ()=>{
            // img.classList.remove('hovered')
        })
    })

}


const hoverElement = (el) => {

}

// handle img errors

const imgs = document.querySelectorAll('.img-fallback')


imgs.forEach((img) => {
    img.addEventListener('error', () => {
        img.src = './assets/images/notfound.jpg'
    })
})