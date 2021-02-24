<template>
  <div class="flex mx-auto mt-10 max-w-7xl">
    <div class="flex flex-col w-1/3">
      <div class="flex flex-col items-start p-3">
        <h3 class="mb-2">Select Functions</h3>
        <select
          class="w-2/3 p-1 rounded-sm"
          v-model="funcSelect"
          name="functions"
          id=""
        >
          <option value="f1">F1</option>
          <option value="f2">F2</option>
          <option value="f7">F7</option>
          <option value="f13">F13</option>
        </select>
      </div>
      <div class="flex flex-col items-start w-full p-3 mb-4">
        <h3 class="mb-2">
          Nodes 1+2<sup>{{ nodesValue }}</sup> =
          {{ 1 + Math.pow(2, nodesValue) }}
        </h3>
        <div class="w-2/3">
          <vue-slider
            class="flex-1"
            v-model="nodesValue"
            :marks="nodesMarks"
            :min="2"
            :max="50"
          ></vue-slider>
        </div>
      </div>
      <div class="flex flex-col items-start w-full p-3 mb-4">
        <h3 class="mb-2">
          Epsilon 2<sup>-{{ epValue }} </sup> = {{ Math.pow(2, -1 * epValue) }}
        </h3>
        <div class="w-2/3">
          <vue-slider
            class="flex-1"
            v-model="epValue"
            :marks="epMarks"
            :max="20"
          ></vue-slider>
        </div>
      </div>

      <div class="flex flex-col items-start p-3">
        <h3 class="mb-2">Select Grid</h3>
        <select class="w-2/3 p-1 rounded-sm" v-model="gridSelect">
          <option value="g1">Uniform</option>
          <option value="g2">Chebychev</option>
        </select>
      </div>
      <a @click="builder()" class="p-4 bg-yellow-300 cursor-pointer">kek</a>
    </div>
    <div class="w-2/3 bg-red-500">
      <ReactiveChart :builder="builder" />
    </div>
  </div>
</template>
<script>
import ReactiveChart from '@/components/reactive-chart.vue'
import builder from '@/functions.js'
import { lagrange, interp } from '@/lagrange.js'

import { arrayX, originalFunc } from '@/preprocessing.js'
export default {
  components: {
    ReactiveChart,
  },

  data() {
    return {
      funcSelect: 'f1',
      gridSelect: 'g1',
      nodesValue: 2,
      nodesMarks: [2, 25, 50],
      epValue: 0,
      epMarks: [0, 10, 20],
      traces: {
        x1: [],
        y1: [],
        x2: [],
        y2: [],
      },
    }
  },

  methods: {
    builder() {
      let f = builder(this.funcSelect)
      let xs = arrayX()
      let eps = Math.pow(2, -this.epValue)
      let ys = originalFunc(xs, eps, f)
      let nodes = Math.pow(2, this.nodesValue) + 1

      let grid = lagrange(nodes, eps, f, this.gridSelect)
      let ysNew = []
      for (let i = 0; i < xs.length; i++) {
        ysNew[i] = interp(grid.x, grid.y, xs[i])
      }
      console.log(ysNew)
      this.traces.x1 = xs
      this.traces.y1 = ys
      this.traces.x2 = xs
      this.traces.y2 = ysNew
    },
  },
}
</script>