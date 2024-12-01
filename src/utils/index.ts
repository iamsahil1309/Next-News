import { news } from "../../types"

//@ts-ignore
export const removeDuplicateData = (articles) => {
    const randomArticle:news[] = articles?.articles
    const filterArticles = randomArticle.filter(article => article?.source.id !== null)
    return filterArticles
}