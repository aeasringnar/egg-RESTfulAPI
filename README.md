# egg-RESTfulAPI

基于egg.js 2.X的 RESTfulAPI 风格的项目模板，用于快速构建高性能的服务端。

## 技术栈

- **框架选择**：基于 Egg.js 2.X
- **数据模型**：基于 Mongoose 存储
- **授权验证**：基于JWT
- **内置功能**：文件处理，用户系统，错误处理及接口返回标准，全方位CRUD,分页,模糊查询等

## QuickStart

see [egg docs][egg] for more detail.

### Development

```bash
$ cd app & mkdir public & cd public & mkdir uploads
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
