<template>
           
                <div class="content">

                    <div class="header">{{"您好!   "+user}}
                       <el-button type="primary" class="loginOut" plain @click="loginout">退出登陆</el-button>
                    </div>
                    <div class="wrap">
                            <el-col :span="4">
                            <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#062743"
                            text-color="#fff"
                            :unique-opened="true"
                            router>
                                <el-submenu :index="index + ''" :key="index" v-for="(item,index) in $store.state.data.level" :span="4">
                                    <template slot="title" >
                                    <i class="el-icon-location"></i>
                                    <span>{{item.group_name}}</span>
                                    </template>
                                    <el-menu-item-group :key="index" v-for="(val,index) in item.sub_name" index="index" >
                                    <el-menu-item :index="'/zhuye/'+val.path" >{{val.name}}</el-menu-item>
                                    
                                    </el-menu-item-group>   
                                </el-submenu>
                                
                            
                            </el-menu>
                        </el-col>
                        <router-view></router-view>

                    </div>
                    
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
            },
            loginout(){
                if(localStorage.user){
                    localStorage.removeItem("user")
                }else if(sessionStorage.user){
                    sessionStorage.removeItem("user")
                }
                this.$router.history.push("/")
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
        .loginOut{
            float:right;
            margin-top:5px;
            margin-right:10px;
        }
        .wrap{
            display:flex;
        }
        .content,.wrap{
            height:100%;
        }
        .el-col{
            height:100%;
            width:20%;
        }
</style>

