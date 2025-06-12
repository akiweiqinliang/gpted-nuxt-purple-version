<template>
  <Row class="moreSelections">
    <Col span="3">{{ selectionTitle }}</Col>
    <Col span="21">
      <div class="allCheck">
        <Checkbox
          v-if="!showPriceSelect"
          :indeterminate="indeterminate"
          :value="checkAll"
          @click.prevent.native="handleCheckAll"
          >全部</Checkbox
        >
        <Checkbox
          v-else
          :value="checkPriceRange"
          @click.prevent.native="checkPriceRange = !checkPriceRange"
          >全部</Checkbox
        >
      </div>
      <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
        <Checkbox
          v-for="item in selections"
          :key="`selections-${item.id}`"
          :label="item.label"
        ></Checkbox>
      </CheckboxGroup>
      <div v-if="addTagType !== ''">
        <Row type="flex" align="middle" class="addTagContainer">
          <Button
            v-show="!showTagInput"
            icon="ios-add"
            type="dashed"
            size="large"
            @click="openTagInput"
            >{{
              addTagType === 'org' ? '添加其他组织' : '添加其他国家'
            }}</Button
          >
          <Input
            v-show="showTagInput"
            ref="orgInput"
            v-model.trim="newTagText"
            clearable
            placeholder="按回车保存"
            class="addInput"
            size="large"
            @on-blur="handleAddTag"
            @keyup.native.enter="handleAddTag"
          />
          <p>已添加 {{ newTags.length }}</p>
          <Tag
            v-for="item in newTags"
            :key="item"
            :name="item"
            closable
            @on-close="handleCloseTag"
            >{{ item }}</Tag
          >
        </Row>
      </div>
      <div v-if="showPriceSelect">
        <Input
          v-model="priceRange.start"
          :disabled="checkPriceRange"
          class="priceRange"
          type="number"
        >
          <p slot="suffix">万元</p>
        </Input>
        —
        <Input
          v-model="priceRange.end"
          :disabled="checkPriceRange"
          class="priceRange"
          type="number"
        >
          <p slot="suffix">万元</p>
        </Input>
      </div>
    </Col>
  </Row>
</template>

<script>
export default {
  name: 'SubscribeSelection',
  props: {
    showPriceSelect: {
      required: false,
      type: Boolean,
      default() {
        return false;
      },
    },
    addTagType: {
      required: false,
      type: String,
      default() {
        return '';
      },
    },
    selectionTitle: {
      required: true,
      type: String,
      default() {
        return '';
      },
    },

    selections: {
      required: true,
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      indeterminate: false,
      checkAll: false,
      checkAllGroup: [],

      newTagText: '', // 新增标签文本
      newTags: [this.addTagType === 'org' ? '妇女署' : '乌拉圭'],
      showTagInput: false,
      // 价格区间
      checkPriceRange: false,
      priceRange: {
        start: '',
        end: '',
      },
    };
  },
  watch: {
    checkPriceRange(val) {
      if (val) {
        this.priceRange.start = this.priceRange.end = '';
      }
    },
    // new
    checkAllGroup(val) {
      if (val) {
        console.log(val);
        this.checkAllGroupChange(val);
      }
    },
  },
  methods: {
    // checkbox
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.selections.forEach((item) => this.checkAllGroup.push(item.label));
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data) {
      if (data.length === this.selections.length) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    },

    openTagInput() {
      this.showTagInput = true;
      this.$nextTick(function () {
        this.$refs.orgInput.focus();
      });
    },
    handleAddTag() {
      if (this.newTagText === '') {
        this.showTagInput = false;
        return;
      }
      if (
        this.newTags.includes(this.newTagText) ||
        this.checkAllGroup.includes(this.newTagText)
      ) {
        this.$Message.info('该标签已存在');
        this.newTagText = '';
        this.showTagInput = false;
        return;
      }
      if (this.selections.map((item) => item.label).includes(this.newTagText)) {
        this.checkAllGroup.push(this.newTagText);
        this.$Message.info('该内容已成功添加到订阅范围');
        this.newTagText = '';
        this.showTagInput = false;
        return;
      }
      this.$Message.success('该内容已成功添加到订阅范围');
      if (this.addTagType === 'org') {
        // axios org
        console.log('保存org tag');
      } else {
        // axios country
        console.log('保存country tag');
      }
      this.newTags.push(this.newTagText);
      this.newTagText = '';

      this.showTagInput = false;
    },
    handleCloseTag(event, name) {
      this.$Message.success('该内容已从订阅范围删除');
      if (this.addTagType === 'org') {
        // axios org
        console.log('删除org tag');
      } else {
        // axios country
        console.log('删除country tag');
      }
      //   axios
      const index = this.newTags.indexOf(name);
      this.newTags.splice(index, 1);
    },
  },
};
</script>

<style scoped lang="scss">
.addTagContainer {
  margin-top: 20px;
  .addInput {
    width: 152px;
  }
  p {
    margin: 0 10px 0 20px;
  }
}
.priceRange {
  width: 152px;
}
</style>
