// Using Promises.
function getTodo(id=1) {
    let url = 'https://jsonplaceholder.typicode.com/todos/' + id;
    fetch(url)
    .then(answer => answer.json())
    .then(json_answer => console.log(json_answer));
}

// Using async/await.
async function fetchTodo(id=1) {
    let url = 'https://jsonplaceholder.typicode.com/todos/' + id;
    let answer = await fetch(url);
    return answer.json();
}

console.log(await fetchTodo(89));
