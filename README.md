# vue-area
mint-ui的picker结合的一个地址三联动组件

前期准备：
请在vue项目中的main.js中

step1:引入mint-ui框架库

import MintUI from 'mint-ui'

Vue.use(MintUI)

step2: 引入地址组件，

import area from '@/components/common/Area' // 地址组件

Vue.component('area', area)

=========
然后，在需要用到area组件的地方，以标签area的形式即可进行引用
