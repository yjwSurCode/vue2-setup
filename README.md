# vue2-setup
vue2 setup语法 模版

vue create project

vue-router4与vuex4版本 只能在vue3中使用

vue-router3与vuex3版本 才能在vue2中使用


"vue-router": "^3.5.1",

eslint-config-prettier作用是关闭eslint中与prettier冲突的规则。
eslint-plugin-prettier作用是让eslint用prettier来格式化，相当于当代码格式不符合prettier的配置的时候，也可以报错一个eslint错误


git config pull.rebase false



领队： 学校名称 领队昵称  联系QQ 组织群号 是否公开群号  雀魂昵称 雀魂段位 uid 天凤昵称 天凤段位 在籍情况  证明  签名

队员(非领队)： 队员昵称 学校名称 联系QQ 雀魂昵称 雀魂段位 uid 天凤昵称 天凤段位 在籍情况 证明  签名



外网面板地址:  http://129.211.219.138:8888/850b1ff1
内网面板地址:  http://10.206.0.16:8888/850b1ff1




 if (newV === 0) {
      //不是领导
      rules.value = {
        isLeader: [
          {
            required: true,
            message: "请选择是否作为第四届比赛的负责人",
            trigger: "change",
          },
        ],
        coltNickName: [{ required: true, message: "请输入队员昵称", trigger: "submit" }],
        school: [{ required: true, message: "请输入学校昵称", trigger: "change" }],
        qq: [{ required: true, message: "请填写QQ", trigger: "change" }],
        isParticipate: [
          { required: true, message: "请选择是否参加第四届比赛", trigger: "change" },
        ],
        uid: [{ required: true, message: "请填写uid", trigger: "change" }],
        nickName: [{ required: true, message: "请填写雀魂昵称", trigger: "change" }],
        segment: [{ required: true, message: "请选择雀魂段位", trigger: "change" }],
        tnickName: [{ required: true, message: "请填写天凤昵称", trigger: "change" }],
        tsegment: [{ required: true, message: "请选择天凤段位", trigger: "change" }],
        state: [
          { required: true, message: "请选择在籍状态", trigger: "change" },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        certificateImg: [
          { required: true, message: "请上传学校证明", trigger: "change" },
        ],
        groupNickname: [
          { required: false, message: "请填写领队昵称", trigger: "change" },
        ],
        association: [
          {
            required: false,
            message: "请填写所参加比赛时社团组织群号",
            trigger: "change",
          },
        ],
      };
      rules2.value = {
        // 是否参加第四届比赛
        isParticipate: true,
        // 学校
        school: true,
        // qq
        qq: true,

        // 是不是领队
        isLeader: true,
        // 证明
        certificateImg: true,
        // 签名
        signImg: true,
        // 是否公开
        isPublic: false,
        // 领队昵称
        groupNickname: false,
        // 参赛组织群号
        association: false,
        //! 队员昵称
        coltNickName: true,
        //!雀魂昵称
        nickName: true,
        //!雀魂段位
        segment: true,
        //! uid
        uid: true,
        //! 天凤昵称
        tnickName: true,
        //! 天凤段位
        tsegment: true,
        //! 状态
        state: true,
      };
    } else {
      rules.value = {
        isLeader: [
          {
            required: true,
            message: "请选择是否作为第四届比赛的负责人",
            trigger: "change",
          },
        ],
        school: [{ required: true, message: "请输入学校昵称", trigger: "change" }],
        qq: [{ required: true, message: "请填写QQ", trigger: "change" }],
        isParticipate: [
          { required: true, message: "请选择是否参加第四届比赛", trigger: "change" },
        ],
        uid: [{ required: true, message: "请填写uid", trigger: "change" }],
        nickName: [{ required: true, message: "请填写雀魂昵称", trigger: "change" }],
        segment: [{ required: true, message: "请选择雀魂段位", trigger: "change" }],
        tnickName: [{ required: true, message: "请填写天凤昵称", trigger: "change" }],
        tsegment: [{ required: true, message: "请选择天凤段位", trigger: "change" }],
        state: [
          { required: true, message: "请选择在籍状态", trigger: "change" },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        certificateImg: [
          { required: true, message: "请上传学校证明", trigger: "change" },
        ],
        groupNickname: [{ required: true, message: "请填写领队昵称", trigger: "change" }],
        association: [
          {
            required: true,
            message: "请填写所参加比赛时社团组织群号",
            trigger: "change",
          },
        ],
        coltNickName: [{ required: false, message: "请输入队员昵称", trigger: "blur" }],
      };
      rules2.value = {
        // 是否参加第四届比赛
        isParticipate: true,
        // 学校
        school: true,
        // 领队昵称
        groupNickname: true,
        // qq
        qq: true,
        // 参赛组织群号
        association: true,
        // 是否公开
        isPublic: true,
        // 是不是领队
        isLeader: true,
        // 证明
        certificateImg: true,
        // 签名
        signImg: true,
        //! 队员昵称
        coltNickName: false,
        //!雀魂昵称
        nickName: true,
        //!雀魂段位
        segment: true,
        //! uid
        uid: true,
        //! 天凤昵称
        tnickName: true,
        //! 天凤段位
        tsegment: true,
        //! 状态
        state: true,
      };
    }