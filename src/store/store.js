import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        num:0,
        localhost:"http://169.254.195.25:3000/ceshi"
    },
    mutations:{
        addnum(state){
            state.num++
        }
    }
})

export default store