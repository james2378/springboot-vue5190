<template>
	<div style="height: 100%;">
		<index-aside v-if="'horizontal' == 'vertical'" :style='{"boxShadow":"1px 0 6px  rgba(64, 158, 255, .3)","overflow":"hidden","top":"0","left":"0","background":"#304156","bottom":"0","width":"210px","fontSize":"0px","position":"fixed","height":"100%","zIndex":"1001"}'></index-aside>
		<el-main :style='"horizontal" == "vertical" ? {"minHeight":"100%","padding":"0","margin":"0 0 0 210px","position":"relative","display":"block"} : {"minHeight":"100%","margin":"0","position":"relative","backgroundRepeat":"no-repeat","background":"url(http://codegen.caihongy.cn/20220714/f63b71931dc5419faefbf728a2559a2b.png)"}'>
			<index-header :style='{"boxShadow":"0 1px 6px rgba(64, 158, 255, .2)","padding":"8px 20px","margin":"0 0 15px","alignItems":"center","background":"linear-gradient(-270deg, #41E7FF 0%, #41E7FF 30%, #01CAE6 30%, #01CAE6 66%, #313B4D 66%, #2E3543 100%)","display":"flex","width":"100%","position":"relative","justifyContent":"center","zIndex":"1"}'></index-header>
			<index-aside v-if="'horizontal' == 'horizontal'" :style='{"width":"100%","borderRadius":"0px 0px 40px 40px","background":"#fff","height":"auto"}'></index-aside>
			<bread-crumbs :title="title" :style='{"padding":"10px 15px","margin":"15px auto","borderColor":"rgba(1, 202, 230, 1)","borderWidth":"5px 3px 2px","background":"#fff","width":"95%","borderStyle":"solid"}' class="bread-crumbs"></bread-crumbs>
			<router-view :style='{"padding":"30px 50px","background":"rgba(228, 233, 239, 0.7)"}' class="router-view" style="height:auto;background: transparent;"></router-view>
		</el-main>
	</div>
</template>

<script>
	import IndexAside from '@/components/index/IndexAsideStatic'
	import IndexHeader from '@/components/index/IndexHeader'
	import menu from "@/utils/menu";
	export default {
		components: {
			IndexAside,
			IndexHeader
		},
		data() {
			return {
				menuList: [],
				role: "",
				currentIndex: -2,
				itemMenu: [],
				title: '',
			};
		},
		mounted() {
			let menus = menu.list();
			this.menuList = menus;
			this.role = this.$storage.get("role");
		},
		created() {
			this.init();
		},
		methods: {
			init(){
				this.$nextTick(()=>{
					
				})
			},
			menuHandler(menu) {
				this.$router.push({
					name: menu.tableName
				});
				this.title = menu.menu;
			},
			titleChange(index, menus) {
				this.currentIndex = index
				this.itemMenu = menus;
				console.log(menus);
			},
			homeChange(index) {
				this.itemMenu = [];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});
			},
			centerChange(index) {
				this.itemMenu = [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "修改密码",
					"tableName": "updatePassword"
				}, {
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "个人信息",
					"tableName": "center"
				}];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});
				
			}
		}
	};
</script>
<style lang="scss" scoped>
	a {
		text-decoration: none;
		color: #555;
	}

	a:hover {
		background: #00c292;
	}
	
	.el-main {
		padding: 0;
		display: block;
	}

	.nav-list {
		width: 100%;
		margin: 0 auto;
		text-align: left;
		margin-top: 20px;

		.nav-title {
			display: inline-block;
			font-size: 15px;
			color: #333;
			padding: 15px 25px;
			border: none;
		}

		.nav-title.active {
			color: #555;
			cursor: default;
			background-color: #fff;
		}
	}

	.nav-item {
		margin-top: 20px;
		background: #FFFFFF;
		padding: 15px 0;

		.menu {
			padding: 15px 25px;
		}
	}
	
	.detail-form-content {
	    background: transparent;
	}
</style>
