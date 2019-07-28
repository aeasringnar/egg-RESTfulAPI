module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1513779989145_1674'

  // add your config here
  // 加载 errorHandler 中间件
  config.middleware = [ 'errorHandler', 'eggLog' ]

  // 只对 /api 前缀的 url 路径生效
  // config.errorHandler = {
  //   match: '/api',
  // }

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://localhost:8000' ],
  }

  config.multipart = {
    fileExtensions: [ '.apk', '.pptx', '.docx', '.csv', '.doc', '.ppt', '.pdf', '.pages', '.wav', '.mov' ], // 增加对 .apk 扩展名的支持
  },

  config.bcrypt = {
    saltRounds: 10 // default 10
  }

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/egg_x',
    options: {
      useMongoClient: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      bufferMaxEntries: 0,
    },
  }

  config.jwt = {
    secret: 'Great4-M',
    enable: true, // default is false
    match: '/jwt', // optional
  }

  config.swagger2 = {
    enable: true, // disable swagger , default true
    base: {
      schemes: [
        'http',
        'https',
      ],
      /* default config,support cover
      
      host: '127.0.0.1:7001',
      basePath: '/',
      consumes: [
      'application/json',
      ],
      produces: [
      'application/json',
      ],
      */
      info: {
        description: 'This is a egg-RESTfulAPI swagger-ui html',
        version: '1.0.0',
        title: 'egg-RESTfulAPI',
        contact: {
          email: 'caandoll@aliyun.com',
        },
        license: {
          name: 'Apache 2.0',
          url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
        },
      },
      tags: [
        {
          name: 'admin',
          description: 'Admin desc',
        },
        {
          name: 'role',
          description: 'Role desc',
        },
      ],
      definitions:{
      // model definitions
      },
      securityDefinitions:{
      // security definitions
      }
    },
  };

  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
      '/example': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };

  return config
}
