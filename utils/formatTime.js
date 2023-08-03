function formatTime(date) {
  const d = date;
  const [day, month, year] = [
    '0' + d.getDate(),
    '0' + d.getMonth(),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes(),
  ].map((component) => component.slice(-2)); // 得到后两位
  return `${year}-${month}-${day}`;
  // return `${day}.${month}.${year} ${hours}:${mins}`
}
export { formatTime };
