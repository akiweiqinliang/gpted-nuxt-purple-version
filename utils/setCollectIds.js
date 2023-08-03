// 用户登录时localStorage.setItem('collectIds',JSON.parse(user.collectIds));
// const collectionIds = JSON.parse(localStorage.getItem('collectIds')) || [];
const collectionIds = [];

function addCollection(id) {
  if (this.collectionIds.includes(id)) {
    this.$Message.info({ content: '已取消收藏', duration: 3 });
    this.collectionIds = this.collectionIds.filter((el) => el !== id);
    localStorage.setItem('collectIds', JSON.stringify(this.collectionIds));
    return;
  }
  this.collectionIds.push(id);
  console.log(this.collectionIds);
  localStorage.setItem('collectIds', JSON.stringify(this.collectionIds));
  console.log('local===', localStorage.getItem('collectIds'));
  this.$Message.success({ content: '收藏成功', duration: 3 });
}
export { collectionIds, addCollection };
