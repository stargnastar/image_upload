const express=require('express'); //express를 불러옴
const multer=require('multer'); //multer라이브러리를 불러옴
const upl/oad=multer({ dest : "uploads" }); //업로드 경로를 설정///

const app=express(); //앱을 만들어줌
const PORT=5000; //사용한 포트번호를 선언


// 라우터 만들기
app.post("/upload", upload.single("imageTest"), (req, res)=>{ //image라는 이름의 단일 파일을 업로드 함
    console.log(req.file);
    res.json(req.file);
})


app.listen(PORT, ()=> console.log("Express server listening on PORT "+PORT)); //port연결




