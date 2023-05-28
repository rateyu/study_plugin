// // popup.js
// document.getElementById('uploadButton').addEventListener('click', function() {
//     const fileInput = document.getElementById('fileInput');
//     const file = fileInput.files[0];
//     // 调用后端接口上传文件
//     const data = new FormData();
//     data.append('file', file);
//     console.log("start1");
  
//     fetch('http://192.168.1.66:5000/upload_pdf', {
//       method: 'POST',
//       body: data
//     })
//     .then(response => response.json())
//     .then(data => {
//       // 自动下载转换后的txt文件
//       const link = document.createElement('a');
//       link.href = data.downloadUrl;
//       link.download = 'file.txt';
//       link.click();
//     });
//   });
  