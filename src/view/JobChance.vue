<template>
  <div id="JobChance">
    <div class="banner container-fuild text-center" @click="scrollToElement">欢迎加入我们</div>
    <div ref="targetElement" class="container" style="min-width:500px;margin-bottom: 50px;">
    
      <!-- 搜索框 -->
      <div class="search-box my-4" style="display: flex;margin: 30px 0 20px 0;justify-content: center;">
        <input type="text" placeholder="搜索职位..." v-model="searchQuery" style="margin: 0px; background-color: #fff; color: #333; border: 2px solid #920783;"/>
        <button class="btn btn-primary" @click="searchJobs" style="width:100px;color: #fff;background-color: #920783;border-radius: 0;">搜索</button>
      </div>

      <!-- 职位详情列表 -->
      <div class="row">
        <div class="col-md-5 mb-4" v-for="job in filteredJobs" :key="job.id">
          <div class="card job-card">
            <div class="card-body">
              <h3 class="card-title">{{ job.title }}</h3>
              <span class="card-text">{{ job.location }} | </span>
              <span class="card-text">{{ job.type }} | </span>
              <span class="card-text">{{ job.date }}</span>
              <p class="card-text">{{ job.detail }}</p>
              <button class="btn btn-primary" style="width:80px;height: 30px;color: #fff;background-color: #920783;border-radius: 0;display: block;margin-left: auto;">查看详情</button>
            </div>
          </div>
        </div>
      </div>

      <div class="loading-button">
          <button>
            查看更多
          </button>
        </div>
    </div>
  </div>
</template>

<script setup name="JobChance">
import WOW from 'wow.js'
import { ref ,computed,onMounted } from 'vue'
const searchQuery = ref('')
// 获取目标元素的引用
const targetElement = ref();

// 定义滚动到元素的方法
const scrollToElement = () => {
  if (targetElement.value) {
    targetElement.value.scrollIntoView({
      behavior: 'smooth', // 平滑滚动
      block: 'start',     // 对齐方式：滚动到视口顶部
    });
  }
};

// 模拟职位数据
const jobs = ref([
  { id: 1, title: '软件工程师', location: '北京市', type: '技术', date: '2024-09-20' ,detail: '负责公司产品及项目系统功能开发,有相关经验,....' },
  { id: 2, title: '前端开发工程师', location: '上海市', type: '技术', date: '2024-09-18' ,detail: '负责公司产品及项目系统功能开发,有相关经验,....' },
  { id: 3, title: '后端开发工程师', location: '深圳市', type: '技术', date: '2024-09-17' ,detail: '负责公司产品及项目系统功能开发,有相关经验,....' },
  { id: 4, title: '测试工程师', location: '广州市', type: '技术', date: '2024-09-19' ,detail: '负责公司产品及项目系统功能开发,有相关经验,....' },
  { id: 5, title: '产品经理', location: '北京市', type: '产品', date: '2024-09-15' ,detail: '负责公司产品及项目系统功能开发,有相关经验,....' },
  { id: 6, title: '产品经理', location: '北京市', type: '产品', date: '2024-09-15' ,detail: '负责公司产品及项目系统功能开发,有相关经验,....' },
])



// 过滤职位列表
const filteredJobs = computed(() => {
  if (!searchQuery.value) {
    return jobs.value
  }
  return jobs.value.filter(job =>
    job.title.includes(searchQuery.value) ||
    job.location.includes(searchQuery.value) ||
    job.type.includes(searchQuery.value)
  )
})

function searchJobs() {
  console.log('搜索内容:', searchQuery.value)
}

onMounted(() => {
  let wow = new WOW()
  wow.init()
})
function submitForm() {
  window.open('https://neveryu.github.io/neveryu/', 'NeverYu')
}
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 50px;
  height: 100vh;
  line-height: 100vh;
  background-image: url('../assets/img/加入我们.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
  transform: translateY(-20px);
  cursor: pointer;
}

.row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.search-box input {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.job-card {
  border: 1px solid #ddd;
  padding: 20px;
  background-color: #fff;
  /* 添加阴影 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* 上下间距 */
  margin-bottom: 20px;
  transition: box-shadow 0.3s ease;
}

.job-card:hover {
  /* 鼠标悬停时的阴影效果 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-title {
  color: #920783;
}

.card-text {
  color: #666;
}
.loading-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
}

.loading-button>button {
  background-color: transparent;
  border: 1px solid #920783;
  border-radius: 0;
  color: #920783;
  font-size: 2.5rem;
}
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>

