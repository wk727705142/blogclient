 export function order(obj={a:1,b:2}){
    let str = Object.keys(obj).map((item,index)=>{
        return item+"="+obj[item]
    }).join("&");

    return str
    
}

