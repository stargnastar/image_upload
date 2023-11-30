const express=require('express') //express를 불러옴

const app=express(); //앱을 만들어줌
const PORT=5000; //사용한 포트번호를 선언


// 라우터 만들기
app.post("/upload", (req, res)=>{
    console.log("/upload called!");
    res.json({result:"success"});
})


app.listen(PORT, ()=> console.log("Express server listening on PORT "+PORT)); //port연결




