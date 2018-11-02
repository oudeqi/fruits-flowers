Page({
  data: {
    category: [
      {
        id: 1,
        name: '柑橘',
        active: true
      },{
        id: 2,
        name: '苹果'
      },{
        id: 3,
        name: '香蕉'
      },{
        id: 4,
        name: '菠萝'
      },{
        id: 5,
        name: '葡萄'
      },{
        id: 6,
        name: '菠萝蜜'
      },{
        id: 7,
        name: '榴莲'
      },{
        id: 8,
        name: '提子'
      },{
        id: 9,
        name: '西瓜'
      },{
        id: 10,
        name: '哈密瓜'
      },{
        id: 11,
        name: '百香果'
      },{
        id: 12,
        name: '蓝莓'
      },{
        id: 13,
        name: '柠檬'
      },{
        id: 14,
        name: '柑橘'
      },{
        id: 15,
        name: '柑橘'
      },{
        id: 16,
        name: '柑橘'
      },{
        id: 17,
        name: '柑橘'
      },{
        id: 18,
        name: '柑橘'
      },
    ],
  },
  onLoad () {

  },
  handleScrollToUpper: function () {
    console.log('handleScrollToUpper')
  },
  handleScrollToLower: function () {
    console.log('handleScrollToLower')
  },
  handleCategoryItemTap: function (event) {
    const id = event.target.dataset.id;
    let category = this.data.category;
    for (let item of category) {
      if (item.id == id) {
        item.active = true
      } else {
        item.active = false
      }
    }
    this.setData({ category })
  }
})