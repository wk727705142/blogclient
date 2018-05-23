<template>
                <div class="contleft">
                    <h1>仪表盘</h1>
                    <dl :key="index" v-for="(item,index) in yibiao">
                        <dt>{{item.name}}</dt>
                        <dd>
                            <p :key="index" v-for="(val,index) in item.list">{{val}}</p>
                        </dd>
                    </dl>
                </div>
</template>
<script>
import {mapMutations,mapActions,mapState} from "vuex";
import axios from "axios"
export default {
        computed:{
            ...mapActions(["getyibiaopan"]),
            ...mapState(["yibiao"])
        },
        mounted(){
            console.log(this.getyibiaopan)
            console.log(this)
        }
}
</script>
<style>
        .contleft{
            padding:20px;
        }
        dl{
            width:350px;
            float: left;
            margin-top:20px;
            margin-left:20px;
        }
        dl dt{
            height:20px;
            background:#ccc;
            border-radius:10px 10px 0 0;
            padding:10px;
            text-align:center;
        }
        dl dd{
            min-height:200px;
            text-align:center;
            border:solid 3px pink;
            border-radius:0 0 10px 10px;
        }
</style>


