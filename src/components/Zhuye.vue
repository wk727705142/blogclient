<template>
           
                <div>

                    <div class="header">{{"您好!   "+user}}</div>
                    <el-col :span="6">
                    <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#062743"
                    text-color="#fff"
                    router>
                        <el-submenu :index="index + ''" :key="index" v-for="(item,index) in $store.state.data.level">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.group_name}}</span>
                            </template>
                            <el-menu-item-group :key="index" v-for="(val,index) in item.sub_name" index="index">
                            <el-menu-item :index="'/zhuye/'+val.path">{{val.name}}</el-menu-item>
                            
                            </el-menu-item-group>   
                        </el-submenu>
                         
                       
                    </el-menu>
                </el-col>
                <router-view></router-view>
                </div>
                
                
                
            
</template>
<script>
import axios from "axios";
import {mapMutations,mapActions,mapState} from "vuex"
export default {
        data(){
            return {
               user:""
            }
        },
        computed:{
            ...mapState(["data"])
        },
        methods:{
            ...mapMutations(["getdata"]),
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            fn(index){
                console.log(index)
            }
           
        },
        beforeMount(){
          
            console.log("我被打印了")
            if(!sessionStorage.user){
                this.$router.push("/")
            }
            // var id = this.$route.query.id
            let id = sessionStorage.id
            this.user = sessionStorage.user
            // this.getdata({data:data.data.aside.rows})
            // var arr = this.$store.state.data
           this.$store.dispatch("getAsideData",{id:id})
           
            
            
           
               
              
               
        },
        mounted(){
            
        }

        
}
</script>
<style>
        .header{
            width:100%;
            height:50px;
            background:#000;
            color:#fff;
            line-height:50px;
            text-align:center;
        }
</style>

