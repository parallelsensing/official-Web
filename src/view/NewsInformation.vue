<template>
  <div id="NewsInformation">
    <div class="container">
      <div class="container text-center custom-header">
        <h1 class="custom-h1">新闻动态</h1>
      </div>
      <div class="nav container text-center">
        <button class="news-button" :class="{ active: selectedNews === 'company' }"
          @click="handleSelect('company')">公司新闻</button>
        <button class="news-button" :class="{ active: selectedNews === 'industry' }"
          @click="handleSelect('industry')">行业动态</button>
      </div>

      <ul class="container-fuild custom-ul">
        <li v-for="(item, index) in newsList" :key="index" class="wow fadeIn custom-li">
          <div class="li-content">
            <img :src="item.imageUrl" />
            <div>
            </div>
          </div>

          <div class="li-content-text">
            <div class="content">
              <h3 class="custom-h3" @click="goToNewsDetail(index)">{{ item.title }}</h3>
              <div class="time">
                <p>{{ item.date }}</p>
              </div>
              <p style="width:90%">{{ item.introduce }}</p>
            </div>
          </div>

        </li>
      </ul>

      <div class="contaianer-fuild text-center more">
        <i class="glyphicon glyphicon-th"></i>
      </div>

    </div>
  </div>
</template>

<script setup name="NewsInformation">
import WOW from 'wow.js'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

// 引入图片资源
import newsImg1 from '@/assets/img/新闻资讯.jpg'
import newsImg2 from '@/assets/img/新闻资讯2.png'
import newsImg3 from '@/assets/img/新闻资讯3.jpg'
import testImg from '@/assets/img/test.png'

const router = useRouter();
const selectedNews = ref('company');
const newsList = ref([]);
function handleSelect(params) {
  selectedNews.value = params;
  newsList.value = selectedNews.value === 'company' ? newsCompanyList : newsIndustryList;
}

function goToNewsDetail(id) {
  router.push({
    path: '/newsdetail',
    query: { id: id, news: selectedNews.value }
  });
}

// 使用已引入的图片资源
const newsCompanyList = [
  {
    id: '1',
    title: '人工智能',
    introduce:
      '近日，人工智能（AI）在医疗领域再次取得了突破性进展。',
    date: '2019-05-24',
    imageUrl: newsImg1,
  },
  {
    id: '2',
    title: '新闻标题2',
    introduce:
      '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
    date: '2019-05-24',
    imageUrl: newsImg2,
  },
  {
    id: '3',
    title: '新闻标题3',
    introduce:
      '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
    date: '2019-05-24',
    imageUrl: newsImg3,
  },
  {
    id: '4',
    title: '新闻标题4',
    introduce:
      '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
    date: '2019-05-24',
    imageUrl: newsImg2,
  },
  {
    id: '5',
    title: '新闻标题5',
    introduce:
      '为计算程序拟定“算法”，写作的第五份“程序设计流程图”，被珍视为“第一位给计算机',
    date: '2019-05-24',
    imageUrl: newsImg3,
  },
  {
    id: '6',
    title: '新闻标题6',
    introduce:
      '为计算程序拟定“算法”，写作的第五份“程序设计流程图”，被珍视为“第一位给计算机',
    date: '2019-05-24',
    imageUrl: newsImg1,
  }
]

const newsIndustryList = [
  {
    id: '1',
    title: '智慧驾驶',
    introduce:
      '上周，智慧驾驶（AI）在标高用户提供若非如果他人发再次取得了突破性进展。',
    date: '2023-09-30',
    imageUrl: testImg,
  },
  {
    id: '2',
    title: '另一个标题2',
    introduce:
      '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
    date: '2022-10-14',
    imageUrl: newsImg1,
  },
  {
    id: '3',
    title: '新闻标题3',
    introduce:
      '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
    date: '2019-05-24',
    imageUrl: newsImg3,
  },
  {
    id: '4',
    title: '新闻标题4',
    introduce:
      '为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
    date: '2019-05-24',
    imageUrl: newsImg2,
  },
  {
    id: '5',
    title: '新闻标题5',
    introduce:
      '为计算程序拟定“算法”，写作的第五份“程序设计流程图”，被珍视为“第一位给计算机',
    date: '2019-05-24',
    imageUrl: newsImg3,
  },
  {
    id: '6',
    title: '新闻标题6',
    introduce:
      '为计算程序拟定“算法”，写作的第五份“程序设计流程图”，被珍视为“第一位给计算机',
    date: '2019-05-24',
    imageUrl: newsImg1,
  }
]

