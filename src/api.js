const BASE_API_URL = 'https://us-central1-todo-test-d6410.cloudfunctions.net/api';

const _fetch = async (functionName, httpMethod, data) => {
    try {
        const params = {
            method: httpMethod,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        if (data) {
            params.body = JSON.stringify(data);
        }
        const res = await fetch(`${BASE_API_URL}/${functionName}`, params);
        return res.json();
    } catch (e) {
        console.log('fetch error');
        console.log(e);
    }
};

const doGet = (functionName) => _fetch(functionName, 'GET');
const doPost = (functionName, data) => _fetch(functionName, 'POST', data);

export const addToDo = (newToDo) => doPost('addToDo', newToDo);
export const fetchToDos = () => doGet('getToDos');