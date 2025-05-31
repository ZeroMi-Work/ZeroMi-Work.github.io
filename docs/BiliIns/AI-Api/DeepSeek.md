# DeepSeek 对接指南

## 获取DeepSeek密钥
### 注册DeepSeek开放平台账号
访问[https://platform.deepseek.com/](https://platform.deepseek.com/)注册DeepSeek开放平台账号

可使用**手机验证码**/**账号密码**或**扫描二维码**登录注册

### 充值余额
登录后首页点击`去充值`按钮或访问[https://platform.deepseek.com/top_up](https://platform.deepseek.com/top_up)，选择自己需要充值的余额（测试程序的推荐充值1元测试）

### 选择模型
DeepSeek目前支持`deepseek-chat`和`deepseek-reasoner`模型，两者差异可在[https://api-docs.deepseek.com/zh-cn/quick_start/pricing](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)查询，一般情况下使用`deepseek-chat`即可

### 获取密钥
点击首页左侧**API Keys**或访问[https://platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys)进入密钥获取页面，点击`创建 API key`按钮创建新API Key，并保管好创建的API Key
> 请将此 API key 保存在安全且易于访问的地方。出于安全原因，你将无法通过 API keys 管理界面再次查看它。如果你丟失了这个 key，将需要重新创建。

> [!WARNING]
> 请勿轻易将你的API Key发送给他人，请保管好你的API Key，防止泄露，否则可能会有财产损失的风险


## 接入BiliIns
### 修改配置文件
打开`setting.json`，修改`"type": "false",`为`"type": "deepseek",`，`"key": "",`修改为你刚才生成的API Keys，如`"key": "sk-eecc677190d34f99b4e5fc6c8b497700",`

接下来，修改`"AIName": "deepseek-chat",`为你需要的模型名称，建议保持默认即可

### 重启服务
如果刚才已经启动了BiliIns服务，请将服务关闭后，重新运行`BiliIns.exe`或执行启动命令

### 体验AI
尝试是否能正常使用AI功能，如果不出意外，此时将可以正常使用AI评论动向分析功能

如果不能正常使用，请将教程步骤重新执行，如果还是无法正常使用，请将页面截图、后台截图和日志文件（`logs`目录下）提交到[Issue](https://github.com/ZeroMi-Studio/BiliIns/issues)反馈