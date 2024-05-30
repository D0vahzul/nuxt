<template>
    <div v-if="visible" class="back-to-top" @click="scrollToTop">
        <font-awesome-icon icon="arrow-up" />
    </div>
  </template>

  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const visible = ref(false)

  const checkScroll = () => {
    if (window.scrollY > 300) {
      visible.value = true
    } else {
      visible.value = false
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onMounted(() => {
    window.addEventListener('scroll', checkScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
  })
  </script>

  <style scoped>
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #000;
    color: #fff;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    transition: opacity 0.3s;
    display: flex;
    justify-content: center;
    vertical-align: middle;
  }
  .back-to-top:hover {
    opacity: 0.7;
  }
  </style>
