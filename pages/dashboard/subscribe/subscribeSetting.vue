<template>
  <Card id="subscribeSetting" :dis-hover="true">
    <Row class="firstTitle">订阅范围</Row>
    <Row type="flex">
      <Input
        v-model.trim="newTagText"
        clearable
        placeholder="请输入关键词"
        class="ivu-col-span-12"
        size="large"
      />
      <Button
        type="primary"
        class="ivu-col-span-2 ivu-col-offset-1"
        size="large"
        @click="handleAddKeyword"
        >添加</Button
      >
    </Row>
    <Row type="flex" align="middle" class="keywordTags">
      <p>已订阅关键词 {{ count.length }}</p>
      <Tag
        v-for="item in count"
        :key="item"
        :name="item"
        closable
        @on-close="handleCloseKeyword"
        >{{ item }}</Tag
      >
    </Row>
    <Row class="firstTitle">更多订阅选择</Row>
    <Divider />
    <SubscribeSelection
      :selections="announcementTypes"
      selection-title="公告类型"
    />
    <SubscribeSelection
      :selections="internationalOrgs"
      selection-title="国际组织"
      :add-tag-type="'org'"
    />
    <CheckBoxTest />
    <SubscribeSelection
      :selections="internationalOrgs"
      selection-title="国家"
      :add-tag-type="'country'"
    />
    <SubscribeSelection
      :selections="internationalOrgs"
      selection-title="行业"
    />
    <SubscribeSelection
      :selections="announcementTypes"
      selection-title="内容"
    />
    <SubscribeSelection
      :selections="[]"
      selection-title="价格区间"
      :show-price-select="true"
    />
  </Card>
</template>

<script>
import { areas } from '~/enums/areas';
export default {
  layout: 'GatherLayout',
  data() {
    return {
      areas,
      newTagText: '', // 新增标签文本
      count: ['工程', '交通'],
      // 选项内容列表
      announcementTypes: [
        {
          label: '招标公告',
          id: '0',
        },
        {
          label: '中标公告',
          id: '1',
        },
        {
          label: '采购意向',
          id: '2',
        },
      ],
      internationalOrgs: [
        {
          label: '联合国',
          id: '0',
        },
        {
          label: '世界银行',
          id: '1',
        },
        {
          label: '采购意向',
          id: '2',
        },
        {
          label: '欧洲复兴开发银行',
          id: '3',
        },
        {
          label: '亚洲开发银行',
          id: '4',
        },
        {
          label: '亚洲基础设施投资银行',
          id: '5',
        },
        {
          label: '联合国开发计划署',
          id: '6',
        },
        {
          label: '全球项目采购门户',
          id: '7',
        },
        {
          label: '亚洲开发银行1',
          id: '8',
        },
        {
          label: '亚洲基础设施投资银行1',
          id: '9',
        },
        {
          label: '联合国开发计划署1',
          id: '10',
        },
        {
          label: '全球项目采购门户1',
          id: '11',
        },
      ],
    };
  },
  methods: {
    // 添加关键词相关
    handleAddKeyword() {
      if (this.newTagText === '') {
        return;
      }
      if (this.count.includes(this.newTagText)) {
        this.$Message.info('该标签已存在');
        return;
      }
      // axios
      this.$Message.success('该关键词已成功添加到订阅范围');
      this.count.push(this.newTagText);
      this.newTagText = '';
    },
    handleCloseKeyword(event, name) {
      this.$Message.success('该关键词已从订阅范围删除');
      const index = this.count.indexOf(name);
      this.count.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
@import 'assets/css/globalColor.scss';
#subscribeSetting {
  padding: 16px;
  .ivu-tag:hover {
    background: #f8f9ff;
    transition: all 0.3s;
    .ivu-icon-ios-close {
      top: -8px;
      right: -6px;
      transition: all 0.3s;
    }
  }
  .ivu-tag {
    border: 0;
    background: none;
    margin: 0 4px;
    height: auto;
    position: relative;
    padding: 6px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: all 0.3s;
    .ivu-tag-text {
      color: $home-theme-color;
      background: #efebfc;
      padding: 0 6px;
      border-radius: 3px;
    }
    .ivu-icon-ios-close {
      background: $home-theme-color;
      border-radius: 50%;
      color: $white;
      font-size: 8px;
      position: absolute;
      top: -16px;
      right: -16px;
      width: 16px;
      height: 16px;
      transition: all 0.3s;
    }
    .ivu-icon-ios-close:before {
      position: absolute;
      left: 2px;
      bottom: 1px;
    }
  }
  .ivu-checkbox-group-item {
    margin-right: 28px;
    padding-bottom: 8px;
    margin-bottom: 8px;
  }
  .ivu-input-suffix {
    display: flex;
    align-items: center;
    //color: $home-theme-color;
  }
  .ivu-divider-horizontal {
    margin: 20px 0;
  }
  .firstTitle {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .allCheck {
    padding-bottom: 8px;
    margin-bottom: 8px;
    font-weight: 600;
  }
  .moreSelections {
    margin-bottom: 50px;
  }
  .keywordTags {
    margin: 20px 0 40px;
  }
}
</style>
