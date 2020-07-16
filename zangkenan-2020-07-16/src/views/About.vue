<template>
  <div class="about">
    <nav></nav>
    <section>
      <div class="box">
        <div class="box_image" v-for="(item , index) in list" :key="index">
          <img :src="item.src" alt />
        </div>
        <div class="box_image box_image_top">
          <div v-for="(item,index) in  data" :key="index">
            <img :src="item.src" alt />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// 我应该封装成函数的，但时间来不及了
require("../assets/img-1.jpg");
export default {
  data() {
    return {
      list: "",
      data: ""
    };
  },
  created() {
    // 封装函数在http.js
    this.$http({
      // 使用的postman模拟的接口
      url: "https://a88a2270-f375-412c-a5c2-649a5bdeb44d.mock.pstmn.io/image",
      type: "get"
    })

      .then(
        function(data) {
          console.log("$http", data);
          this.data = data.data;
          this.list = data.list;
          console.log(data.data);
        }.bind(this)
      )
      .catch(
        function(err) {
          console.log(err);
        }.bind(this)
      );
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #21262c;
}
nav {
  background: url(../assets/iphone_01.png) no-repeat;
  height: 50px;
}
.nav li {
  color: #fff;
  margin: 40px;
  list-style: none;
}
.nav a {
  color: #fff;
  text-decoration: none;
}
a:hover {
  color: #eb9d39;
}
.nav {
  display: flex;
  margin-left: 100px;
}
.box {
  margin: 132px;
}
.box_image {
  margin-bottom: 95px;
}

/* 判断ipad */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  nav {
    background: url(../assets/moblie00.png) no-repeat;
    height: 78px;
  }
  .box_image {
    margin-right: 40px;
    margin-bottom: 100px;
  }
  .box_image img {
    width: 400px;
    height: 400px;
  }
  .box_image:nth-child(2n) {
    margin-right: 0px;
  }
  .box {
    margin: 90px;
    display: flex;
    flex-wrap: wrap;
  }
}
/* pc端 */
@media (min-width: 1280px) {
  .box_image {
    margin-right: 65px;
    margin-bottom: 100px;
  }
  .box_image img {
    width: 400px;
    height: 400px;
  }
  .box_image:nth-child(3n){
    margin-right: 0;
  }
  .box {
    margin: 200px;
    display: flex;
    flex-wrap: wrap;
  }
  nav {
    background: url(../assets/pc0.png) no-repeat;
    height: 260px;
  }
  .box {
    margin: 260px;
    display: flex;
    flex-wrap: wrap;
  }
}
/* iphone 6 7 8 */
@media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
  .box_image img {
    width: 400px;
    height: 400px;
    
  }
.box_image{
  margin-right: 117px;
    margin-bottom: 94px;
}
.box_image:nth-child(2n){
  margin-right: 0;
}
  .small_image {
    display: flex;
    flex-wrap: wrap;
  }
.box_image_top{
 margin-right: 15px;
    margin-bottom: 30px;
}
.box_image_top:nth-child(2n){
  margin-right: 0;
}
  .box_image_top img {
    width: 185px;
    height: 185px;
   
  }
}
/* ipad pro */
@media only screen and (min-width: 1366px) and (max-width: 1366px) and (orientation: landscape) {
  .box_image img {
    width: 400px;
    height: 400px;
    
  }
  .box_image{
margin-right: 40px;
    margin-bottom: 100px;
  }
  .box_image:nth-child(3) {
    margin-right: 40px;
  }
  .box {
    margin: 200px;
    display: flex;
    flex-wrap: wrap;
  }
}

.box_image_top {
  width: 400px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
}
.small_image {
  display: flex;
  flex-wrap: wrap;
}
.box_image_top img {
  width: 185px;
  height: 185px;
  margin-right: 15px;
  margin-bottom: 30px;
}
</style>
