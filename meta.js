module.exports = {
  helpers: {
    raw: function (options) {
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': '项目名称'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': '项目描述',
      'default': 'ZQun-ssr(nuxt+iview+axios+vuex)项目'
    },
    author: {
      'type': 'string',
      'message': '作者'
    },
    port: {
      'type': 'string',
      'required': true,
      'message': '服务器端口号（请统一生产环境端口）',
      'default': '3000'
    },
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm i # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm i # Or yarn\n  npm run dev{{/inPlace}}'
};
