export default function(answersList=[], action){
    if(action.type == 'addAnswer'){
        var answersListCopy = [...answersList];
        if(answersListCopy.length > (action.questionNumber-1))  {
            answersListCopy.pop();
        }
        answersListCopy.push(action.answer);
        console.log(answersListCopy)
        return answersListCopy
    } else {
        return answersList
    }
}