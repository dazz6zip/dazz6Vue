const { createApp } = Vue;

createApp({
  data() {
    return {
      list: ["🍹", "🧋", "🍺", "🍵"],
      objArr: [
        { site: "seoul", taketime: "1hours" },
        { site: "busan", taketime: "2hours" },
        { site: "jeju", taketime: "3hours" },
      ],
      myArr: ["one", "two", "three", "four", "five"],
      numArr: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    addList() {
      this.myArr.push("add");
    },
    // 배열 요소를 제거하고 새로운 요소로 대체
    addListIndex(arg) {
      this.myArr.splice(arg, 0, "insert");
    },
    changeList(arg) {
      this.myArr.splice(arg, 1, "modify");
    },
    deleteList(arg) {
      this.myArr.splice(arg, 1);
    },
  },
}).mount("#app");
