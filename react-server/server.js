//(server.js에 추가)

app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/react-project/build/index.html"));
});

app.use( '/', express.static( path.join(__dirname, 'public') ))
app.use( '/react', express.static( path.join(__dirname, 'react-project/build') ))

app.get('/', function(요청,응답){
  응답.sendFile( path.join(__dirname, 'public/main.html') )
}) 
app.get('/react', function(요청,응답){
  응답.sendFile( path.join(__dirname, 'react-project/build/index.html') )
})