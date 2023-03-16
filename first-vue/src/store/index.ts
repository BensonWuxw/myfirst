import { defineStore } from 'pinia'

export const useCommonParamsStore = defineStore('commonParams', {
  state: () => {
    return { 
        selectKeys: [],
        count: 0
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})