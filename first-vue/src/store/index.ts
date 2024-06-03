import { defineStore } from 'pinia'

export const useCommonParamsStore = defineStore('commonParams', {
  state: () => {
    return { 
        selectKeys: [],
        mode: 'inline',
        theme: "dark",
        count: 0,
        olMap: null,
        allUnderLayers: [],
        allBusinessLayers: {}
    }
  },
  actions: {
    setMode(mode: string) {
        this.mode = mode
    },
    setTheme(theme: string) {
        this.theme = theme
    },
    setOlMap(olMap: any){
      this.olMap = olMap
    },
    setAllUnderLayers(layers: any){
      this.allUnderLayers = layers
    },
    setAllBusinessLayer(name: string, layer: any){
      this.allBusinessLayers[name] = layer
    },
  },
})