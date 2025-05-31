# 🔧 配置说明
编辑 `setting.json` 调整参数：
```json
/*
请勿直接复制本文件内容
若需复制，请将注释删除
*/
{
  "AI": {
    "type": "false", // 是否启用AI功能，需本地Ollama或DeepSeek API支持，选填ollama或deepseek
    "key": "", // DeepSeek的密钥
    "AIName": "deepseek-chat", // 使用的模型名称
    "text": "对评论进行分析(结合分析, 不可逐条分析, 不可说明该分析是针对哪几条评论), 输出不可涉及评论内容; 仅对情感和正反风向进行200字以内简要分析", // AI分析时提交的前缀
    "SampleQuantity": 60 // 提交的评论样本数量
  },

  "IP": {
    "host": "0.0.0.0", // 不懂勿改
    "port": 1145 //网页端口
  }
}
```