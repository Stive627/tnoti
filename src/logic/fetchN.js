export default function fetchN(url, obj={}, callback){
    return fetch(url, obj).then((value) =>value.json()).then(callback).catch(err => console.log(err))
}