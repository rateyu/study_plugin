// document.getElementById('uploadButton').addEventListener('click', function() {
//     const fileInput = document.getElementById('fileInput');
//     const file = fileInput.files[0];
//     if (!file) {
//       alert("请选择一个文件");
//       return;
//     }
  
//     const data = new FormData();
//     data.append('file', file);
//     console.log("111");
  
//     fetch('http://127.0.0.1:5000/upload_pdf', {
//       method: 'POST',
//       body: data
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.blob();
//     })
//     .then(blob => {
//       console.log("222");
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = 'file.txt';  // 更改为你的文件名
//       link.style.display = 'none';
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     })
//     .catch(error => {
//       console.error('There has been a problem with your fetch operation:', error);
//     });
//   });
  

  // 上传并转换PDF文件
document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    
    const file = fileInput.files[0];
    if (!file) {
      alert("请选择一个文件");
      return;
    }
    const qustionsubmit = document.getElementById('qustionsubmit');
    // 禁用提交按钮
    qustionsubmit.disabled = true;
  
    const data = new FormData();
    data.append('file', file);
  
    // fetch('http://127.0.0.1:5000/upload_pdf', {
    fetch('http://127.0.0.1:5000/upload_pdf', {
      method: 'POST',
      body: data
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'file.txt';  // 更改为你的文件名
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 启用提交按钮
      qustionsubmit.disabled = false;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      // 启用提交按钮
      qustionsubmit.disabled = false;
    });
  });
  
  // 将文本转换为MP3
//   document.getElementById('convertButton').addEventListener('click', function() {
//     const textToConvert = document.getElementById('textToConvert').value;
//     if (!textToConvert) {
//       alert("请输入英文句子");
//       return;
//     }
  
//     const data = new FormData();
//     data.append('text', textToConvert);
  
//     fetch('http://127.0.0.1:5000/text_to_speech', {
//       method: 'POST',
//       body: data
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.blob();
//     })
//     .then(blob => {
//       const url = window.URL.createObjectURL(blob);
//       const audio = new Audio(url);
//       audio.play();
//     })
//     .catch(error => {
//       console.error('There has been a problem with your fetch operation:', error);
//     });
//   });
  
document.getElementById('convertButton').addEventListener('click', function() {
    const textToConvert = document.getElementById('textToConvert').value;

    if (!textToConvert) {
      alert("请输入英文句子");
      return;
    }
    const textToConvertBt = document.getElementById('convertButton');
    // 禁用提交按钮
    textToConvertBt.disabled = true;
  
    const data = new FormData();
    data.append('text', textToConvert);
  
    fetch('http://127.0.0.1:5000/text_to_speech', {
      method: 'POST',
      body: data
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.play();
  
      // 自动下载MP3文件
      const link = document.createElement('a');
      link.href = url;
      link.download = 'output.mp3'; // 更改为你的文件名
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // 启用提交按钮
      textToConvertBt.disabled = false;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      // 启用提交按钮
      textToConvertBt.disabled = false;
    });
  });
  

//   document.getElementById('submit').addEventListener('click', function() {
//     var input = document.getElementById('input').value;
//     fetch('http://127.0.0.1:5000/answer', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({question: input})
//     })
//     .then(response => response.json())
//     .then(data => {
//       document.getElementById('response').innerText = data.answer;
//     });
//   });

  document.getElementById('qustionsubmit').addEventListener('click', function() {
    var input = document.getElementById('qustioninput').value;
    var inputBt = document.getElementById('qustionsubmit');
    // 禁用提交按钮
    inputBt.disabled = true;
    
    fetch('http://127.0.0.1:5000/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({question: input})
    })
    .then(response => response.text())
    .then(text => {
      console.log(text);
      return JSON.parse(text);
    })
    .then(data => {
      document.getElementById('response').innerText = data.answer;
      // 启用提交按钮
      inputBt.disabled = false;
    })
    .catch(error => {
      console.log('Error:', error);
      // 启用提交按钮
      inputBt.disabled = false;
    });
  });
  