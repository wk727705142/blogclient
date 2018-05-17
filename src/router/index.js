import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Zhuye from "@/components/Zhuye"
import Adduser from "@/components/Adduser"
import Allpage from "@/components/Allpage"
import Newpage from "@/components/Newpage"
import Alluser from "@/components/Alluser"
import Write_article from "@/components/Write_article"
import Personal from "@/components/personal"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/zhuye",
      name:"zhuye",
      component:Zhuye,
      children:[
        {
          path:"adduser",
          component:Adduser
        },
        {
          path:"allpage",
          component:Allpage
        },
        {
          path:"newpage",
          component:Newpage
        },
        {
          path:"personal",
          component:Personal
        },
        {
          path:"write_article",
          component:Write_article
        },
        {
          path:"alluser",
          component:Alluser
        }
      ]
    }
  ]
})
