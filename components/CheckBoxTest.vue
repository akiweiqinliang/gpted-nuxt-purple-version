<template>
  <Row class="moreSelections">
    <Col span="3">区域</Col>
    <Col span="21">
      <div class="allCheck">
        <Checkbox
          v-model="checkAll"
          :indeterminate="indeterminate"
          @click.prevent.native="handleCheckAll"
          >全选</Checkbox
        >
      </div>
      <check-box-item
        v-for="key in Object.keys(areas)"
        :key="areas[key].id"
        :ref="key"
        :area="areas[key]"
        class="checkBoxItem"
        @checkAreaById="checkAreaById"
      />
    </Col>
  </Row>
</template>
<script>
import { areas } from '~/enums/areas';
export default {
  name: 'CheckBoxTest',
  data() {
    return {
      areas,
      indeterminate: false,
      checkAll: false,
      checkAllGroup: [],
    };
  },
  methods: {
    checkAreaById(areaId, flag) {
      flag
        ? this.checkAllGroup.push(areaId)
        : (this.checkAllGroup = this.checkAllGroup.filter(
            (value) => value !== areaId
          ));
      this.checkAll =
        this.checkAllGroup.length === Object.keys(this.areas).length;
      // axios 设定全选的区域id list 为了判断 大洋洲 no child
      // console.log(`set areas id = [${this.checkAllGroup}]`)
    },
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        // 仅控制样式 不发送请求
        Object.keys(this.areas).forEach((key) => {
          const area = this.$refs[key][0];
          area.checkAll = true;
          area.indeterminate = false;
        });
      } else {
        Object.keys(this.areas).forEach((key) => {
          this.$refs[key][0].checkAll = false;
        });
      }
    },
  },
};
</script>
<style scoped lang="scss">
.checkBoxItem {
  width: 100%;
}
</style>
