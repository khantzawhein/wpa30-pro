import Vue from 'vue';
import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import TestComponent from './components/TestComponent.vue';
import ProductCreateComponent from './components/ProductCreateComponent.vue';
import PostIndexCom from './components/PostIndexCom.vue';
import PostCreateCom from "./components/PostCreateCom.vue";
import PostEditCom from "./components/PostEditCom.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/products",
		name: "example-component",
		component: ExampleComponent
	},
	{
		path: "/products/blog",
		name: "blog-component",
		component: BlogComponent
	},
	{
		path: "/products/test",
		name: "test-component",
		component: TestComponent
	},
	{
		path: "/products/create",
		name: "product-create",
		component: ProductCreateComponent
	},
	{
		path: "/posts",
		name: "post-index",
		component: PostIndexCom
	},
	{
		path: "/posts/create",
		name: "posts-create",
		component: PostCreateCom
	},
	{
		path: "/posts/edit",
		name: "posts-edit",
		component: PostEditCom
	}
];

const router = new VueRouter({
	hashband: false,
	history: true,
	mode: "history",
	routes
});

export default router;