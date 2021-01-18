
          <template>
          <div class="description-phone">
            <div class="container">
              <p>Контакты:</p>
              <!-- <a href="mailto:skalaboulder@gmail.com">skalaboulder@gmail.com</a> -->
              <a href="tel:+77775716006">+ 7 777 571 6006</a>
              <a href="tel:+77773160001">+ 7 777 316 0001</a>
              <div class="social">
                <!-- <a target="_blank" href="https://vk.com/public189782356" class="vk"></a> -->
                <a target="_blank" href="https://www.instagram.com/skala_boulder/" class="inst"><span class="social-deskript"> @skalaboulder</span></a>
                <a target="_blank" href="https://www.instagram.com/boulder_monkey/" class="inst"><span class="social-deskript">@bouldermonkey</span></a>
                <a target="_blank" href="https://www.facebook.com/skalaboulder" class="fb"><span class="social-deskript">skalaboulder</span></a>
              </div>
              <p>Адрес: Абая, 44, Дворец Спорта им. Балуана Шолака, вход со стороны улицы Байтурсынова</p>
            </div>
          </div>
        </template>

<style lang="scss" scoped>
        .social {
    display: flex;
    a {
      background-position: 0 6px;
      height: 40px;
      display: flex;
      align-items: center;
      margin-right: 13px;
      display: block;
      background-repeat: no-repeat;
      padding-left: 35px;
      opacity: 0.8;
      &:hover {
        background-color: #ffffff;
        opacity: 1;
      }
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
  
  @media screen and (max-width: 768px) {
    & .container {
      padding: 10px;
    }
    .social {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      a {
        .social-deskript {
          display: inline;
        }
        padding-left: 40px;
        border-radius: 0;
        background-repeat: no-repeat;
        width: 100%;
        
        &:first-child {
          margin-left: 0 !important;
        }
      }
    }
  }
  </style>