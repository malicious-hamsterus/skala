<template>
  <yandex-map class="map-container" style="width: 100%;" :settings="settings":coords="coords":controls="controls":zoom="zoom":scroll-zoom="scrollzoom">
    <div class="adress-container" id="contacts">
      <h3>Контакты</h3>
      <p>г. Алматы, Абая, 44 (Дворец спорта им. Б. Шолака, вход со стороны Байтурсынова)</p>
      <!-- <p><a href="mailto:skalaboulder@gmail.com">skalaboulder@gmail.com</a></p> -->
      <p><a class="bolder" href="tel:+77775716006">+ 7 777 571 6006</a></p>
      <p><a class="bolder" href="tel:+7773160001">+ 7 777 316 0001</a></p>
      
        <div class="social">
            <a target="_blank" href="https://vk.com/public189782356" class="vk"></a>
            <a target="_blank" href="https://www.instagram.com/skala_boulder/" class="inst"></a>
            <a target="_blank" href="https://www.facebook.com/skalaboulder" class="fb"></a>
        </div>
    </div>
      <ymap-marker 
      marker-id="123" 
      :coords="coordsMarker"
      :icon="markerIcon"
    />
  </yandex-map>

</template>
<style lang="scss" scoped>

  .social {
    display: flex;
    a {
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
    .vk {
      margin-right: 30px;
      background-image: url(../../assets/img/vk.svg);
    }
    .inst {
      background-image: url(../../assets/img/inst.svg);
      margin-right: 30px;
    }
    .fb {
      background-image: url(../../assets/img/fb.svg);
    }
  }
</style>
<script>
// let width = window.innerWidth;
// window.addEventListener('resize', () => {
//   width = window.innerWidth
//   console.log(width)
// })
export default {
  data: () => ({
    width:0,
    settings: {
        apiKey: '7289c68c-863b-4603-8afe-9830ef1492cb',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
    },
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: './assets/img/marker.svg',
      imageSize: [43, 43],
      imageOffset: [0, 0],
      // content: 'skala boulder',
      // contentOffset: [-75, 20],
      // contentLayout: '<div style="background:#FF7F0A; width: 150px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    },    
    controls:[],
    coords: [43.240015, 76.929849],
    coordsMarker: [43.240010, 76.927036],
    zoom: 16,
    scrollzoom: false,
  })
}
</script>