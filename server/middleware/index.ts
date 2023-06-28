import express from "express"
const app = express();

// Nuxt 애플리케이션을 빌드하기 위한 Nuxt 객체 생성
// const { Nuxt, Builder } = require('nuxt')
// const config = require('../nuxt.config.js')
// config.dev = !(process.env.NODE_ENV === 'production')
// const nuxt = new Nuxt(config)
//
// // 개발 환경에서 빌드를 위해 Builder를 사용
// if (config.dev) {
//     const builder = new Builder(nuxt)
//     builder.build()
// }

// 모든 요청을 Nuxt 애플리케이션으로 라우팅
// app.use(nuxt.render)

app.get('/api/calendar', (req, res) => {
    const schedule = {
        workId: 1,
        workNm: "저녁 약속",
        date: "2023-07-02"
    }
    res.json(schedule)
})

// 서버를 시작하고 지정된 포트에서 수신 대기
app.listen(3001, () => {
    console.log('Server is listening on http://localhost:3001')
})

export  default  app;
