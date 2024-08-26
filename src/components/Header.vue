<template>
  <div id="header" class="container-fuild">
    <!-- 电脑导航 -->
    <div class="header-nav hidden-xs custom-flex-center">
      <!-- 导航内容 -->
      <div class="custom-nav-content">
        <ul class="header-nav-wrapper">
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="[index == navIndex ? 'active' : '', 'custom-nav-item']"
            @click="navClick(index, item.name)"
          >
            <router-link :to="item.path">
              {{ item.name }}
              <span v-if="item.children.length > 0" class="glyphicon glyphicon-menu-down"></span>
              <i class="underline"></i>
            </router-link>

            <dl v-if="item.children.length > 0">
              <dt v-for="(i, n) in item.children" :key="n">
                <router-link :to="i.path" class="custom-subitem">
                  {{ "- " + i.name }}
                </router-link>

                <dl v-if="i.children.length > 0">
                  <dt
                    v-for="(child, childIndex) in i.children"
                    :key="childIndex"
                    class="custom-child-item"
                  >
                    <router-link :to="child.path" class="custom-child-link">
                      {{ "- " + child.name }}
                    </router-link>
                  </dt>
                </dl>
              </dt>
            </dl>
          </li>
        </ul>
      </div>
      <div class="custom-language-switcher">
        <div
          :class="{ active: selectedLang === 'cn', 'custom-language-option': true }"
          @click="changeLang('cn')"
        >
          中
        </div>
        <span class="custom-language-separator">/</span>
        <div
          :class="{ active: selectedLang === 'en', 'custom-language-option': true }"
          @click="changeLang('en')"
        >
          En
        </div>
      </div>
    </div>

    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block" src="@/assets/img/logo_black.png" alt="logo" />
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{ menuName }}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item, index) in navList"
            :key="index"
            @click="navClick(index, item.name)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{ item.name }}
              <i class="underline"></i>
            </router-link>
            <dl v-if="item.children.length > 0">
              <dt v-for="(i, n) in item.children" :key="n">
                <router-link :to="i.path" class="custom-subitem-mobile">
                  {{ '- - ' + i.name + ' - -' }}
                </router-link>
                <!-- Check for deeper nested children -->
                <dl v-if="i.children.length > 0">
                  <dt v-for="(child, childIndex) in i.children" :key="childIndex">
                    <router-link :to="child.path" class="custom-child-item-mobile">
                      {{ '- ' + child.name + ' -' }}
                    </router-link>
                  </dt>
                </dl>
              </dt>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const phone = import.meta.env.VITE_APP_PHONE
const email = import.meta.env.VITE_APP_EMAIL
const navIndex = ref('')
navIndex.value = sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0
const menuName = ref('首页')
const selectedLang = ref('cn');

const menuClass = ref('glyphicon glyphicon-menu-down')
const navList = [
  {
    name: '首页',
    path: '/',
    children: []
  },
  {
    name: '产品',
    path: '/software',
    children: [
      {
        name: '终端',
        path: '/software/smartTown',
        children: [
          {
            name: '光视一体系统',
            path: '',
            children: []
          },
          {
            name: '便携式手持测绘系统',
            path: '',
            children: []
          }
        ]
      },
      {
        name: '平台',
        path: '/software/bigData',
        children: [
          {
            name: '三位监控平台',
            path: '',
            children: []
          },
          {
            name: '场景数字助手',
            path: '',
            children: []
          }
        ]
      }
    ]
  },
  {
    name: '应用行业',
    path: '/service',
    children: []
  },
  {
    name: '新闻中心',
    path: '/newsinformation',
    children: []
  },
  {
    name: '关于我们',
    path: '/companyintroduction',
    children: []
  },
  {
    name: '工作机会',
    path: '/jobchance',
    children: []
  },
  {
    name: '联系我们',
    path: '/contactus',
    children: []
  }
]
function navClick(index, name) {
  navIndex.value = index
  sessionStorage.setItem('navIndex', index)
  menuName.value = name
}

function changeLang(lang) {
  selectedLang.value = lang;
}
function jumptomain() {
  router.push({ path: '/' })
}
function menuClick() {
  if (menuClass.value == 'glyphicon glyphicon-menu-down') {
    menuClass.value = 'glyphicon glyphicon-menu-up'
  } else {
    menuClass.value = 'glyphicon glyphicon-menu-down'
  }
}
</script>

<style scoped>
.custom-flex-center {
  display: flex;
  justify-content: center;
}

.custom-nav-content {
  height: 110px;
  display: flex;
}

.custom-nav-item {
  margin: 0 30px !important;
}

.custom-subitem {
  color: black;
  font-size: large;
}

.custom-child-item {
  margin-top: 10px;
}

.custom-child-link {
  color: black;
  margin-left: 1rem;
}

.custom-language-switcher {
  position: absolute;
  display: flex;
  margin-right: 5%;
  right: 0;
  top: 40px;
}

.custom-language-option {
  border: none;
  padding: 4px;
  font-size: large;
  cursor: pointer;
}

.custom-language-separator {
  font-size: large;
  display: flex;
  align-items: center;
}

.custom-subitem-mobile {
  color: #fff;
  font-size: 15px;
  font-weight: bold;
}

.custom-child-item-mobile {
  color: #fff;
  font-size: 15px;
  font-weight: bold;
}

.active {
  color: #920783;
  transform: scale(1.3);
}

/* 顶部 */
#header {
  background: #ffffff;
  transition: all ease 0.6s;
  box-shadow: 0 4px 20px 6px rgba(84, 26, 107, 0.1);
}

#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #474747;
}

/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}

/* 导航栏 */
#header .header-nav {
  height: 110px;
  display: flex;
}

/* 导航栏logo */
#header .header-nav .header-nav-logo {
  width: 100px;
  height: 100%;
  float: left;
  position: relative;
}

/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}

#header .header-nav .header-nav-wrapper {
  line-height: 110px;
  margin: auto;
  max-width: 1000px;
}

/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper>li {
  float: left;
  margin: 0 15px;
  position: relative;
  z-index: 10;
}

/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper>li>a {
  color: #000;
  font-size: 20px;
  /* font-weight: bold; */
  padding: 15px 0;
  position: relative;
}

/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper>li>a>i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #920783;
}

/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper>li>a>span {
  font-size: 12px;
  transition: transform ease 0.5s;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper>li>a:hover {
  color: #920783;
  text-decoration: none;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper>li>a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper>li>a:hover span {
  transform: rotate(180deg);
}

/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper>li.active>a {
  color: #920783;
  text-decoration: none;
  border-bottom: 2px solid #920783;
}

/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper>li>dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 80%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 10px 2px rgba(84, 26, 107, 0.2);
  background: #fff;
}

/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper>li>dl>dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper>li>dl>dt>a:hover {
  text-decoration: none;
}

/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper>li:hover dl {
  display: block;
}

#header .header-nav .header-nav-wrapper>li>dl>dt:hover {
  cursor: pointer;
  background: rgb(255, 255, 255);
}

@media screen and (max-width: 997px) {
  #header .header-nav-m {
    position: relative;
  }

  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }

  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 95px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #920783;
    position: relative;
  }

  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }

  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #2f274ddc;
    z-index: 9999999;
  }

  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper>li {
    height: auto;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }

  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper>li>a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }

  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper>li>a>span {
    font-size: 10px;
  }
}
</style>

