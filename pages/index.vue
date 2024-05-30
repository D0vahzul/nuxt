<!-- pages/index.vue -->
<template>
    <div class="container">
        <h1>News Aggregator</h1>
        <div v-for="article in news" :key="article.url" class="article">
            <h2>{{ article.title }} - {{ article.source.name }}</h2>
            <img :src="article.urlToImage" alt="Article Image" class="article-image">
            <p>{{ article.description }}</p>
            <a :href="article.url" target="_blank" class="read-more">Read more</a>
        </div>
    </div>

</template>

<script setup>
import { onMounted } from 'vue'
import { useNews } from '@/composables/useNews'

const { news, fetchNews } = useNews()

onMounted(() => {
    fetchNews()
})
</script>

<style scoped>
.article {
    margin-bottom: 20px;
}
</style>
