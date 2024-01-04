<?php
// Đây là một ví dụ đơn giản, không bao gồm xử lý an toàn và kiểm soát lỗi đầy đủ

// Kết nối đến cơ sở dữ liệu
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối đến cơ sở dữ liệu thất bại: " . $conn->connect_error);
}

// Truy vấn danh sách công việc
$sql = "SELECT * FROM tasks";
$result = $conn->query($sql);

// Chuyển đổi kết quả thành mảng và trả về cho front-end
$tasks = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $tasks[] = $row;
    }
}

echo json_encode($tasks);

$conn->close();
?>
