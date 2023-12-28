import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/components/pages/HomePage.vue";
import AboutMe from "@/components/pages/AboutMe.vue";
import WhyVue from "@/components/pages/WhyVue.vue";
import MyResume from "@/components/pages/MyResume.vue";
import SkillDemo from "@/components/pages/SkillDemo.vue";

export const router = createRouter({
	history: createWebHashHistory(),
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
                    path: "demo1",
                    name: "demo1",
                    component: {template: ""}
                }
            ]
        }
	]
})