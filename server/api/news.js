// server/api/news.js
export default defineEventHandler(async () => {
    const apiKey = 'a5559c2c4f4d44edae8d501f1822722d'
    const sources = ['google-news']
    const category = ['technology']
    const language = ['en']
    let articles = []

    for (const source of sources) {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?language=${language}&category=${category}&apiKey=${apiKey}`)
      const data = await response.json()
      articles = articles.concat(data.articles)
    }

    // Example filtering: exclude sensational keywords
    const filteredArticles = articles.filter(article => {
      return !article.title.includes('shocking') && !article.title.includes('sensational')
    })

    return filteredArticles
  })
