<template>
  <div class="sidebar_frame" :class="frameHover" :style="`height: ${height}`" @mouseleave="mouseLeave">
    <div class="sidebar_entry" :class='entryHover' @mouseenter="mouseEnter">更多产品</div>
    <template v-if="lists">
      <div v-show="show" class="sidebar-item_frame" v-for="list in lists">
        <a class="sidebar-item_a" :href="list.src"><span class="sidebar-item_img" :style="`background: ${list.imgsrc}`"></span>{{list.text}}</a>
      </div>
    </template>
  </div>
</template>

<script type="text/javascript">
  var src = 'url(https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/logos/bdbri_icons_0a62ce1.png) no-repeat';
  export default {
    name: 'sidebar',
    data() {
      return {
        lists: [{
            text: '音乐',
            src: '#',
            imgsrc: src
          },
          {
            text: '图片',
            src: '#',
            imgsrc: src
          },
          {
            text: '知道',
            src: '#',
            imgsrc: src
          },
          {
            text: '文库',
            src: '#',
            imgsrc: src
          },
          {
            text: '风云榜',
            src: '#',
            imgsrc: src
          },
          {
            text: '全部产品>>',
            src: '#',
            imgsrc: 'none'
          }],
          show: false,
          entryHover: '',
          frameHover: '',
          height: ''
      }
    },
    methods: {
      mouseEnter(e) {
        this.show = true;
        this.entryHover = 'sidebar_entry-hover';
        this.frameHover = 'sidebar_hover';
        const bodyHeight = document.body.clientHeight;
        this.height = bodyHeight - 1 + 'px';
      },
      mouseLeave(e) {
        this.show = '';
        this.entryHover = '';
        this.frameHover = '';
      }
    }
  }
</script>

<style type="text/css">
/*  .sidebar-item_frame {
    display: none;
  }*/
</style>