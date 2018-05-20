<template>
  <div class="alert">
    <h3>{{x}} + {{y}} = ?</h3>
    <hr>
    <div class="buttons">
      <button class="btn btn-success"
              v-for="answer in answers"
              @click="onAnswer(answer)"
      >
        {{answer}}
      </button>
    </div>
  </div>
</template>

<script>
  const mtRand = (min, max) =>{
    let diff = max - min;

    return Math.floor(Math.random() * (diff + 1)) + min;
  };

  export default {
    props: ['settings'],
    data() {
      return {
        x: mtRand(this.settings.from, this.settings.to),
        y: mtRand(this.settings.from, this.settings.to)
      }
    },
    computed: {
      good() {
        return this.x + this.y;
      },
      answers() {
        let res = [this.good];

        while (res.length < this.settings.variants) {
          let num = mtRand(this.good - this.settings.range, this.good + this.settings.range);

          if(res.indexOf(num) === -1){
            res.push(num)
          }
        }

        res.sort(() => Math.random() > 0.5);

        return res;
      }
    },
    methods: {
      onAnswer(answer) {
        if (answer !== this.good) {
          this.$emit('error', `${this.x} + ${this.y} = ${this.good}!`);
        } else {
          this.$emit('success');
        }
      }
    }
  }
</script>

<style>
  .alert {
    padding-top: 20px;
    background: #eee;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
  }

  .btn {

  }
</style>
