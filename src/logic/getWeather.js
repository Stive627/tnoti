export default function getWeather(arr,date){
    const meteoDay  = arr.reduce((a,c) => c.dt_txt.split(' ')[0] === date ? [...a, c] : a , [])
    if(meteoDay.length > 0){
        return meteoDay
    }
    return 'The weather is not available for this day.'
}