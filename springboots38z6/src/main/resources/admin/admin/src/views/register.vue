<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20220714/7afe00650b294a3fba4e67a1dc827ba3.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"top left","backgroundRepeat":"no-repeat","justifyContent":"center"}'>

			<el-form :style='{"width":"500px","padding":"20px","boxShadow":"0px 4px 10px 1px rgba(0,0,0,0.3020)","margin":"0 0 0 600px","background":"#fff","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm">
				<div v-if="true" :style='{"padding":"10px","margin":"0 0 10px 0","color":"rgba(1, 201, 229, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"24px","fontWeight":"600","height":"auto"}' class="title">基于Vue的米家商城的设计与实现注册</div>
				<div :style='{"width":"80%","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">用户名</div>
					<input :style='{"border":"1px solid #01C9E5","padding":"0 10px","outline":"none","color":"#000","width":"100%","fontSize":"14px","height":"44px"}' v-model="ruleForm.yonghuming" autocomplete="off" placeholder="用户名"  type="text"  />
				</div>
				<div :style='{"width":"80%","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">密码</div>
					<input :style='{"border":"1px solid #01C9E5","padding":"0 10px","outline":"none","color":"#000","width":"100%","fontSize":"14px","height":"44px"}' v-model="ruleForm.mima" autocomplete="off" placeholder="密码"  type="password"  />
				</div>
				<div :style='{"width":"80%","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">确认密码</div>
					<input :style='{"border":"1px solid #01C9E5","padding":"0 10px","outline":"none","color":"#000","width":"100%","fontSize":"14px","height":"44px"}' v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password"/>
				</div>
				<div :style='{"width":"80%","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">姓名</div>
					<input :style='{"border":"1px solid #01C9E5","padding":"0 10px","outline":"none","color":"#000","width":"100%","fontSize":"14px","height":"44px"}' v-model="ruleForm.xingming" autocomplete="off" placeholder="姓名"  type="text"  />
				</div>
				<div :style='{"width":"80%","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">手机</div>
					<input :style='{"border":"1px solid #01C9E5","padding":"0 10px","outline":"none","color":"#000","width":"100%","fontSize":"14px","height":"44px"}' v-model="ruleForm.shouji" autocomplete="off" placeholder="手机"  type="text"  />
				</div>
				<button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px auto 5px","outline":"none","color":"#fff","borderRadius":"0","background":"rgba(1, 201, 229, 1)","display":"block","width":"80%","fontSize":"16px","height":"44px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0 10%","color":"rgba(159, 159, 159, 1)","textAlign":"center","display":"inline-block","width":"100%","fontSize":"12px","textDecoration":"underline"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ruleForm: {
			},
			tableName:"",
			rules: {},
		};
	},
	mounted(){
		let table = this.$storage.get("loginTable");
		this.tableName = table;
	},
	created() {
    
	},
	destroyed() {
		  	},
	methods: {
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.yonghuming) && `yonghu` == this.tableName){
						this.$message.error(`用户名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `yonghu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.xingming) && `yonghu` == this.tableName){
						this.$message.error(`姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`yonghu` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
						this.$message.error(`手机应输入手机格式`);
						return
					}
					
					
					
					
					
					
					
					
					if(`yonghu` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
						this.$message.error(`余额应输入数字`);
						return
					}
					
					
					
					
					
					
				
			
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20220714/7afe00650b294a3fba4e67a1dc827ba3.png);
	}
</style>
