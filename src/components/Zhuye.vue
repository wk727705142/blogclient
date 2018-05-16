<template>
            <div class="box" @mousedown="down" :style="{position:'absolute',left:this.left+'px',top:this.top+'px'}">
                <div class="titile"></div>
                <h1>{{$store.state.num}}</h1>
            </div>
</template>
<script>
import axios from "axios"
export default {
        data(){
            return {
                msg:"hellow world",
                left:0,
                top:0
            }
        },
        methods:{
            down(e){
                this.contleft = e.clientX - this.left;
                this.conttop = e.clientY - this.top;
                axios.get("http://localhost:3000/test").then((data)=>{
                    console.log(data.data)
                })
                this.$store.commit("addnum")
                 const move = (e)=>{
                         this.left = e.clientX - this.contleft
                         this.top = e.clientY - this.conttop
                        
                 }
                 document.addEventListener("mousemove",move,false)
                document.addEventListener("mouseup",(e)=>{
                    document.removeEventListener("mousemove",move)
                },false)
            }
           
        },
        beforeMount(){
            if(!sessionStorage.user){
                this.$router.push("/")
            }
        }

        
}
</script>
<style>
    .box{
        width:200px;
        height:200px;
        background:red;
    }
</style>

