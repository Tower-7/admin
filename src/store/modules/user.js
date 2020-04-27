import { apiUser } from '../../config/';
import cookie from 'cookie_js'
const state = {
    user:{}
}
const mutations ={
    userInfo(state,o){
        state.user = o
        cookie.set('user',o)
    }
}

const actions = {
    sign_in({ commit },data){
        return new Promise((resolve,reject)=>{
            apiUser.sign_in(data).then(res=>{
                commit('userInfo',data)
                resolve(res)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
}