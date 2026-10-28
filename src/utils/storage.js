export function getUser(){try{return JSON.parse(localStorage.getItem('greennest_user')||'null')}catch{return null}}
export function getAccounts(){try{return JSON.parse(localStorage.getItem('greennest_accounts')||'[]')}catch{return []}}
export function getMyPlants(){const user=getUser();if(!user)return [];try{return JSON.parse(localStorage.getItem('greennest_plants_'+user.email)||'[]')}catch{return []}}
export function saveMyPlants(items){const user=getUser();if(user)localStorage.setItem('greennest_plants_'+user.email,JSON.stringify(items))}
export function getWatered(){const user=getUser();if(!user)return {};try{return JSON.parse(localStorage.getItem('greennest_watered_'+user.email)||'{}')}catch{return {}}}
export function saveWatered(data){const user=getUser();if(user)localStorage.setItem('greennest_watered_'+user.email,JSON.stringify(data))}
