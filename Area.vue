<template>
  <div class="area">
    <div class="control">
      <input type="text" placeholder="省/市/区" v-model="region" maxlength="80" readonly="readonly" @click="showAddressPicker" />
    </div>
    <!-- 省市区地址选择 -->
    <mt-popup v-model="regionVisible" position="bottom">
      <mt-picker :slots="myAddressSlots" valueKey="name" :visibleItemCount="5" @change="addressChange" :itemHeight="40"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
import addrlist from '@/assets/data/threeLevelAddress.json' // 引入地址的json数据
// 与mint-ui结合的 vue地址三联动选择
export default {
  name: 'area',
  data () {
    return {
      regionVisible: false, // 弹出框默认是否可见
      region: '',
      // picker组件插槽
      myAddressSlots: [
        // 省
        {
          flex: 1,
          values: this.getProvinceArr(), // ['广东'], // 省份数组
          className: 'slot1',
          textAlign: 'left'
        },
        // 分隔符
        {
          divider: true,
          content: '-',
          className: 'slot2'
        },
        // 市
        {
          flex: 1,
          values: this.getCityArr("440000"), // []
          className: 'slot3',
          textAlign: 'left'
        },
        {
          divider: true,
          content: '-',
          className: 'slot4'
        },
        // 县
        {
          flex: 1,
          values: this.getCountyArr("440500"), // []
          className: 'slot5',
          textAlign: 'left'
        }
      ]
    }
  },
  methods: {
    showAddressPicker () {
      this.regionVisible = true;
    },
    addressChange (picker, values) {
      let provicename = values[0]['name'] ? values[0]['name'] : '';
      let cityname = values[1]['name'] ? values[1]['name'] : '';
      let areaname = values[2]['name'] ? values[2]['name'] : '';
      this.region = provicename + '-' + cityname + '-' + areaname;

      // 给市、县赋值
      picker.setSlotValues(1, this.getCityArr(values[0]["code"]));
      picker.setSlotValues(2, this.getCountyArr(values[1]["code"]));
    },
    getProvinceArr () {
      let gp = addrlist.province;
      return gp;
    },
    getCityArr (code) {
      let p = addrlist.city[code];
      let cityname = p.map(item => item.name);
      // console.log(p);
      return p;
    },
    getCountyArr (code) {
      let s = addrlist.area[code];
      if (s) {
        let countyname = s.map(item => item.name);
      }
      // console.table(code, s);
      return s;
    }
  }
}
</script>
<style lang="scss" scoped>
.area {
  padding-bottom: 0.2667rem /* 20/75 */;
  .control {
    input {
      width: 9rem;
      padding: 0.32rem /* 24/75 */;
      margin: 0.08rem /* 6/75 */ auto;
      border-radius: 0.08rem /* 6/75 */;
      border: 0.0267rem /* 2/75 */ solid #e1e1e1;
      background: #ffff;
      font-size: 0.4267rem /* 32/75 */;
    }
  }
  /deep/ .mint-popup {
    width: 10rem;
  }
}
</style>
