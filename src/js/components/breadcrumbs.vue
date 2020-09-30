
<template>
    <div class="container breadcrumbs">
        <ul>
            <li><a href="./">Главная</a></li>
            <li><a href="">{{title}}</a></li>
        </ul>
    </div>
</template>


<script>
export default {
    props: ['title'],
  data() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>

.breadcrumbs {
  li {
    display: inline-block;
    margin-right: 18px;
    position: relative;
    &:before {
      display: block;
      content: '•';
      position: absolute;
      width: 5px;
      height: 5px;
      opacity: 0.5;
      left: -14px;
      top: 2px;
    }
    &:first-child::before {
      display: none;
    }
    a {
      font-size: 14px;
      line-height: 16px;
      color: #0E242C;
      opacity: 0.5;
    }
  }
}
</style>