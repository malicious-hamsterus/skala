<template>
  <yandex-map class="map-container" style="width: 100%;" :settings="settings":coords="coords":controls="controls":zoom="zoom":scroll-zoom="scrollzoom">
    <div class="adress-container" id="contacts">
      <h3>Как нас найти</h3>
      <p>г. Алматы, Абая, 44 (Дворец спорта им. Б. Шолака, вход со стороны Байтурсынова)</p>
      <p><a href="mailto:skalaboulder@gmail.com">skalaboulder@gmail.com</a></p>
      <p><a class="bolder" href="tel:+77775716006">+ 7 777 571 6006</a></p>
    </div>
      <ymap-marker 
      marker-id="123" 
      :coords="coordsMarker"
      :icon="markerIcon"
    />
  </yandex-map>

</template>
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