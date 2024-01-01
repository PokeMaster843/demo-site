import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/components/pages/HomePage.vue";
import AboutMe from "@/components/pages/AboutMe.vue";
import WhyVue from "@/components/pages/WhyVue.vue";
import MyResume from "@/components/pages/MyResume.vue";
import SkillDemo from "@/components/pages/SkillDemo.vue";
import DemoA from "@/components/pages/demos/DemoA.vue";

export const router = createRouter({
	history: createWebHashHistory(),
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savePosition) {
        if(to.hash) {
            return {
                el: to.hash
            };
        }
    },
	routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },

		{
            path: "/about",
            name: "about",
            component: AboutMe
        },

        {
            path: "/whyvue",
            name: "whyvue",
            component: WhyVue
        },

        {
            path: "/resume",
            name: "resume",
            component: MyResume
        },

        {
            path: "/demos",
            name: "demos",
            component: SkillDemo,
            children: [
                {
                    path: "demo-a",
                    name: "demoA",
                    component: DemoA
                },
                {
                    path: "demo-b",
                    name: "demoB",
                    component: DemoA
                },
                {
                    path: "demo-c",
                    name: "demoC",
                    component: DemoA
                }
            ]
        }
	]
})