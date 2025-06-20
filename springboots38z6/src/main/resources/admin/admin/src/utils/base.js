const base = {
    get() {
        return {
            url : "http://localhost:8080/springboots38z6/",
            name: "springboots38z6",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboots38z6/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Vue的米家商城的设计与实现"
        } 
    }
}
export default base
