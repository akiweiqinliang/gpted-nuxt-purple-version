<template>
  <Row type="flex">
    <div class="checkboxHead">
      <Checkbox
        v-if="area.children"
        v-model="checkAll"
        :indeterminate="indeterminate"
        @click.prevent.native="handleCheckAll"
        >{{ area.label }}</Checkbox
      >
    </div>
    <CheckboxGroup
      v-for="item in area.children"
      :key="item.id"
      v-model="checkAllGroup"
      @on-change="checkAllGroupChange"
    >
      <Checkbox :label="item.label"></Checkbox>
    </CheckboxGroup>
  </Row>
</template>
<script>
export default {
  name: 'CheckBoxItem',
  props: {
    area: {
      required: true,
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      indeterminate: false,
      checkAll: false,
      checkAllGroup: [],
    };
  },
  watch: {
    checkAll(val) {
      if (val) {
        this.checkAllGroup = this.area.children.map((item) => item.label);
        this.$emit('checkAreaById', this.area.id, true);
        //   axios area
        if (this.area.id === '4') {
          console.log(`set${this.area.label}-${this.area.id} group = yes`);
        }
        console.log(
          `set${this.area.label}-${this.area.id} group = [${this.checkAllGroup}]`
        );
      } else {
        this.$emit('checkAreaById', this.area.id, false);
        if (!this.indeterminate) {
          this.checkAllGroup = [];
          // axios area
          if (this.area.id === '4') {
            console.log(`set${this.area.label}-${this.area.id} group = no`);
          }
          console.log(
            `set${this.area.label}-${this.area.id} group = [${this.checkAllGroup}]`
          );
        }
      }
    },
  },
  methods: {
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;
      if (this.checkAll) {
        this.checkAllGroup = this.area.children.map((item) => item.label);
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data) {
      if (data.length === this.area.children.length) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
        //   axios area
        console.log(
          `set${this.area.label}-${this.area.id} group = [${this.checkAllGroup}]`
        );
      } else {
        this.indeterminate = false;
        this.checkAll = false;
        //   axios area
        console.log(
          `set${this.area.label}-${this.area.id} group = [${this.checkAllGroup}]`
        );
      }
    },
  },
};
</script>
<style>
.checkboxHead {
  margin-right: 80px;
}
</style>
