import {get, orderByChild, query, ref, push, set, remove} from 'firebase/database'
import { db } from '../firebase'

//CRUD:

export const requestCreateTodo = (newTodo) => push(ref(db, 'todos'), newTodo).then(({key}) => key)

export async function requestReadTodos (searchText = '', isSortingAZ = false) {
	const todosDbRef = ref(db, 'todos')
	const orderingField = isSortingAZ ? 'title' : 'id'

	const snapshot = await get(query(todosDbRef, orderByChild(orderingField)))
	let loadedTodos = []
	snapshot.forEach((todoSnapshot) => {
		const id = todoSnapshot.key
		const {title, completed} = todoSnapshot.val()
		loadedTodos.push({id, title, completed})
	})
	if (searchText !== '')
	{
		loadedTodos = loadedTodos.filter(
			({title: title_1}) => title_1.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
		)
	}
	return isSortingAZ ? loadedTodos : loadedTodos.reverse()
}


export const requestUpdateTodo = (todoData) => set(ref(db, `todos/${todoData.id}`), todoData)

export const requestDeleteTodo = (todoId) => remove(ref(db, `todos/${todoId}`))

//Документация для json-server:

//https://github.com/typicode/json-server
//https://github.com/typicode/json-server/tree/v0

//SORT

// Add _sort and _order (ascending order by default)

// GET /posts?_sort=views&_order=asc
// GET /posts/1/comments?_sort=votes&_order=asc

// For multiple fields, use the following format:

// GET /posts?_sort=user,views&_order=desc,asc

//Operators:

// Add _like to filter (RegExp supported)

// GET /posts?title_like=server
