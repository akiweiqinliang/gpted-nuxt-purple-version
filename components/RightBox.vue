<template>
  <div>
    <template v-if="searchData1.length > 0">
      <Card
        v-for="(item, index) in sortData"
        :key="`card-${index}-${item.id}`"
        shadow
        class="card"
      >
        <div>
          <Row type="flex">
            <Col span="2" class="left">
              <img
                v-if="item.type === 1"
                src="~assets/logos/redBid.png"
                alt="中标"
              />
              <img
                v-if="item.type === 0"
                src="~assets/logos/greenBid.png"
                alt="招标"
              />
            </Col>
            <Col span="22" class="rightContent">
              <Row>
                <nuxt-link
                  :to="{
                    name: pageCode.DETAIL_BID,
                    params: { bidId: item.id },
                  }"
                >
                  <h3
                    ref="bidTitle"
                    v-html="highlightKeywords(item.title)"
                  ></h3>
                </nuxt-link>
              </Row>
              <Row
                >Improving Growth balabalabalabala Improving Growth
                balabalabalabala</Row
              >
            </Col>
            <Col span="24">
              <Row>
                <nuxt-link
                  :to="{
                    name: pageCode.DETAIL_BID,
                    params: { bidId: item.id },
                  }"
                >
                  <p
                    v-html="
                      selectOption === '全文搜索'
                        ? highlightKeywords(item.content)
                        : item.content
                    "
                  ></p>
                </nuxt-link>
              </Row>
              <Divider class="dividerMarginStyle" />
              <Row type="flex" align="middle">
                <Col span="12">
                  <Tag
                    v-for="(tag, index2) in tagOptions.getTagById(
                      item.tagIdList
                    )"
                    :key="`tag-${index2}-${tag.tagId}`"
                    :color="tagOptions.getTagColor(tag.typeId)"
                    >{{ tag.tagName }}</Tag
                  >
                </Col>
                <Col span="2"></Col>
                <Col span="10">
                  <div class="cardRightBottom">
                    <span
                      ><Icon type="ios-eye-outline" size="24"></Icon
                      >{{ item.pageView }}</span
                    >
                    <span
                      ><Icon type="ios-arrow-dropright" size="20" />{{
                        formatTime(item.startDate)
                      }}</span
                    >
                    <span
                      ><Icon
                        :type="
                          collectionIds.includes(item.id)
                            ? `ios-star`
                            : `ios-star-outline`
                        "
                        size="24"
                        class="collectIcon"
                        @click="addCollection(item.id)"
                      ></Icon
                    ></span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>
    </template>
    <template v-else>
      <Card shadow class="card"> 无数据 </Card>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import pageCode from '@/enums/pageCodes';
import { tagOptions } from '@/enums/common';
import { addCollection, collectionIds } from '@/utils/setCollectIds';
import { formatTime } from '@/utils/formatTime';

export default {
  name: 'RightBox',
  props: {
    searchData1: {
      require: true,
      type: Array,
      default() {
        return [];
      },
    },
    searchText: {
      require: true,
      type: String,
      default() {
        return '';
      },
    },
    selectOption: {
      require: true,
      type: String,
      default() {
        return '';
      },
    },
  },
  data() {
    return {
      collectionIds,
      tagOptions,
      pageCode,
    };
  },
  computed: {
    ...mapGetters(['getShowData']),
    sortData() {
      return [...this.searchData1].sort((a, b) => b.startDate - a.startDate);
    },
  },
  methods: {
    addCollection,
    formatTime,
    highlightKeywords(sentence) {
      if (!this.searchText) {
        return sentence;
      }
      const keywords = this.searchText;
      const regex = new RegExp(keywords, 'gi');
      return sentence.replace(
        regex,
        (matchedKeyword) => `<span class="highlight">${matchedKeyword}</span>`
      );
    },
  },
};
</script>
<style scoped lang="scss">
@import '@/assets/css/global.scss';
@import '@/assets/css/globalColor.scss';
.card {
  margin: 16px 0;
}
.card h3 {
  @include ellipsis-style(1);
  @extend %card-title-style;
}
.card p {
  @include ellipsis-style(2);
  @extend %card-abstract-p-style;
}
.rightContent {
  text-align: left;
  padding-left: 12px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cardRightBottom {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
}
.cardRightBottom span {
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.collectIcon {
  cursor: pointer;
}
.left img {
  width: 100%;
  position: relative;
  top: -18px;
  margin-bottom: -18px;
}
.dividerMarginStyle {
  margin: 8px 0;
}
.highlight {
  color: $search-text-highlight-color;
}
</style>
<style lang="scss">
@import '@/assets/css/globalColor.scss';
.highlight {
  color: $search-text-highlight-color;
}
</style>
