<template>
  <div id="CompanyIntroduction">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <swiper id="swiper" :modules="modules" :slides-per-view="1" :space-between="0" navigation lazy loop autoplay>
        <swiper-slide class="banner-swiper" v-for="(item, index) in swiperList" :key="index">
          <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
          <div class="swiper-lazy-preloader"></div>
          <div class="swiper-slide-title">
            <h1>{{ item.title }}</h1>
            <p>{{ item.content }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div>
      <div class="menu-bar">
        <div v-for="(button, index) in menuButtons" :key="index" :ref="el => buttonRefs[index] = el"
          :class="['menu-item', { active: selectedButton === button.code, flash: flashing === button.code }]"
          @click="handleSelectButton(button.code, index)" @mousedown="handleFlash(button.code, true)"
          @mouseup="handleFlash(button.code, false)">
          {{ button.label }}
        </div>
      </div>
    </div>

    <div v-if="selectedButton === 'intro'" class="container">
      <div class="introduction">
        <h3>北京中科智传科技有限公司</h3>
        <p>
          北京中科智传科技有限公司（简称：中科智传）成立于2017年，是一家集研发、生产、销售为一体的智能硬件企业。公司位于北京市海淀区中
          科技术中心，占地面积100余亩。公司致力于智能硬件产品的研发、生产与销售，产品涵盖智能家居、智能安防、智能办公等各个领域。
          中科智传坚持“以客户为中心”的发展理念，致力于为客户提供安全、便捷、智能的智能硬件产品。
          中科智传始终坚持“科技为先，品质为本”的经营理念，致力于为客户提供安全、便捷、智能的智能硬件产品。
          我们的客户包括集团上市公司, 酒店, IT科技, 教育, 服装, 贸易, 外贸,
          时尚, 生物, 工业, 制造等众多行业, 并树立了良好的口碑,
          积累了丰富的经验和成功案例. 我们提供权威专业的互联网品牌策划,
          并实施高标准的设计方案, 创造真正意义上的品牌网站,
          为互联网品牌在互动行销领域创造最大价值而不懈努力!
        </p>
        <p>
          我们的客户包括集团上市公司, 酒店, IT科技, 教育, 服装, 贸易, 外贸,
          时尚, 生物, 工业, 制造等众多行业, 并树立了良好的口碑,
          积累了丰富的经验和成功案例. 我们提供权威专业的互联网品牌策划,
          并实施高标准的设计方案, 创造真正意义上的品牌网站,
          为互联网品牌在互动行销领域创造最大价值而不懈努力!
        </p>
        <div class="introduction-card ">
          <div>
            <img src="@/assets/img/building.svg" alt="办公地点">
            <div>
              <h1>2</h1>
              <h3>办公地点</h3>
            </div>
          </div>
          <div>
            <img src="@/assets/img/peoples.svg" alt="员工人数">
            <div>
              <h1>20+</h1>
              <h3>员工人数</h3>
            </div>
          </div>
          <div>
            <img src="@/assets/img/patent.svg" alt="论文专利">
            <div>
              <h1>50+</h1>
              <h3>论文专利</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="honour">
        <h2>荣誉奖项</h2>
        <div class="honour-marked"></div>

        <div class="honour-detail">

          <div v-for="item in items" :key="item.id">
            <img :src=item.imageUrl alt="奖项1">
            <div>
              <h3>{{ item.title }}</h3>
              <h5>{{ item.date }}</h5>
              <p>
                {{ item.abstract }}
              </p>
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
  </div>
</template>

<script setup name="CompanyIntroduction">
import WOW from 'wow.js'
import { onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay } from 'swiper'
import swiper1 from '@/assets/img/关于我们1.png'
import swiper2 from '@/assets/img/test.png'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/lazy'
import 'swiper/css/autoplay'
// 引入图片资源
import newsImg1 from '@/assets/img/奖项1.png'
import newsImg2 from '@/assets/img/奖项2.png'
import newsImg3 from '@/assets/img/奖项3.png'

const selectedButton = ref('intro')
const flashing = ref(null)
const buttonRefs = ref([])

const handleSelectButton = (code, index) => {
  selectedButton.value = code;

  const buttonElement = buttonRefs.value[index];
  if (buttonElement) {
    buttonElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const modules = [Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay]
const swiperList = [
  {
    img: swiper1,
    title: '',
    content: '',
  },
  {
    img: swiper2,
    title: '',
    content: '',
  },
  {
    img: swiper1,
    title: '',
    content: '',
  },
  {
    img: swiper2,
    title: '',
    content: '',
  }
]

const menuButtons = [
  { code: 'intro', label: '公司简介' },
  { code: 'teams', label: '管理团队' }
]

const items = [
  {
    id: 1,
    imageUrl: newsImg1,
    title: "2024年度榜单",
    date: "2024年1月16日",
    abstract: "内容摘要......",
    url: 'https://example.com/news1'
  }, {
    id: 2,
    imageUrl: newsImg2,
    title: "XXXXX企业奖",
    date: "2023年10月16日",
    abstract: "内容摘要......",
    url: 'https://example.com/news1'
  }, {
    id: 3,
    imageUrl: newsImg3,
    title: "XXXXXXXX奖",
    date: "2023年9月26日",
    abstract: "内容摘要......",
    url: 'https://example.com/news1'
  }
]

const handleFlash = (code, state) => {
  flashing.value = state ? code : null;
}

onMounted(() => {
  var wow = new WOW()
  wow.init()
})
</script>

<style scoped>
.introduction>p {
  text-indent: 2em;
  line-height: 1.6;
  color: #333;
  font-family: 'Arial', sans-serif;
  text-align: justify;
  margin-bottom: 20px;
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

.honour>h2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.honour-marked {
  height: 3px;
  background-color: #920783;
  width: 70px;
  margin: 0 auto;
}

.honour-detail {
  height: 500px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.honour-detail>div {
  width: 30%;
  height: 300px;
}

.honour-detail>div>img {
  display: block;
  width: 100%;
  height: 100%;
}

.honour-detail>div>div {
  padding: 5px 0 0 20px;
  position: relative;
  color: #fff;
  background-color: #920783;
  height: 150px;
}

.introduction {
  position: relative;
  top: -60px;
}

.introduction-card {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.introduction-card>div {
  display: flex;
  width: 31%;
  height: 180px;
  background-color: #f9edf898;
  border-radius: 5px;
  box-shadow: 0px 4px 15px 5px #e7e6e6;
}

.introduction-card>div>img {
  width: auto;
  height: 100px;
  margin: auto 30px;
}

.introduction-card>div>div {
  width: auto;
  height: 120px;
  margin: auto;
}

.introduction-card>div>div>h1 {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-style: italic;
}

.menu-bar {
  position: relative;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  width: auto;
  height: 50px;
  top: -70px;
  z-index: 2;
}

.menu-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.menu-item.active::after {
  display: flex;
  content: '';
  position: absolute;
  bottom: 0;
  width: 15%;
  height: 4px;
  background-color: #920783;
}

.menu-item.flash {
  background-color: rgba(0, 0, 0, 0.5);
}

/* 顶部轮播图 */
#swiper {
  width: 100%;
  height: 100%;
}


#swiper .banner-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

#swiper .banner-swiper img {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  /*background: rgba(51, 51, 51, 0.534);*/
  text-align: center;
  line-height: 80px;
}

#swiper .banner-swiper .swiper-slide-title>h1 {
  font-size: 50px;
  margin-top: 12%;
}

#swiper .banner-swiper .swiper-slide-title>p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}

.swiper-container {
  position: relative;
  top: -20px;
  width: 100%;
  height: calc(100vh - 130px);
}

.row {
  margin-right: 0;
  margin-left: 0;
}

.CompanyIntroduction-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}

.CompanyIntroduction-container>div>p {
  font-size: 14px;
  line-height: 2.5rem;
}

@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}

@media (max-width: 767px) {
  .introduction-card {
    flex-direction: column;
    /* 将子元素竖向排列 */
    align-items: center;
    /* 居中对齐 */
  }

  .introduction-card>div {
    width: 100%;
    /* 每个子元素占满屏幕的宽度 */
    margin-bottom: 20px;
    /* 给每个子元素添加底部间距，避免紧贴在一起 */
  }

  .honour-detail {
    flex-direction: column;
    /* 将子元素竖向排列 */
    align-items: center;
    /* 居中对齐 */
    height: 1300px;
  }

  .honour-detail>div {
    width: 100%;
    /* 每个子元素占满屏幕的宽度 */
    margin-bottom: 20px;
    /* 给每个子元素添加底部间距 */
  }

  .honour-detail>div>div {
    padding-left: 10px;
    /* 调整内边距以适应较小屏幕 */
    padding-right: 10px;
  }

  .loading-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
  }

  .loading-button>button {
    background-color: transparent;
    border: 1px solid #920783;
    border-radius: 0;
    color: #920783;
    font-size: 2.5rem;
  }
}

</style>