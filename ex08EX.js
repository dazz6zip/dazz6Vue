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
        allResultCount: 0,
        allResultScore: 0,
      };
    },
    methods: {
      result() {
        this.resultSave.push({
          name: this.name,
          jscore: this.jscore,
          rscore: this.rscore,
          vscore: this.vscore,
          allscore:
            parseInt(this.jscore) +
            parseInt(this.rscore) +
            parseInt(this.vscore),
        });
        this.allResultCount++;
        this.allResultScore +=
          parseInt(this.jscore) + parseInt(this.rscore) + parseInt(this.vscore);
      },
    },
  }).mount("#app");
})();
