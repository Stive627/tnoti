export default function getGreeting(time){
    const numTime = Number(time)
    if(numTime > 12){
        return 'Good morning'
    }
    else if(numTime >= 12 && numTime < 18){
        return 'Good afternoon'
    }
    else if(numTime >= 18 && numTime >=23){
        return 'Good evening'
    }
    else{
        throw new Error('An error occured while setting time.')
    }
    

}