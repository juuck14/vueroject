export default ({redirect, store}: any) => {
    if(!store.state.userInfo.id){
        redirect({path: '/user/login'})
    }
}