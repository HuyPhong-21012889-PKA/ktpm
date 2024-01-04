const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Kết nối đến cơ sở dữ liệu MongoDB
mongoose.connect('mongodb://localhost:27017/scheduleDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Định nghĩa mô hình cho lịch trình và công việc
const ScheduleEntry = mongoose.model('ScheduleEntry', {
    title: String,
    startTime: String,
    endTime: String,
    date: String
});

app.use(bodyParser.json());

// Lấy lịch trình và công việc từ cơ sở dữ liệu
app.get('/api/schedule', (req, res) => {
    ScheduleEntry.find({}, (err, schedule) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(schedule);
        }
    });
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});
