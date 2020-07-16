<template>
  <div id="app">
    <div class="logo">
      <img src="../assets/scape.png" alt="" class="Rotation img">
      <p>请使用横屏</p>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',

}
</script>

<style scoped>
 #app {

            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            opacity:0.5;
            background-color: #000;
        }
        
        @keyframes rotation {
            from {
                transform: rotate(-90deg);
            }
            to {
                transform: rotate(0deg);
            }
          
        }

        .Rotation {
            transform: rotate(-90deg);
            animation: rotation 1s linear infinite;
           
        }

        .img {
            width: 100%;
            height: 100%;
        }
        .logo p{
          color: white;
          text-align: center;
          margin-top: 100px;
          font-size: 18px;
          font-weight: bold;
        }
</style>
