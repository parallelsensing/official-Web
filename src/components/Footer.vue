<template>
  <div id="footer" class="container-fluid">
    <div class="header-nav hidden-xs" style="border-bottom:1px solid #000;display: flex;">
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper" style="padding:0 3%">
        <li v-for="(item, index) in navList" :key="index" :class="index == navIndex ? 'active' : ''"
          @click="navClick(index, item.name)">
          <router-link :to="item.path">
            {{ item.name }}
            <i class="underline"></i>
          </router-link>
        </li>
      </ul>
    </div>
    
    <div>
      <p class="address_tel_fax">
      <p>地址：{{ address }}</p>
      </p>
      <p class="copy">Copyright &copy; 2018 - Now {{ company }}</p>
      <p class="item">隐私条款 | 质保条款</p>

    </div>

  </div>
</template>

<script setup name="Footer">
import { ref, reactive } from 'vue'
import Footer_link from '@/components/Header.vue'

const address = import.meta.env.VITE_APP_ADDRESS
const phone = import.meta.env.VITE_APP_PHONE
const email = import.meta.env.VITE_APP_EMAIL
const qq = import.meta.env.VITE_APP_QQ
const company = import.meta.env.VITE_APP_COMPANYNAME
const blog = import.meta.env.VITE_APP_BLOG
const qqgroup = import.meta.env.VITE_APP_QQGROUP

const navIndex = ref('')
navIndex.value = sessionStorage.getItem('navIndex')
  ? sessionStorage.getItem('navIndex')
  : 0
const menuName = ref('首页')
const menuClass = ref('glyphicon glyphicon-menu-down')
const navList = [
  {
    name: '首页',
    path: '/',
    children: []
  },
  {
    name: '软件产品',
    path: '/software',
    children: [
      {
        name: '智能雷达',
        path: '/software/smartTown'
      },
      {
        name: '大数据管理系统',
        path: '/software/bigData'
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
function jumptomain() {
  router.push({ path: '/HomePage' })
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
#footer .header-nav .header-nav-wrapper {
  line-height: 110px;
  float: left;
  margin: 0;
}

/* 导航栏 每个导航 */
#footer .header-nav .header-nav-wrapper>li {
  float: left;
  margin: 0 15px;
  position: relative;
}

/* 导航栏 每个导航下面的 a 链接 */
#footer .header-nav .header-nav-wrapper>li>a {
  color: #000000;
  font-size: 18px;
  padding: 15px 0;
  position: relative;
}

/* 导航栏 每个导航下面的 a 链接的下划线 */
#footer .header-nav .header-nav-wrapper>li>a>i {
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
#footer .header-nav .header-nav-wrapper>li>a>span {
  font-size: 12px;
  transition: transform ease 0.5s;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#footer .header-nav .header-nav-wrapper>li>a:hover {
  color: #920783;
  text-decoration: none;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#footer .header-nav .header-nav-wrapper>li>a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#footer .header-nav .header-nav-wrapper>li>a:hover span {
  transform: rotate(180deg);
}

/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#footer .header-nav .header-nav-wrapper>li.active>a {
  color: #920783;
  text-decoration: none;
  border-bottom: 2px solid #920783;
}

/* 导航栏 每个导航下面的二级导航容器 */
#footer .header-nav .header-nav-wrapper>li>dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 80%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
}

/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#footer .header-nav .header-nav-wrapper>li>dl>dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#footer .header-nav .header-nav-wrapper>li>dl>dt>a:hover {
  text-decoration: none;
}

/* 导航栏 滑上一级导航显示二级导航 */
#footer .header-nav .header-nav-wrapper>li:hover dl {
  display: block;
}

#footer .header-nav .header-nav-wrapper>li>dl>dt:hover {
  cursor: pointer;
  background: #ccc;
}

@media screen and (max-width: 997px) {
  #footer .header-nav-m {
    position: relative;
  }

  /* 导航栏logo容器 */
  #footer .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }

  /* 导航栏logo图片 */
  #footer .header-nav-m .header-nav-m-logo img {
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
  #footer .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #474747;
    position: relative;
  }

  /* 导航栏 菜单图标 */
  #footer .header-nav-m .header-nav-m-menu-wrapper {
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
  #footer .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #474747;
    z-index: 9999999;
  }

  /* 导航栏 每个导航 */
  #footer .header-nav-m .header-nav-m-wrapper>li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }

  /* 导航栏 每个导航下面的 a 链接 */
  #footer .header-nav-m .header-nav-m-wrapper>li>a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }

  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #footer .header-nav .header-nav-wrapper>li>a>span {
    font-size: 10px;
  }
}

#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #f5f5f5;
  overflow: hidden;
  text-align: center;
}

.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
  position: relative;
  left: -40px;
  /* 向左移动20像素 */
}

.logo img {
  width: 200px;
  height: 45px;

}

.title {
  font-size: 25px;
  margin-bottom: 20px;
}

.address_tel_fax {
  color: #7c7b7b;
  font-size: 14px;
  margin-top: 50px;
}

.item {
  color: #7c7b7b;
  margin-bottom: 100px;
}

.copy {
  color: #7c7b7b;
  font-size: 14px;
  margin: 0 0 10px;
}

@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }

  .address_tel_fax {
    font-size: 12px;
  }

  .email_wx {
    font-size: 12px;
  }

  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
}
</style>

