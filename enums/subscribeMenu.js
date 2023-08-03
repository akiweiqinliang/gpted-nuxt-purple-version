class MenuItem {
  constructor(name, icon, code) {
    this.name = name;
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
  new MenuItem('我的订阅', 'ios-heart-outline', 'SUBSCRIBE'),
  new MenuItem('项目推荐', 'ios-bookmark-outline', 'RECOMMEND'),
  new MenuItem('我的收藏', 'ios-star-outline', 'COLLECTION'),
  new MenuItem('我的跟踪', 'ios-locate-outline', 'FOLLOW'),
  new MenuItem('我的消息', 'ios-notifications-outline', 'MESSAGE'),
  new MenuItem('推广奖励', 'ios-trophy-outline', 'REWARD'),
  new MenuItem('会员中心', 'ios-cube-outline', 'CENTER'),
  new MenuItem('历史记录', 'ios-time-outline', 'HISTORY'),
  new MenuItem('账户信息', 'ios-person-outline', 'ACCOUNT'),
]);
export default subscribeMenu;
