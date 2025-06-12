import pageCode from '~/enums/pageCodes';
class MenuItem {
  constructor(name, svgIcon, icon, code) {
    this.name = name;
    this.svgIcon = svgIcon;
    this.icon = icon;
    this.code = code;
  }
}
class SubscribeItems {
  constructor(MenuItems) {
    this._MenuItems = MenuItems;
    this._MenuItems.forEach((i) => {
      this[i.code] = i.name;
    });
  }

  getSubscribeMenu() {
    return Array.from(this);
  }

  *[Symbol.iterator]() {
    for (const MenuItem of this._MenuItems) {
      yield MenuItem;
    }
  }
}
const subscribeMenu = new SubscribeItems([
  new MenuItem(
    '我的订阅',
    'subscribe',
    'ios-heart-outline',
    pageCode.DASHBOARD_SUBSCRIBE
  ),
  new MenuItem(
    '项目推荐',
    'recommendations',
    'ios-bookmark-outline',
    pageCode.DASHBOARD_RECOMMEND
  ),
  new MenuItem(
    '我的收藏',
    'collection',
    'ios-star-outline',
    pageCode.DASHBOARD_COLLECTION
  ),
  new MenuItem(
    '我的跟踪',
    'tracking',
    'ios-locate-outline',
    pageCode.DASHBOARD_FOLLOW
  ),
  new MenuItem(
    '我的消息',
    'news',
    'ios-notifications-outline',
    pageCode.DASHBOARD_MESSAGE
  ),
  new MenuItem(
    '推广奖励',
    'reward',
    'ios-trophy-outline',
    pageCode.DASHBOARD_REWARD
  ),
  new MenuItem(
    '会员中心',
    'center',
    'ios-cube-outline',
    pageCode.DASHBOARD_CENTER
  ),
  new MenuItem(
    '历史记录',
    'history',
    'ios-time-outline',
    pageCode.DASHBOARD_HISTORY
  ),
  new MenuItem(
    '账户信息',
    'account',
    'ios-person-outline',
    pageCode.DASHBOARD_ACCOUNT
  ),
]);
export default subscribeMenu;
