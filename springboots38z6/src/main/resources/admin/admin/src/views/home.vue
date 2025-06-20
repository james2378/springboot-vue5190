<template>
<div class="content">
	<div class="text" :style='{"border":"10px solid rgba(1, 202, 230, 1)","margin":"10% auto","color":"#333","textAlign":"center","background":"rgba(255, 255, 255, 1)","width":"1537px","fontSize":"24px","lineHeight":"375px","fontWeight":"bold","height":"375px"}'>欢迎使用 {{this.$project.projectName}}</div>
</div>
</template>
<script>
import router from '@/router/router-static'
export default {
	data() {
		return {
			
		};
	},
  mounted(){
    this.init();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>