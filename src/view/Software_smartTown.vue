<template>
    <section class="HomePage-banner">
      <!--视频页面-->
      <div class="HomePage-banner-img">
        <img id="banner-img"
          autoplay="" loop="" playsinline="" muted="" style="width:1200px;margin-top:20px;"
          src="@/assets/img/products3.png">
        </img>
        <div class="HomePage-banner-text">
          <h1>
            <span >段落1 介绍这是示例文本这是示例文本这是示例文本这是示例文本这是示例文本这是示例文本这是示例文本这是示例文本<br></span>
            <span >段落2 介绍这是示例文本这是示例文本这是示例文本这是示例文本这是示例文本这是示例文本这是示例文本这是示例文本</span>
          </h1>
          <button
              @click = "jumpto_product"
              class="btn btn-default btn-sm"
              onmouseenter="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
              onmouseleave="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';"
            >
            立即购买
          </button>
        </div>
      </div>
    </section>
</template>

<script setup name="smartTown">
function jumpto_product(){
  const returnUrl = window.location.href;
  window.location.href = 'https://www.parallelsensing.com/' ;
}

</script>
<style scoped>
.HomePage-banner{
  position: relative;
}
.HomePage-banner-text{
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  color: #fff;
  /*background-color: rgba(0, 0, 0, 0.5);*/

}
.HomePage-banner-text p{
  font-size: 120px;
  pointer-events: none; /* 让文字不遮挡视频的交互*/
}
.HomePage-banner-text h1{
  font-size: 24px;
  font-weight: bolder;
  pointer-events: none; /* 让文字不遮挡视频的交互*/
}
.HomePage-banner-text button{
  width: 200px;
  height: 50px;
  margin-top: 40px;
  border-radius: 40px;
  font-size: 20px;
}
.HomePage-banner-text button:hover{
  background-color: #ccc;
}
</style>
