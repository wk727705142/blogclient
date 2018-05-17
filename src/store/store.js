import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {order} from "../assets/until";
Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        num:0,
        localhost:"http://169.254.195.25:3000/login",
        data:[],
        id:null
    },
    mutations:{
        getdata(state,action){
                
                state.data = action.arr
        },
        setid(state,action){
            state.id = action.id
        }
    },
    actions:{
        getAsideData(store,action){
              
               let id = action.id
              
              console.log("111")
            axios.post("http://169.254.195.25:3000/zhuye",`id=${id}`).then((data)=>{
               
                store.commit("getdata",{arr:data.data.aside})
                

            })
        }
    }
})

export default store