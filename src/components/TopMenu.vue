<template>
  <div class="menu_frame">
    <template v-if="lists">
      <div class="menu-item_frame" v-for="list, index in lists" @mouseenter="mouseEnter(index)" @mouseleave="mouseLeave(index)">
        <a class="menu-item_a" :href="list.src">{{list.text}}</a>
        <template v-if="list.downs">
          <div class="menu-item_down" v-show="showDown[index]">
            <div class="nuarrow"><em></em><i></i></div>
            <a class="menu-item_down-item" v-for="down in list.downs" :href="down.src">{{down.text}}</a>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'menu',
    data() {
      return {
        lists: [{
          text: '糯米',
          src: '#'
        },
        {
          text: '新闻',
          src: '#'
        },
        {
          text: 'hao123',
          src: '#'
        },
        {
          text: '地图',
          src: '#'
        },
        {
          text: '视频',
          src: '#'
        },
        {
          text: '贴吧',
          src: '#'
        },
        {
          text: '登录',
          src: '#'
        },
        {
          text: '设置',
          src: '#',
          downs: [{
            text: '搜索设置',
            src: '#'
          },
          {
            text: '高级搜索',
            src: '#'
          },
          {
            text: '关闭预测',
            src: '#'
          },
          {
            text: '搜索历史',
            src: '#'
          }]
        },
        {
          text: '更多产品',
          src: '#'
        }],
        showDown: []
      }
    },
    methods: {
      mouseEnter(index) {
        let length = this.lists.length;
        this.showDown = new Array(length);
        // this.showDown[index] = true;
        // 当你利用索引直接设置一个项时，例如： vm.items[indexOfItem] = newValue
        //当你修改数组的长度时，例如： vm.items.length = newLength
        this.showDown.splice(index, 1, true);
      },
      mouseLeave(index) {
        //this.showDown[index] = false;
        this.showDown.splice(index, 1, false);
      }
    }
  }
</script>
