const articleDiv = document.querySelector('.article');
const mainDiv = document.querySelector('main')

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    const articles = JSON.parse(sessionStorage.getItem('articles'));
    const article = articles.find((art) => art.url == id)

    console.log(article)

    if (!article) mainDiv.innerHTML = articleNotFoundTemplate

    console.log(articleDiv)


    articleDiv.innerHTML = `

            <div class="article">
                <h1 style="margin-bottom: 3px;">
                    ${article.title}
                </h1>
                <div class="article-top">
                    ${article.author && `
                        <span>${article.author}</span>
                    <span>-</span>`
                    }
                    <span>${new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <img class="article-img" src="${article.urlToImage}" />
                <p> 
                    ${article.description}
                </p>
            </div>
            <div>
                <p class="" style="margin-top: 20px; font-size: 18px; font-weight: normal;">
                    ${article.content || placeholder}
                </p>
            </div>
    `
})




const articleNotFoundTemplate = `
        <main style="display:flex; justify-content:center; height: 60vh;">
            <section class="article" style="text-align: center; margin-top: 100px;">
                <h1 style="">404</h1>
                <p>The article you searched for was not found.</p>
            </section>
        </main>
    `

const placeholder = `
    News API hasn't provided the actual content of this news article yet, this is why we are showing you this placeholder text instead of the actual content of the article. Thanks for your understanding.
`