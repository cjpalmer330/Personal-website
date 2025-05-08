import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import AboutMe from './pages/AboutMe.vue'
import Projects from './pages/Projects.vue'
import AboutThis from './pages/AboutThis.vue'
import NotFound from './pages/NotFoundPage.vue'
import AttendanceApp from './pages/AttendanceApp.vue'
import SmallProjects from './pages/SmallProjects.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/AboutMe', component: AboutMe },
    { path: '/Projects', component: Projects },
    { path: '/Projects/PersonalWebsite', component: AboutThis },
    { path: '/:pathMatch(.*)*', component: NotFound },
    { path: '/Projects/AttendanceApp', component: AttendanceApp},
    { path: '/Projects/MiscProjects', component: SmallProjects}
  ]
})

export default router