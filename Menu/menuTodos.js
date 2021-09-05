var TMDB_ENDPOIN_ENDPOINT = 'https://jsonplaceholder.typicode.com/';
var albumsPrefix =  'albums';
var todosPrefix =  'todos';
var postsPrefix =  'posts';

$(() =>{
    $.get(TMDB_ENDPOIN_ENDPOINT + todosPrefix).then((data)=>{
        $("#tabela").html("");
        $("#tabela").append(`
        <thead>
              <tr>
                <th scope="col">UserID</th>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Completed</th>
              </tr>
        </thead>
        <tbody>
        `)
        for (let i = 0; i < data.length; i++){
            let userId = data[i].userId;
            let id = data[i].id;
            let title = data[i].title;
            let completed = data[i].completed;
            $("#tabela").append(`
            <tr>
                <td>${userId}</th>
                <td>${id}</td>
                <td>${title}</td>
                <td>${completed}</td>
            </tr>
            `)//Insirir html da tabela lá dentro
        }
        $("#tabela").append(`
        </tbody>
        `)

    })
})