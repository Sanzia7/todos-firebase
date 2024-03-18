//Устанавливаем нужный пакет из firebase в наше react приложение:
import { initializeApp } from 'firebase/app'
//здесь импортируется готовый шаблон базы данных для того, чтобы потом хранить в ней задания:
import { getDatabase } from 'firebase/database'

// Your web app's Firebase configuration:
const firebaseConfig = {
	apiKey: 'AIzaSyDOWSUzxQ2ydMqRMf3PSYiWoQHSP809KqA',
	authDomain: 'todosproject-554b3.firebaseapp.com',
	projectId: 'todosproject-554b3',
	storageBucket: 'todosproject-554b3.appspot.com',
	messagingSenderId: '477201117961',
	appId: '1:477201117961:web:365a76354e6e3ff40c99d8',

	//самостоятельно нужно создать путь к созданной новой  базе данных через Build: Realtime Database: Create Database(ds) выбираем регион и тест/режим : test mode/ и уже полученный путь копируем и вставляем:
	databaseURL:
		'https://todosproject-554b3-default-rtdb.europe-west1.firebasedatabase.app/',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

//экспортирую переменную db  с загруженной базой данных: getDatabase в которую передаю переменную (app) с  уже присвоенным ей значением ф-ции initializeApp(в которую передаются все насторйки (firebaseConfig):
export const db = getDatabase(app)

//в этом приложении db будет использоваться для хранения заданий

//чтобы создать свой url  путь к базе данных нужно пеерйти в консоль, в разделе build выбрать Realtime Database
//Belgium  / 30 days / from 09.01.2024 to 07.02.2024
//выбрать тестировочный режиим на 30 дней (после этого эту базу можно снова обновить)
//из React app происходит подключение к сервису firebase и его базе данных


//npm install firebase
// npm install firebase-tools


//todosproject-554b3
// npm install -g firebase-tools
