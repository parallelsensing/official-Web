<template>
  <div class="news-container">
    <div
      class="news-item"
      @click="handleClick(item)"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      v-for="item in newsItems"
      :key="item.id"
    >
      <div class="image">
        <img :src="item.imageUrl" :alt="item.title" />
      </div>
      <div class="content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.date }}</p>
        <p>{{ item.abstract }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 引入图片资源
import service1 from '@/assets/img/新闻资讯.jpg';
import service2 from '@/assets/img/新闻资讯2.png';
import service3 from '@/assets/img/新闻资讯3.jpg';

// 定义新闻数据
const newsItems = ref([
  {
    id: 1,
    imageUrl: service1,
    title: '新闻资讯1',
    date: '2024-08-31',
    abstract: '新闻资讯1的摘要信息。',
    url: 'https://example.com/news1',
  },
  {
    id: 2,
    imageUrl: service2,
    title: '新闻资讯2',
    date: '2024-08-31',
    abstract: '新闻资讯2的摘要信息。',
    url: 'https://example.com/news2',
  },
  {
    id: 3,
    imageUrl: service3,
    title: '新闻资讯3',
    date: '2024-08-31',
    abstract: '新闻资讯3的摘要信息。',
    url: 'https://example.com/news3',
  },
]);

// 定义方法
const handleClick = (item) => {
  window.location.href = item.url;
};

const handleMouseEnter = (event) => {
  event.target.style.transform = 'scale(1.05)';
};

const handleMouseLeave = (event) => {
  event.target.style.transform = 'scale(1)';
};
</script>

<style scoped>
.news-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.news-item {
  width: calc(33.33% - 16px);
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.image {
  height: 400px;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 16px;
  color: #fff;
  background-color: #920783;
  flex-grow: 1;
  height: 150px;
}

.content h3 {
  margin-top: 0;
  font-size: 20px;
}

.content p {
  color: #fff;
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .news-item {
    width: calc(100% - 12px);
  }
}
</style>
