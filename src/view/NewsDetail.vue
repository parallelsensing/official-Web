<template>
    <div class="custom-container">
        <div class="nav container text-center custom-margin-bottom">
            <h2>{{ newsList[id].title }}</h2>

            <img :src="newsList[id].imageUrl" alt="" class="custom-image">
            <div class="content">
                <p>{{ newsList[id].content }}</p>
            </div>

        </div>
    </div>
</template>

<script setup name="NewsDetail">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
// 引入图片资源
import newsImg1 from '@/assets/img/新闻资讯.jpg'
import newsImg2 from '@/assets/img/新闻资讯2.png'
import newsImg3 from '@/assets/img/新闻资讯3.jpg'
import testImg from '@/assets/img/test.png'

const route = useRoute();
const { id, news } = route.query;
const newsList = ref([]);

const newsCompanyList = [
    { id: 1, title: '人工智能', content: '近日，人工智能（AI）在医疗领域再次取得了突破性进展。研究团队利用深度学习算法成功开发出一款能够提前预测心脏病发作风险的AI模型。该模型通过分析患者的电子健康记录、基因数据和生活习惯，准确率高达90%以上。专家表示，这一创新有望大幅降低心脏病的突发率，挽救数百万人的生命。', imageUrl: newsImg1 },
    { id: 2, title: '新闻标题2', content: '新闻内容2', newsImg2 },
    { id: 3, title: '新闻标题3', content: '新闻内容3', imageUrl: newsImg3 },
    { id: 4, title: '新闻标题4', content: '新闻内容4', imageUrl: newsImg1 },
    { id: 5, title: '新闻标题5', content: '新闻内容5', newsImg2 },
    { id: 6, title: '新闻标题6', content: '新闻内容6', imageUrl: newsImg1 }
];
const newsIndustryList = [
    { id: 1, title: '智慧驾驶', content: 'cc近日，人工智能（AI）在医疗领域再次取得了突破性进展。研究团队利用深度学习算法成功开发出一款能够提前预测心脏病发作风险的AI模型。该模型通过分析患者的电子健康记录、基因数据和生活习惯，准确率高达90%以上。专家表示，这一创新有望大幅降低心脏病的突发率，挽救数百万人的生命。', imageUrl: testImg },
    { id: 2, title: '新闻标题2', content: '新闻内容2', newsImg2 },
    { id: 3, title: '新闻标题3', content: '新闻内容3', imageUrl: newsImg3 },
    { id: 4, title: '新闻标题4', content: '新闻内容4', imageUrl: newsImg1 },
    { id: 5, title: '新闻标题5', content: '新闻内容5', newsImg2 },
    { id: 6, title: '新闻标题6', content: '新闻内容6', imageUrl: newsImg1 }
];

watch([() => route.query.id, () => route.query.news], ([newId, newNews]) => {
    newsList.value = newNews === 'company' ? newsCompanyList : newsIndustryList;
}, { immediate: true });

</script>

<style scoped>
.custom-container {
    min-height: 40vh;
}

.custom-margin-bottom {
    margin-bottom: 100px;
}

.custom-image {
    max-width: 500px;
    max-height: 300px;
    margin: 20px auto;
}
</style>
