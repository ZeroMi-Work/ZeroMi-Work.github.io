# 🔧 配置说明
编辑 `setting.json` 调整参数：
```json
/*
请勿直接复制本文件内容
若需复制，请将注释删除
*/
{
  "AI": {
    "type": "false", // 是否开始AI功能，需本地Ollama支持，开始AI功能请修改为ollama
    "url": "http://localhost:11434/api", // Ollama的API地址
    "AIName": "deepseek-r1:14b" // 使用的模型名称
  },
  "host": "0.0.0.0", // 不懂勿改
  "port": 1145 //网页端口
}```