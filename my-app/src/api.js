// api.js
const BASE_URL = 'https://fictional-waddle-r6qwrp77w672p9w-4000.app.github.dev';

// 一个自定义的fetch函数，接受路径和选项作为参数
function customFetch(path, options = {}) {
  // 完整的URL
  const url = `${BASE_URL}${path}`;

  // 默认请求头
  const headers = {
    'Content-Type': 'application/json',
    // 可以添加更多默认的请求头，例如Authorization
  };

  // 合并传入的选项和默认选项
  const config = {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  };

  // 发起fetch请求
  return fetch(url, config)
    .then(response => response.json()) // 假设服务器返回的是JSON
    .catch(error => console.error('Error fetching data:', error));
}

export default customFetch;
