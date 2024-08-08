(function () {
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        name: "",
        jscore: 0,
        rscore: 0,
        vscore: 0,
        resultSave: [],
        allResultScore: 0,
      };
    },
    methods: {
      result() {
        let as = this.jscore + this.rscore + this.vscore;
        this.resultSave.push({
          name: this.name,
          jscore: this.jscore,
          rscore: this.rscore,
          vscore: this.vscore,
          allscore: as,
        });
        this.allResultScore += as;
      },
    },
  }).mount("#app");
})();
