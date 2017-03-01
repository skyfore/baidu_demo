<template>
  <div class="main_frame">
    <div class="banner_frame">
      <img class="banner_img" :src="banner.src" :alt="banner.text">
    </div>
    <div class="search_frame">
      <form class="search_form">
        <div class="search_span" :class="status" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
          <input class="search_input" type="text" name="keywords" autofocus="true" @blur="blurHandle" @click="clickHandle">
          <span class="search_soutu"></span>
        </div><button class="search_btn">{{button}}</button>
      </form>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'main',
    data() {
      return {
        banner: {
          text: '百度一下',
          src: 'https://www.baidu.com/img/bd_logo1.png'
        },
        button: '百度一下',
        hover: 'search_hover',
        focus: 'search_focus',
        status: ''
      }
    },
    methods: {
      mouseEnter() {
        this.status = this.status ? this.status : this.hover;
      },
      mouseLeave() {
        this.status = this.status === this.focus ? this.status : '';
      },
      clickHandle() {
        this.status = this.focus;
      },
      blurHandle() {
        this.status = '';
      }
    },
    created() {
      this.status = this.focus;
    }
  }
</script>