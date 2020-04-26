
import instance from '../utils/request';

export function sign_up(data){
    return new Promise((resolve,reject)=>{
        instance.post('/sign_up',data)
        .then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
   
}

export function sign_in(){
    
}
