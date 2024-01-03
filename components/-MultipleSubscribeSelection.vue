<template>
  <Row class="moreSelections">
    <Col span="3">区域</Col>
    <Col>
      <div class="allCheck">
        <Checkbox :value="all" @click.prevent.native="checkAllAreas"
          >全部</Checkbox
        >
      </div>
      <Row type="flex">
        <div class="checkboxHead">
          <Checkbox
            :indeterminate="asiaIndeterminate"
            :value="checkAsia"
            @click.prevent.native="handleCheckAllByType('Asia')"
            >{{ areas.Asia.label }}</Checkbox
          >
        </div>
        <CheckboxGroup
          v-model="checkAsiaGroup"
          @on-change="checkAsiaGroupChange"
        >
          <Checkbox
            v-for="item in areas.Asia.children"
            :key="item.id"
            :label="item.label"
          ></Checkbox>
        </CheckboxGroup>
      </Row>

      <Row type="flex">
        <div class="checkboxHead">
          <Checkbox
            :indeterminate="europeIndeterminate"
            :value="checkEurope"
            @click.prevent.native="handleCheckAllByType('Europe')"
            >{{ areas.Europe.label }}</Checkbox
          >
        </div>
        <CheckboxGroup
          v-model="checkEuropeGroup"
          @on-change="checkEuropeGroupChange"
        >
          <Checkbox
            v-for="item in areas.Europe.children"
            :key="item.id"
            :label="item.label"
          ></Checkbox>
        </CheckboxGroup>
      </Row>
    </Col>
  </Row>
</template>

<script>
export default {
  name: 'MultipleCheckBoxSelection',
  props: {
    areas: {
      required: true,
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      // checkAllGroup: [],
      // asia
      checkAsia: false,
      checkAsiaGroup: [],
      //   Europe
      checkEurope: false,
      checkEuropeGroup: [],
    };
  },
  computed: {
    all: {
      get() {
        return this.checkAsia && this.checkEurope;
      },
      set(value) {
        // 在这个示例中，我们将 checkAsia 和 checkEurope 的值都设置为与计算属性的新值相同
        this.checkAsia = value;
        this.checkEurope = value;
      },
    },
    asiaIndeterminate: {
      get() {
        return (
          this.checkAsiaGroup.length > 0 &&
          this.checkAsiaGroup.length < this.areas.Asia.children.length
        );
      },
      set(value) {},
    },
    europeIndeterminate: {
      get() {
        return (
          this.checkEuropeGroup.length > 0 &&
          this.checkEuropeGroup.length < this.areas.Europe.children.length
        );
      },
      set(value) {},
    },
  },
  methods: {
    checkAllAreas() {
      this.all = !this.all;
      if (this.all) {
        this.checkAsiaGroup = this.areas.Asia.children.map(
          (item) => item.label
        );
        this.checkEuropeGroup = this.areas.Europe.children.map(
          (item) => item.label
        );
      } else {
        this.checkAsiaGroup = [];
        this.checkEuropeGroup = [];
      }
    },
    // checkbox
    handleCheckAllByType(type) {
      switch (type) {
        case 'Asia':
          this.asiaIndeterminate
            ? (this.checkAsia = false)
            : (this.checkAsia = !this.checkAsia);
          this.asiaIndeterminate = false;
          if (this.checkAsia) {
            if (this.areas.Asia.children === undefined) {
              this.checkAsiaGroup.push(this.areas.Asia.label);
            } else {
              this.checkAsiaGroup = this.areas.Asia.children.map(
                (item) => item.label
              );
            }
          } else {
            this.checkAsiaGroup = [];
          }
          // axios save
          console.log(this.checkAsiaGroup);
          break;
        case 'Europe':
          this.europeIndeterminate
            ? (this.checkEurope = false)
            : (this.checkEurope = !this.checkEurope);
          this.europeIndeterminate = false;
          if (this.checkEurope) {
            if (this.areas.Europe.children === undefined) {
              this.checkEuropeGroup.push(this.areas.Europe.label);
            } else {
              this.checkEuropeGroup = this.areas.Europe.children.map(
                (item) => item.label
              );
            }
          } else {
            this.checkEuropeGroup = [];
          }
          console.log(this.checkEuropeGroup);
          break;
      }
    },

    checkAsiaGroupChange(data) {
      this.asiaIndeterminate =
        data.length > 0 && data.length < this.areas.Asia.children.length;
      this.checkAsia = data.length === this.areas.Asia.children.length;
    },
    checkEuropeGroupChange(data) {
      this.europeIndeterminate =
        data.length > 0 && data.length < this.areas.Europe.children.length;
      this.checkEurope = data.length === this.areas.Europe.children.length;
    },
  },
};
</script>

<style scoped>
.checkboxHead {
  margin-right: 80px;
}
</style>
