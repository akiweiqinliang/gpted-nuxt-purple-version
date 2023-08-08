class TagEnumItem {
  constructor(tagId, tagName, type, typeId) {
    this.tagId = tagId;
    this.tagName = tagName;
    this.type = type;
    this.typeId = typeId;
  }
}
class TagEnum {
  constructor(tagData) {
    this._tagData = tagData;
    this._tagData.forEach((i) => {
      this[i.typeId] = i.type;
    });
  }

  options() {
    return Array.from(this);
  }

  getTagColor(type) {
    if (type === 0) {
      return 'blue';
    } else if (type === 1) {
      return 'red';
    } else if (type === 2) {
      return 'green';
    }
  }

  getTagById(tagIds) {
    return this.options().filter((item) => tagIds.includes(item.tagId));
  }

  *[Symbol.iterator]() {
    for (const tag of this._tagData) {
      yield tag;
    }
  }
}
const tagOptions = new TagEnum([
  new TagEnumItem(1, '法国', 'country', 0),
  new TagEnumItem(2, '英国', 'country', 0),
  new TagEnumItem(3, '美国', 'country', 0),
  new TagEnumItem(4, '德国', 'country', 0),
  new TagEnumItem(5, '900万', 'money', 1),
  new TagEnumItem(6, '600万', 'money', 1),
  new TagEnumItem(7, '能源', 'energy', 2),
  new TagEnumItem(8, '建筑', 'energy', 2),
  new TagEnumItem(9, '700万', 'money', 1),
  new TagEnumItem(10, '1200万', 'money', 1),
]);
// country
class CountryEnumItem {
  constructor(id, name, value, region, bidNumber) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.region = region;
    this.bidNumber = bidNumber;
  }
}
class CountryEnum {
  constructor(countryData) {
    this._countryData = countryData;
    this._countryData.forEach((i) => {
      this[i.value] = i.name;
    });
  }

  getCountryArray() {
    return Array.from(this);
  }

  *[Symbol.iterator]() {
    for (const country of this._countryData) {
      yield country;
    }
  }
}
const countryOptions = new CountryEnum([
  new CountryEnumItem(1, '美国', 'America', '', 24),
  new CountryEnumItem(2, '法国', 'France', '', 43),
  new CountryEnumItem(3, '英国', 'US', '', 22),
  new CountryEnumItem(4, '中国', 'China', '', 42),
  new CountryEnumItem(5, '德国', 'America', '', 18),
  new CountryEnumItem(6, '西班牙', 'France', '', 6),
  new CountryEnumItem(7, '巴西', 'US', '', 70),
  new CountryEnumItem(8, '俄罗斯', 'China', '', 56),
]);

export { tagOptions, countryOptions };
