<template>
  <!--  <div style="background: #02051f">-->
  <!--    <Row>-->
  <!--      <div class="left">-->
  <!--        404-->
  <!--        <button class="ui button">返回</button>-->
  <!--        &lt;!&ndash;          <div class="content__item">&ndash;&gt;-->
  <!--        <button class="button button&#45;&#45;rhea"><span>Delete</span></button>-->
  <!--        &lt;!&ndash;          </div>&ndash;&gt;-->

  <!--        <a class="ui teal tag label">Featured</a>-->
  <!--        <div class="row ui" style="padding: 20px 60px">-->
  <!--          <div class="ui grid">-->
  <!--            <div class="column">-->
  <!--              <div class="ui raised segment">-->
  <!--                <a class="ui red ribbon label">Overview</a>-->
  <!--                <span>Account Details</span>-->
  <!--                <p></p>-->
  <!--                <a class="ui teal ribbon label">Community</a> User Reviews-->
  <!--                <p></p>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="right">-->
  <!--        <div class="imgBox">-->
  <!--          <img class="hovering-photo" src="~~/assets/discoverPage.png" />-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </Row>-->

  <!--    <Row class="colorCards">-->
  <!--      <div class="colorCard color1">-->
  <!--        <div class="miniBoxs">-->
  <!--          <div class="miniBox rotate1">-->
  <!--            &lt;!&ndash;            <img src="~/assets/discoverPage.png" alt="发现页" />&ndash;&gt;-->
  <!--            <h2>更多优惠</h2>-->
  <!--          </div>-->
  <!--          <div class="miniBox rotate2">-->
  <!--            <img src="~/assets/discoverPage.png" alt="" />-->
  <!--          </div>-->
  <!--          <div class="miniBox rotate3">-->
  <!--            <img src="~/assets/discoverPage.png" alt="" />-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <h1>title1</h1>-->
  <!--        <button class="button inverted olive ui">button1</button>-->
  <!--      </div>-->
  <!--      <div class="colorCard color2">-->
  <!--        <h1>title2</h1>-->
  <!--        <button class="button secondary ui rightCardBtn">Learn More</button>-->
  <!--      </div>-->
  <!--    </Row>-->
  <!--  </div>-->
  <div class="errorPage">
    <div class="outline-text">404</div>
    <Button type="primary" size="large" @click="handleBack">Back</Button>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage404',
  methods: {
    handleBack() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/page404.scss';

.left {
  width: 50%;
}
.right {
  width: 50%;
  padding: 40px 60px;
}
.hovering-photo {
  width: 100%;
  border-radius: 2px;
  @extend %hoveringStyle;
  //perspective: 200px;
  //perspective-origin: 40%;
  //box-shadow: 0 55px 70px -20px rgba(50, 50, 93, 0.55),
  //  0 20px 30px -10px rgba(0, 0, 0, 0.14);
  //-webkit-animation: profit-hover 3.5s ease-in-out infinite,
  //  profit-shadow 3.5s ease-in-out infinite;
  //animation: profit-hover 3.5s ease-in-out infinite,
  //  profit-shadow 3.5s ease-in-out infinite;
}

.colorCards {
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
  .colorCard {
    width: 400px;
    height: 400px;
    margin: 40px;
    border-radius: 4px;
    padding: 40px;
    box-shadow: $useful-box-shadow-without-color;
    transform: translateY(0px);
    transition: all 0.3s;
  }
  .colorCard:hover {
    width: 405px;
    height: 405px;
    transform: translateY(-10px);
    box-shadow: $useful-box-shadow-with-color;
  }
  .color1 {
    background: $card-bg-color1;
    h1 {
      color: $card-title-color1;
    }
  }
  .color2 {
    background: $card-bg-color2;
    h1 {
      color: $card-title-color2;
    }
  }
}

.miniBoxs {
  display: flex;
  position: relative;
  justify-content: center;
  .miniBox {
    width: 120px;
    padding: 8px 4px;
    border-radius: 4px;
    img {
      width: 100%;
      display: block;
    }
  }
}

@mixin rotates {
  transform: rotate(0deg) translate(0px, 0px);
  opacity: 0;
  transition: all 0.3s;
  position: absolute;
}

.rotate1,
.rotate2,
.rotate3 {
  display: flex;
  position: relative;
  justify-content: center;
  @include rotates;
}
.colorCard:hover {
  .rotate1,
  .rotate2,
  .rotate3 {
    opacity: 1;
  }
  .rotate1 {
    transform: rotate(-14deg) translate(-50px, -150px);
    //background: lightblue;
  }
  .rotate2 {
    transform: rotate(0deg) translate(0px, -150px);
    background: #4e505c;
  }
  .rotate3 {
    transform: rotate(14deg) translate(50px, -150px);
    background: #497bf3;
  }
}
.outline-text {
  height: auto;
  color: rgba(51, 51, 51, 0.1);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 250px;
  display: flex;
}
.outline-text {
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffcbcb;
}
.rightCardBtn {
  border-radius: 0;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: all 300ms ease;
}
.rightCardBtn:hover {
  box-shadow: 7px 7px 0 rgba(0, 0, 0, 0.2);
}

//----------------------

.button {
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7e7;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}
.button--rhea {
  font-family: freight-display-pro, serif;
  font-weight: 900;
  font-style: normal;
  width: 180px;
  height: 180px;
  color: #000;
  background: none;
}
.button--rhea::before {
  content: '';
  z-index: -1;
  background: #e7e7e7;
  -webkit-clip-path: polygon(
    20% 30%,
    0 30%,
    0 50%,
    0 70%,
    20% 70%,
    50% 70%,
    80% 70%,
    100% 70%,
    100% 50%,
    100% 30%,
    80% 30%,
    50% 30%
  );
  clip-path: polygon(
    20% 30%,
    0 30%,
    0 50%,
    0 70%,
    20% 70%,
    50% 70%,
    80% 70%,
    100% 70%,
    100% 50%,
    100% 30%,
    80% 30%,
    50% 30%
  );
  transition: clip-path 0.4s cubic-bezier(0.3, 1, 0.2, 1),
    -webkit-clip-path 0.4s cubic-bezier(0.3, 1, 0.2, 1),
    transform 0.4s cubic-bezier(0.3, 1, 0.2, 1), background 0.4s ease;
}
.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button--rhea span {
  display: block;
  transition: transform 0.4s cubic-bezier(0.3, 1, 0.2, 1), opacity 0.05s;
}

.button--rhea:hover::before {
  background: #000;
  transform: scale3d(0.7, 0.7, 1);
  -webkit-clip-path: polygon(
    30% 10%,
    10% 30%,
    30% 50%,
    10% 70%,
    30% 90%,
    50% 70%,
    70% 90%,
    90% 70%,
    70% 50%,
    90% 30%,
    70% 10%,
    50% 30%
  );
  clip-path: polygon(
    30% 10%,
    10% 30%,
    30% 50%,
    10% 70%,
    30% 90%,
    50% 70%,
    70% 90%,
    90% 70%,
    70% 50%,
    90% 30%,
    70% 10%,
    50% 30%
  );
}
.button--rhea::before {
  content: '';
  z-index: -1;
  background: #e7e7e7;
  -webkit-clip-path: polygon(
    20% 30%,
    0 30%,
    0 50%,
    0 70%,
    20% 70%,
    50% 70%,
    80% 70%,
    100% 70%,
    100% 50%,
    100% 30%,
    80% 30%,
    50% 30%
  );
  clip-path: polygon(
    20% 30%,
    0 30%,
    0 50%,
    0 70%,
    20% 70%,
    50% 70%,
    80% 70%,
    100% 70%,
    100% 50%,
    100% 30%,
    80% 30%,
    50% 30%
  );
  transition: clip-path 0.4s cubic-bezier(0.3, 1, 0.2, 1),
    -webkit-clip-path 0.4s cubic-bezier(0.3, 1, 0.2, 1),
    transform 0.4s cubic-bezier(0.3, 1, 0.2, 1), background 0.4s ease;
}
.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.errorPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
}
</style>
