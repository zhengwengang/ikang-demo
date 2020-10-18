Component({
  data: {
    days: Array.from({ length: 30 }, (item, index) => {
      const time = (new Date().getTime()) + index * 24 * 60 * 60 * 1000
      const date = new Date(time).toLocaleDateString()
      return {
        day: index,
        date
      }
    }),
    weekItems: ['日', '一', '二', '三', '四', '五', '六'],
    activeIndex: 10
  },
  methods: {
    chooseDay (e) {
      console.log(e.currentTarget.dataset.item)
    }
  }
})