onMounted(() => {
  newsList.value = newsCompanyList
  var wow = new WOW()
  wow.init()
})
</script>

<style scoped>
.li-content-text {
  width: 60%;
  height: 200px;
  margin-left: 4%;
}

.li-content {
  position: relative;
  width: 40%;
  height: 200px;
}

.li-content>img {
  width: 100%;
  height: 100%;
  padding: 1%;
  z-index: 2;
  position: absolute;
  top: -20px;
  left: 5px;
}

.li-content>div {
  width: 98%;
  height: 95%;
  padding: 1%;
  background-color: #920783;
  z-index: 1;
  position: absolute;
  top: -7px;
  left: 18px;
}

.custom-li {
  display: flex;
  margin-bottom: 20px;
  background-color: #DCDCDC;
}

.custom-ul {
  margin-top: 50px;
}

.custom-h1 {
  font-size: 4.5rem;
}

.custom-h3 {
  font-weight: bold;
  cursor: pointer;
}

.custom-header {
  width: auto;
  height: 20vh;
  background: linear-gradient(to bottom right, #5A2891 20%, #d0357d 80%);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.news-button {
  background-color: #fff;
  border: 1px solid #911681;
  color: #911681;
  margin: 0 30px;
  width: 120px;
  font-size: larger;
  cursor: pointer;
}

.news-button.active {
  background-color: #911681;
  color: #fff;
}

.nav {
  margin: 20px 0;
}

.nav>a {
  display: inline-block;
  text-decoration: none;
  width: 120px;
  height: 45px;
  line-height: 45px;
  color: #333;
  border: 1px solid #333;
}

.nav>a.active {
  color: #1e73be;
  border-color: #1e73be;
}

.nav>a:hover {
  color: #1e73be;
  border-color: #1e73be;
}

.news-container {
  overflow: hidden;
  margin-bottom: 0;
}

.news-container>li {
  width: 55.6%;
  height: 120px;
  float: left;
  color: #333;
  text-align: right;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}

.news-container>li:hover {
  color: #1e73be;
  border: 1px solid #1e73be;
  cursor: pointer;
}

.news-container>li:nth-of-type(2n) {
  float: right;
  text-align: left;
}

.news-container>li>.content {
  width: auto;
  float: left;
  padding: 20px 0;
}

.news-container>li>.time {
  width: 20%;
  float: left;
  padding: 10px 0;
}

.news-container>li>.time>p {
  font-size: 30px;
  margin: 5px 0;
}

.news-container>li>.circle {
  width: 20%;
  height: 100%;
  float: left;
  position: relative;
}

.news-container>li>.circle>img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
}

.news-container>li>.circle>i {
  display: block;
  width: 1px;
  height: 100%;
  background: #707070;
}

.news-container>li:nth-of-type(2n)>.content {
  float: right;
}

.news-container>li:nth-of-type(2n)>.time {
  float: right;
}

.news-container>li:nth-of-type(2n)>.circle {
  float: right;
}

.news-container>li:nth-of-type(1)>.circle>i {
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.more {
  font-size: 25px;
  color: #707070;
}

.more>i {
  cursor: pointer;
}

@media screen and (max-width: 767px) {
  .news-container>li {
    width: 100%;
  }

  .news-container>li>.content {
    width: 70%;
    text-align: left;
    float: right;
  }

  .news-container>li>.time {
    width: auto;
    text-align: left;
    float: right;
  }

  .news-container>li>.circle {
    display: none;
  }
}
</style>