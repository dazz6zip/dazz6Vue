(function () {
  // 일회용, 한 번 즉시 실행
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        key1: "값1",
        key2: "값2",
        message: "안녕하세요",
        htmlString: "<p style='color: orange'><b>ᓚᘏᗢ</b></p>",
        su1: "0",
        su2: "0",
        //   txtMsg: "",
        pompompurin:
          "https://lh3.googleusercontent.com/proxy/HB0a_MmLP0NFFrSmFb52fp7RlIsqZNUBQUAEivm3BcwF7LyTzs4aIYE2E_ns93fQD0KKFrlg2QZj04Eopq2re1yAGovYzR1WqpZvYB5-JuVBQ8WD6SnEo7jNiQ",
      };
    },
    methods: {
      myFunc() {
        console.log(this.message);
      },
      myChange1() {
        this.message = "~(=^‥^)ノ";
      },
      myChange2() {
        this.message = "🐱";
      },
    },
  }).mount("#app1");
})();
