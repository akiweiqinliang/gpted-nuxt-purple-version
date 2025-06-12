<template>
  <div id="collection">
    <Row class="topSelectOptions">
      <div
        class="pageSmallTitle"
        :class="pageContent === 0 ? 'pageActive' : ''"
        @click="pageContent = 0"
      >
        <span>项目</span>
      </div>
      <div
        class="pageSmallTitle"
        :class="pageContent === 1 ? 'pageActive' : ''"
        @click="pageContent = 1"
      >
        <span>资源</span>
      </div>
    </Row>
    <div
      v-show="pageContent === 0"
      :class="pageContent === 0 ? 'fade-in' : 'fade-out'"
      class="project"
    >
      <Card :dis-hover="true" :padding="0" class="collectionPageCard">
        <Row type="flex" class="top">
          <Col span="8">
            <Input
              search
              clearable
              class="searchCollection"
              placeholder="请输入关键词"
            />
          </Col>
          <Col span="8" class="pickers">
            <span class="spanText">收藏时间:</span>
            <DatePicker
              type="daterange"
              :options="timeRange"
              class="datePicker"
              placement="bottom-end"
              format="yyyy.MM.dd"
            ></DatePicker>
          </Col>
          <Col span="8" class="pickers">
            <span class="spanText">收藏时间:</span>
            <DatePicker
              type="daterange"
              :options="timeRange"
              class="datePicker"
              placement="bottom-end"
              format="yyyy.MM.dd"
            ></DatePicker>
          </Col>
        </Row>
        <BidList
          :bidList="bidData"
          :show-bottom-options="false"
          :show-bid-collect-center-icon="true"
          :show-bid-date="true"
          :show-bid-state="false"
        />
        <SpinLoad ref="loading" />
        <Row type="flex" justify="center">
          <Page
            :current="currentPage"
            :total="total"
            :page-size="pageSize"
            simple
            @on-change="changePage"
          />
        </Row>
      </Card>
    </div>
    <div
      v-show="pageContent === 1"
      :class="pageContent === 1 ? 'fade-in' : 'fade-out'"
      class="resource"
    >
      <Card :dis-hover="true">资源</Card>
    </div>
  </div>
</template>

<script>
import bidData1 from '~/enums/bidData';
export default {
  name: 'CollectionPage',
  layout: 'GatherLayout',
  asyncData({ $axios }) {
    //   axios获取收藏列表
  },
  data() {
    return {
      // 模拟列表
      bidData1,
      bidData: [],
      pageContent: 0,
      timeRange: {
        shortcuts: [
          {
            text: '一周内',
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            },
          },
          {
            text: '近一个月',
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            },
          },
          {
            text: '近半年',
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 180);
              return [start, end];
            },
          },
        ],
      },
      //   分页器
      total: 0,
      pageSize: 5,
      currentPage: 1,
    };
  },
  mounted() {
    this.loadBidData();
  },
  methods: {
    loadBidData() {
      const data = {
        pageNum: this.currentPage,
        pageSize: this.pageSize,
      };
      // mock
      const mock = true;
      if (mock) {
        const indexRange = [];
        let range = this.pageSize;
        if (
          this.currentPage >= Math.ceil(this.bidData1.length / this.pageSize)
        ) {
          range = this.bidData1.length - (this.currentPage - 1) * this.pageSize;
          for (let i = 0; i < range; i++) {
            indexRange.push(this.bidData1.length - i - 1);
          }
        } else {
          for (let i = 0; i < range; i++) {
            indexRange.push(this.currentPage * this.pageSize - i);
          }
        }

        this.bidData = indexRange.reduce((acc, item) => {
          acc.push(this.bidData1[item]);
          return acc;
        }, []);
        this.total = this.bidData1.length;
        return;
      }
      // 调用接口，加载数据
      this.$axios.post('/getBidDataByPage', data).then((res) => {
        const bids = res.data.records;
        this.total = res.data.total;
        this.bidData = bids;
      });
    },
    // 改变当前页
    changePage(i) {
      this.currentPage = i;
      console.log('this is dev');
      this.$refs.loading.start();
      setTimeout(() => {
        this.bidData = [];
        this.loadBidData();
      }, 200);
      setTimeout(() => {
        this.$refs.loading.finish();
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
@import 'assets/css/globalColor.scss';
.topSelectOptions {
  .pageSmallTitle {
    margin-bottom: 24px;
    margin-right: 24px;
    font-size: 16px;
    cursor: pointer;
    border: 0;
    position: relative;
  }
  .pageSmallTitle span:after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    height: 4px;
    width: 0;
    background: $home-theme-color;
    transition: all 0.3s;
    border-radius: 4px;
  }
  .pageActive {
    color: $home-theme-color;
  }
  .pageActive span:after {
    width: 100%;
  }
}

.project {
  .searchCollection,
  .datePicker {
    width: 280px;
  }
  .pickers {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .spanText {
      margin-right: 8px;
    }
  }
  .collectionPageCard {
    padding: 16px 0;
    .top {
      padding: 10px 26px 20px;
    }
  }
}
</style>
