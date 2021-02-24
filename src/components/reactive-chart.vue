<template>
  <div>
    <div :ref="chart.uuid"></div>
    <a class="flex p-4 cursor-pointer" @click="draw()">Draw</a>
  </div>
</template>
<script>
import Plotly from 'plotly.js-dist'
export default {
  props: ['builder'],
  mounted() {
    Plotly.plot(
      this.$refs[this.chart.uuid],
      this.chart.traces,
      this.chart.layout
    )
  },
  watch: {
    chart: {
      handler: function () {
        Plotly.react(
          this.$refs[this.chart.uuid],
          this.chart.traces,
          this.chart.layout
        )
      },
      deep: true,
    },
  },
  data() {
    return {
      chart: {
        uuid: '123',
        traces: [
          {
            x: [],
            y: [],
            line: {
              color: '#5e9e7e',
              width: 4,
              shape: 'line',
            },
          },
          {
            x: [],
            y: [],
            line: {
              color: '#FF0000',
              width: 4,
              shape: 'line',
            },
          },
        ],
        layout: {
          title: 'reactive charts',
          xaxis: {
            title: 'xaxis title',
          },
          yaxis: {
            title: 'yaxis title',
          },
        },
      },
    }
  },

  methods: {
    draw() {
      this.chart.traces[0].y = []
      this.chart.traces[0].x = []
      this.chart.traces[0].y = this.builder.y1
      this.chart.traces[0].x = this.builder.x1
      this.chart.traces[1].y = []
      this.chart.traces[1].x = []
      this.chart.traces[1].y = this.builder.y2
      this.chart.traces[1].x = this.builder.x2
    },
  },
}
</script>

<style lang="scss" scoped>
</style>