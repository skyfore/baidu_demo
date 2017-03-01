<template>
  <div class="foot_frame">
    <div class="qrcode_frame">
      <div class="qrcode-item_frame" v-for="qr in QRcode">
        <img :src="qr.src" class="qrcode-item_img">
        <div class="qrcode-item_text">
          <p>
            <b>{{qr.text}}</b>
          </p>
        </div>
      </div>
    </div>
    <div class="link_frame">
      <a class="link_text" v-for="link in links" :href="link.src">{{link.text}}</a>
    </div>
    <div class="copyright_frame">
    ©{{copyRight.time}} Baidu
    <a href="http://www.baidu.com/duty/">使用百度前必读</a>
    <a href="http://jianyi.baidu.com/" class="cp-feedback">意见反馈</a>
    {{copyRight.icp}}
    <i class="c-icon-icrlogo"></i>
    <a class="jgwab" target="_blank" :href="copyRight.record.src">{{copyRight.record.text}}</a>
    <i class="c-icon-jgwablogo"></i></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'foot',
    data() {
      return {
        QRcode: [{
          text: '手机百度',
          src: 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_efde696.png'
        }],
        links: [{
          text: '把百度设为首页',
          src: '#'
        },
        {
          text: '关于百度',
          src: '#'
        },
        {
          text: 'About Baidu',
          src: '#'
        },
        {
          text: '百度推广',
          src: '#'
        }],
        copyRight: {
          time: new Date().getFullYear(),
          record: {
            text: '京公网安备11000002000001号',
            src: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001'
          },
          icp: '京ICP证030173号'
        }
      }
    }
  }
</script>