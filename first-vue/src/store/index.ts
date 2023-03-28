import { defineStore } from 'pinia'

export const useCommonParamsStore = defineStore('commonParams', {
  state: () => {
    return { 
        selectKeys: [],
        mode: 'inline',
        theme: "dark",
        count: 0
    }
  },
  actions: {
    setMode(mode: string) {
        console.log(mode)
        this.mode = mode
    },
    setTheme(theme: string) {
        console.log(theme)
        this.theme = theme
    }
  },
})