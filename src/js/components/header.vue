<template>
    <header class="normal-header" :class=image>
        <div><mainmenu /></div>
        <h1>{{title}}</h1>
    </header>
</template>


<script>
export default {
    props: ['title', 'image'],
  data() {
    return {
      message: 'asadsaadssd'
    }
  }
}
</script>


