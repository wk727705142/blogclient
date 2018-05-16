<template>
          <div class="Login">
             <i class="el-icon-success"></i>
             <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="用户名">
                  <el-input v-model="formLabelAlign.name"></el-input>
                  
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="formLabelAlign.pwd"></el-input>
                </el-form-item>
              </el-form>
              <p>
                <template>
                  <!-- `checked` 为 true 或 false -->
                  <el-checkbox v-model="ischeck" >记住我的登录信息</el-checkbox>
                  
                </template> 
              </p>
                <el-button type="primary" class="btn" @click="login">登录</el-button>
          </div>
         
</template>

<script>
import axios from "axios";
import {order} from "../assets/until";
export default {
      data(){
        return {
        labelPosition: 'top',
        formLabelAlign: {
          name: '',
          pwd: ''
        },
        ischeck:false
      };
      },
      methods:{
        login(){
            if(this.formLabelAlign.name == "" || this.formLabelAlign.pwd == ""){
              this.$message.error('账户或密码不能为空');
            }else{
                let localhost = this.$store.state.localhost;
                let str = order(this.formLabelAlign)
                axios.post(localhost,str).then((data)=>{
                  if(data.data.status === "ok"){
                      if(this.ischeck){
                        localStorage.setItem("user",this.formLabelAlign.name)
                      }else{
                        localStorage.removeItem("user")
                      }
                     this.$router.push("/zhuye")
                    sessionStorage.setItem("user",this.formLabelAlign.name)
                  }else{
                    this.$message.error('账户或密码错误');
                  }
                })
                
            }
            
        }
       
      },
      beforeMount(){
          if(localStorage.user){
            this.$router.push("/zhuye")
          }
      }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     
      .Login{
        width:300px;
        height:360px;
        position:absolute;
        background:#F2F2F0;
        padding:20px 10px;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
        text-align:center;
        box-shadow: 4px 2px 13px #888888;
      }
      p{
        margin: 20px 0;
      }
      .btn{
      width:80px;
      height:40px;
      }
      .el-icon-success{
        font-size:40px;
      }
</style>
