<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  background: url(./assets/logo.png) center center
}

.layout-nav {
  width: 520px;
  margin: 0 auto;
}

.layout-nav a {
  color: #80848f;
}

.layout-nav a:hover {
  color: #fff;
}

.ivu-menu-item-active a {
  color: #fff;
}

.layout-assistant {
  width: 300px;
  margin: 0 auto;
  height: inherit;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
</style>
<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <Menu-item name="1">
          <Icon type="chatbubbles"></Icon>
          <router-link to="/consult">咨询管理</router-link>
        </Menu-item>
        <Menu-item name="2">
          <Icon type="gear-a"></Icon>
          <router-link to="/dailywork">服务管理</router-link>
        </Menu-item>
        <Menu-item name="3">
          <Icon type="ios-telephone"></Icon>
          <router-link to="/rptservice">报告深度解读</router-link>
        </Menu-item>
        <Menu-item name="4">
          <Icon type="ios-people"></Icon>
          <router-link to="/doctorpower">竟争力周报</router-link>
        </Menu-item>
      </div>
    </Menu>
    <!--<Menu mode="horizontal" active-name="1">
              <div class="layout-assistant">
                  <Menu-item name="1">二级导航</Menu-item>
                  <Menu-item name="2">二级导航</Menu-item>
                  <Menu-item name="3">二级导航</Menu-item>
              </div>
          </Menu>-->
    <!--<div class="layout-breadcrumb">
              <Breadcrumb>
                  <Breadcrumb-item href="#">首页</Breadcrumb-item>
                  <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                  <Breadcrumb-item>某应用</Breadcrumb-item>
              </Breadcrumb>
          </div>-->
    <div id="app" class="layout-content">
      <router-view></router-view>
    </div>
    <!--<div class="layout-copy">
              2011-2017 &copy; 上海好卓数据服务有限公司
          </div>-->
  </div>
</template>

<script>
export default {
  name: 'electronvuedsp'
}
</script>
