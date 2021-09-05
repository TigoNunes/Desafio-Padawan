const TMDB_ENDPOIN_ENDPOINT = 'https://jsonplaceholder.typicode.com/';
const albumsPrefix =  'albums';
const todosPrefix =  'todos';
const postsPrefix =  'posts';

$(() =>{
    $.get(TMDB_ENDPOIN_ENDPOINT + postsPrefix).then((data)=>{
        $("#tabela").html("");
        $("#tabela").append(`
        <thead>
              <tr>
                <th scope="col">UserID</th>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
              </tr>
        </thead>
        <tbody>
        `)
        for (let i = 0; i < data.length; i++){
            let userId = data[i].userId;
            let id = data[i].id;
            let title = data[i].title;
            let body = data[i].body;
            $("#tabela").append(`
            <tr>
                <td>${userId}</th>
                <td>${id}</td>
                <td>${title}</td>
                <td>${body}</td>
            </tr>
            `)//Insirir html da tabela lá dentro
        }
        $("#tabela").append(`
        </tbody>
        `)

    })
})