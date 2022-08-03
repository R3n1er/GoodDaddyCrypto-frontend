export default function(points = 0, action){
    if(action.type == 'addPoints'){
        return action.points
    } else {
        return points
    }
}