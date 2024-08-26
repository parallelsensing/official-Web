<template>
  <div class="news-container">
    <div class="news-item" @click="handleClick" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" v-for="item in newsItems" :key="item.id">
      <div class="image">
        <img :src="item.imageUrl" :alt="item.title">
      </div>
      <div class="content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.date }}</p>
        <p>{{ item.abstract }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsContainer',
  data() {
    return {
      newsItems: [
        {
          id: 1,
          imageUrl: '/src/assets/img/新闻资讯.jpg',
          title: '新闻资讯1',
          date: '2024-08-31',
          abstract: '新闻资讯1的摘要信息。',
          url: 'https://example.com/news1'
        },
        {
          id: 2,
          imageUrl: '/src/assets/img/新闻资讯2.png',
          title: '新闻资讯2',
          date: '2024-08-31',
          abstract: '新闻资讯2的摘要信息。',
          url: 'https://example.com/news2'
        },
        {
          id: 3,
          imageUrl: '/src/assets/img/新闻资讯3.jpg',
          title: '新闻资讯3',
          date: '2024-08-31',
          abstract: '新闻资讯3的摘要信息。',
          url: 'https://example.com/news3'
        }
      ]
    }
  },
  methods: {
    handleClick(item) {
      // 处理点击事件，比如跳转到新闻详情页
      window.location.href = item.url;
    },
    handleMouseEnter(event) {
      // 添加放大效果
      event.target.style.transform = 'scale(1.05)';
    },
    handleMouseLeave(event) {
      // 移除放大效果
      event.target.style.transform = 'scale(1)';
    }
  }
}
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
    width: calc(50% - 12px);
  }
}
</style>
