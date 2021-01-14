<template>
    <header class="normal-header" :class=image>
        <div><mainmenu /></div>
        <h1 class="center-text">{{title}} <br><span class='accent bolder'>{{orange}}</span></h1>
    </header>
</template>


<script>

export default {
    props: ['title', "image", 'subtitle', 'orange'],
  data() {
    return {
      message: 'asadsaadssd'
    }
  }
}
</script>

<style lang="scss" scoped>
    .normal-header {
        background-color: #07222e;
        height: 70vh;
        min-height: 300px;
        display: flex;    
        justify-content: center;
        align-items: center;
        h1 {
            color: #fff;
            font-weight: bold;
            font-size: 65px;
            line-height: 158.69%;
        }
    @media screen and (max-width: 768px) {
        max-height: 500px;
        padding: 10px;
        h1 {
          font-size: 35px;
        }
        h2 {
          font-size: 25px;
        }
        p {
          font-size: 12px;
        }
      }
    }
</style>

