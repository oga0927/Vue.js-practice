<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">fade</button>
    <p>{{myAnimation}}</p>
    <button @click="show = !show">切り替え</button>
    <br><br>
    <transition
      ：CSS="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
        
      @before-leave="beforeLeave"
      @leave="Leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div 
        class="circle" 
        v-if="show"
      ></div>
    </transition>
    <br>
    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>
    <transition 
      name="fade"
      mode="out-in"
    >
      <component :is="myComponent"></component>
    </transition>
    <transition 
         name="fade" 
         mode="out-in">
      <p 
         v-if="show"
         key="bye"
      >いらっしゃいませ</p>
      <p 
         v-if="!show" 
         key="hello"
      >ありがとうございました</p>
    </transition>
    <transition 
      enter-active-class="animate__animated animate__rubberBand"
      leave-active-class="animate__animated animate__fadeInLeft"
      appear
    >
      <p v-if="show">hello</p>
    </transition>
    <transition 
      :name="myAnimation" 
      appear
    >
      <p v-if="show">bye</p>
    </transition>
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue"
import ComponentB from "./components/ComponentB.vue"
export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      show: true,
      myAnimation: 'slide',
      myComponent: "ComponentA"
    };
  },
  methods: {
    /* eslint-disable */
    beforEnter(el, done) {
      // 現れる前
    },
    enter(el,done) {
      // 現れるとき
      let scale =0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1
        if ( scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 200);
    },
    afterEnter(el) {// eslint-disable-line
      // 現れた後
    },
    enterCancelled(el) {
      // 現れるアニメーションがキャンセルされた時
    },
    beforLeave(el) {
      // 消える前
    },
    Leave(el,done) {
      // 消えるとき
      let scale =1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1
        if ( scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 200);
    },
    afterLeave(el) {
      // 現れた後
    },
    leaveCancelled(el) {
      // 消えるアニメーションがキャンセルされた時
    },
    /* eslint-enable */
  }
}
</script> 

<style scoped>
  .circle {
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 100px;
    background-color: deeppink;
  }





  .fade-enter {
    /* 現れる時の最初の状態 */
    opacity: 0;
  }
  .fade-enter-active {
    /* 現れる時のトランジョンの状態 */
     transition: 0.5s;
  }
  .fade-enter-to {
    /* 現れる最後の状態 */
    opacity: 1;

  }
  .fade-leave {
    /* 消える時の最初の状態 */
    opacity: 1;
  }
  .fade-leave-active {
    /* 消える時のトランジョンの状態 */
  transition: opacity 0.5s;
  }
  .fade-leave-to {
    /* 消える時の最後の状態 */
    opacity: 0;
  }

  .slide-enter,
  .slide-leave-to {
    opacity: 0;
  }



  .slide-enter-active {
    animation: slide-in 0.5s;
    transition: opacity 1s;
  }

  .slide-leave-active {
    animation: slide-in 0.5s reverse;
    transition: opacity 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0);
    }
  }

  .main {
    width: 70%;
    margin: auto;
    padding: 5rem;
    text-align: center ;
  }
</style>