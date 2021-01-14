
          <template>
          <div class="description-phone">
            <div class="container">
              <p>По всем оставшимся вопросам вы можете связаться с нами:</p>
              <a href="mailto:skalaboulder@gmail.com">skalaboulder@gmail.com</a>
              <a href="tel:+77775716006">+ 7 777 571 6006</a>
              <a href="tel:+77773160001">+ 7 777 316 0001</a>
              <p class="social">Соц сети 
                <!-- <a target="_blank" href="https://vk.com/public189782356" class="vk"></a> -->
                <a target="_blank" href="https://www.instagram.com/skala_boulder/" class="inst"></a>
                <a target="_blank" href="https://www.facebook.com/skalaboulder" class="fb"></a>
              </p>
              <p>Адрес: Абая, 44, Дворец Спорта им. Балуана Шолака, вход со стороны улицы Байтурсынова</p>
            </div>
          </div>
        </template>

<style lang="scss" scoped>
        .social {
    display: flex;
    a {
      margin-top: 7px;
      margin-right: 13px;
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      opacity: 0.8;
      &:hover {
        background-color: #ffffff;
        opacity: 1;
      }
    }
    & a:first-child{
      margin-left: 30px;
    }
    .vk {
      background-image: url(../../assets/img/vk.svg);
    }
    .inst {
      background-image: url(../../assets/img/inst.svg);
    }
    .fb {
      background-image: url(../../assets/img/fb.svg);
    }
  }
  </style>