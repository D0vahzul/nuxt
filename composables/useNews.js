// composables/useNews.js
import { ref } from 'vue'

export function useNews() {
  const news = ref([])

  const fetchNews = async () => {
    const response = await fetch('/api/news')
    news.value = await response.json()
  }

  return { news, fetchNews }
}
