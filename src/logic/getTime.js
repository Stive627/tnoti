export default function getTime(h,m){
    const am = new Intl.DateTimeFormat('fr-FR',{'minute':'numeric'}).format(new Date())
    const ah = (new Intl.DateTimeFormat('fr-FR',{'hour':'2-digit'}).format(new Date())).slice(0,2)
    const amu = + am
    const ahu = + ah
    const cleanTime = (time) => {
        const hmNA = !Number.isFinite(+time) || time < 0
        return hmNA ? 0 : +time
    }
    if(cleanTime(h) >= ahu && cleanTime(m) >= amu){
        const hour = cleanTime(h) - ahu
        const minute = cleanTime(m) - amu
        return {hour, minute}
    }
    else if(cleanTime(h) < ahu ){
            const hour = 0
            const minute = 0
            return {hour, minute}
    }
    else if(cleanTime(h) === ahu && cleanTime(m) < amu){
        const hour = 0
        const minute = 0
        return {hour, minute} 
    }
    else if(cleanTime(h) > ahu && cleanTime(m) < amu){
        const hour = cleanTime(h) - ahu -1
        const minute = cleanTime(m) + 60 - amu
        return {hour, minute}
    }
}