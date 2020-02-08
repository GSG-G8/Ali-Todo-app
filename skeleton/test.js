const todoFunctions = require('../skeleton/logic.js');


test('addtodo() returns a new array, it should contain todos with the newTodo added to the end', ()=> {
	let mainArr = [{id:1,test1:'test1'}]
	let actual = todoFunctions.addTodo(mainArr,{id:2,test2:'test2'})
	let expected = [{id:1,test1:'test1'},{id:2,test2:'test2'}]
	expect(actual).toEqual(expected);
});


test('deleteTodo() return a new array, this should not contain any todo with an id of idToDelete', ()=> {
	let mainArr = [{id:1,test1:'test1'},{id:2,test2:'test2'}]
	let actual = todoFunctions.deleteTodo(mainArr,2)
	let expected = [{id:1,test1:'test1'}]
	expect(actual).toEqual(expected);
});


test('markTodo() return same array but will toggle between true and false in done value only', ()=>{
	let mainArr = [{id:1,description:'test1',done:false}]
	let actual = todoFunctions.markTodo(mainArr,1)
	let expected = [{id:1,description:'test1',done:true}]
	expect(actual).toEqual(expected);
})

