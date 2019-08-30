<template>
  <div class="header">
    <navbar :topbarNavList="topbarNavList"></navbar>
    <div class="web-header"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '../components/NavBar'


export default {
  name: 'home',
  components: {
    navbar
  },
  data() {
    return {
      topbarNavList: [
        {
          url: "javascript:",
          name: "小米商城"
        },
        {
          url: "javascript:",
          name: "MIUI"
        },
        {
          url: "javascript:",
          name: "IoT"
        },
        {
          url: "javascript:",
          name: "云服务"
        },
        {
          url: "javascript:",
          name: "金融"
        },
        {
          url: "javascript:",
          name: "有品"
        },
        {
          url: "javascript:",
          name: "小爱开放平台"
        },
        {
          url: "javascript:",
          name: "企业团购"
        },
        {
          url: "javascript:",
          name: "资质证照"
        },
        {
          url: "javascript:",
          name: "协议规则"
        },
        {
          url: "javascript:",
          name: "下载app"
        },
        {
          url: "javascript:",
          name: "Select Location"
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>


</style>