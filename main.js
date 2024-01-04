document.addEventListener('DOMContentLoaded', function () {
    // Truy vấn lịch trình và công việc từ server và hiển thị lên trang
    fetchSchedule();

    function fetchSchedule() {
        // Gọi API để lấy lịch trình và công việc từ server
        fetch('/api/schedule')
            .then(response => response.json())
            .then(schedule => displaySchedule(schedule))
            .catch(error => console.error('Lỗi khi lấy dữ liệu:', error));
    }

    function displaySchedule(schedule) {
        const scheduleContainer = document.getElementById('schedule');
        scheduleContainer.innerHTML = ''; // Xóa nội dung cũ

        // Hiển thị lịch trình và công việc
        schedule.forEach(entry => {
            const scheduleEntry = document.createElement('div');
            scheduleEntry.classList.add('schedule-entry');
            scheduleEntry.innerHTML = `
                <h3>${entry.title}</h3>
                <p>Thời gian: ${entry.startTime} - ${entry.endTime}</p>
                <p>Ngày: ${entry.date}</p>
            `;
            scheduleContainer.appendChild(scheduleEntry);
        });
    }
});
