import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '@/components/BookDetail.vue'
import User from '@/views/User.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserPost from '@/components/UserPost.vue'
import HomeSub from '@/components/HomeSub.vue'


// import NotFound from '@/components/Notfound.vue'

// Vue.jsのプラグインをインストール
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      // 名前のないrouter-viewはdefault
      default: Home,
      sub: HomeSub,
    } 
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 遅延ローディングコンポーネント。必要な時だけ呼び出す
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/book',
    name: 'BookList',
    component: BookList,
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: BookDetail,
    props: route => ({ 
      id: Number(route.params.id),
      title: route.params.title,
      content: route.params.content,
    })
  },
  {
    path: '/user',
    // ネストしたいときはnameを書くとエラーが起きる
    // name: 'User',
    component: User,
    children:[
      {
        path:'profile',
        component: UserProfile
      },
      {
        path:'post',
        component: UserPost
      }
    ]
  },
  
  // {
  //   // ※の意味はpathにマッチしないもの全て
  //   path:'*',
  //   // redirect: '/',
  //   name: 'NotFound',
  //   component: NotFound
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
