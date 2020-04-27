
import instance from '../../utils/request';

function sign_up(data){
    return new Promise((resolve,reject)=>{
        instance.post('/sign_up',data)
        .then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
   
}

function sign_in(data){
    return new Promise((resolve,reject)=>{
        instance.post('/sign_in',data)
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export default {
    sign_up,
    sign_in
}
