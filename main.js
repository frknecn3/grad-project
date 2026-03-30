import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.8/+esm";
const articleList = document.querySelector('.article-list')
const categoryDivs = document.querySelectorAll('.categories-container a')
const popup = document.querySelector('.categories-popup')
const notFound = './assets/images/notfound.jpg'


let articles = [];
let showcase = [];

document.addEventListener("DOMContentLoaded", async () => {

    try {
        const res = await axios.get('http://localhost:3000/api/news')

        console.log(res.data)

        articles = [...res.data.articles]

        articles = articles.filter((article) => article.urlToImage).slice(6).map((article, i) => buildArticle(article))

        articles.map((article, i) => renderArticle(article))

        sessionStorage.removeItem('articles')
        sessionStorage.setItem('articles', JSON.stringify(res.data.articles))
    }

    catch (err) {
        console.error("err during loading articles:", err)
    }

    try {
        const res = await axios.get('http://localhost:3000/api/news')

        console.log("sc:", res)

        showcase = res.data.articles.slice(0, 6)


    }
    catch (err) {
        console.error("err during loading showcase:", err)

    }

    loadShowcase()

    addImgHandlers();

})

// kategori divlerine tetikleyici ekle
categoryDivs.forEach((el, index) => {
    el.addEventListener('mouseover', async () => {
        popup.innerHTML = ''
        await handlePopup(el.dataset.category)
    })


})

// popup.addEventListener('mouseleave', () => {
//     popup.innerHTML = ''
// })

// çekilen veriyi html elementine dönüştüren fonksiyon
const buildArticle = (article) => {
    try {
        const div = document.createElement('a');
        console.log(article)
        div.innerHTML = `
            <a href="/article.html?id=${article.id}">
                <article class="news-article">
                    <div class="article-img-ctn">
                        <img
                        src="${article.urlToImage || notFound}"
                        alt=""
                        onerror="this.onerror=null; this.src=notFound;"
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
                        
                        <time>${new Date(article.publishedAt).toLocaleDateString()}</time>
                    </span>
                </article>
            </a>
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
    const imageLink = document.querySelector('.img-container');
    const secondaryImages = document.querySelectorAll('.secondary-image')
    secondaryImages.forEach((img, index) => {
        img.src = showcase[index].urlToImage
        img.dataset.article = index
        img.style.display = "block"

        img.parentElement.querySelector('.loader').style.display = "none"
    })


    displayText.firstElementChild.innerText = showcase[0].title
    displayText.lastElementChild.innerText = showcase[0].author
    imageLink.href = `/article.html?id=${showcase[0].url}`


    console.log(showcase[0])
    displayImage.src = showcase[0].urlToImage || notFound;

    secondaryImages.forEach((img, index) => {
        img.addEventListener('mouseover', () => {
            
            // img.classList.add('hovered')

            let art = showcase[img.dataset.article];
            displayText.firstElementChild.innerText = art.title
            displayText.lastElementChild.innerText = art.author

            displayImage.src = art.urlToImage || notFound
            displayImage.parentElement.href = `/article.html?id=${art.url}`
        })

        img.addEventListener('mouseleave', () => {
            // img.classList.remove('hovered')
        })
    })


}


const hoverElement = (el) => {

}

// kategorilere hover yapıldığında gözükecek haberleri oluşturan fonksiyon
const buildCategoryArticle = (categoryArt) => {
    const el = document.createElement('div');


    el.innerHTML = `
            <div class="popup-article">
                <a href="/article.html?id=${categoryArt.url}">
                    <div class="img-container">
                            <div class="loader">
                                <div class="d-1"></div>
                                <div class="d-2"></div>
                                <div class="d-3"></div>
                            </div>
                        <img class="hidden" src="${categoryArt.urlToImage || notFound}"
                        alt="">
                    </div>
                    <h4>
                        ${categoryArt.title.length < 100 ? categoryArt.title : categoryArt.title.slice(0, 100) + '...'}
                    </h4>
                </a>
            </div>
            `

    return el;

}
const handlePopup = async (category) => {


    const res = await axios.get(`http://localhost:3000/api/news?category=${category}`)

    console.log(`http://localhost:3000/api/news?category=${category}`)

    let arts = res.data.articles;

    const oldArticles = JSON.parse(sessionStorage.getItem('articles'));
    sessionStorage.removeItem('articles');
    sessionStorage.setItem('articles', JSON.stringify([...oldArticles, ...res.data.articles ]))

    arts.forEach((art, index) => {
        popup.appendChild(buildCategoryArticle(art));
    })

    addImgHandlers();

}

// handle img errors

const addImgHandlers = () => {
    const wrappers = document.querySelectorAll('.img-container')


    wrappers.forEach((wrapper) => {

        const img = wrapper.querySelector('img');
        const loader = wrapper.querySelector('.loader');

        const imageLoaded = () => {
            loader.style.display = 'none';
            img.classList.remove('hidden')
        }

        const imageError = () => {
            img.src = notFound;
            loader.style.display = 'none';
            img.classList.remove('hidden')
        }


        if (img.complete) {
            imageLoaded();
        } else {
            img.onload = imageLoaded;
            img.onerror = imageError;
        }

    })


}