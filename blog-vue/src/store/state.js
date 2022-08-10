const state = {
  isShow: true,
  isLogin:false,
  // 搜索对话框
  dialogVisible: false,
  // 管理员登录对话框
  loginDialog: false,
  isHide: false,
  isShowControls: false,
  currentSongIndex:0,
  // 是否切换成暗黑主题，默认否
  isDarkThem:false,
  homeBackgroundImg:'./img/pattern.png',
  styleobj: {
    fontSize: '30px',
    color: 'red',
    width: '250px'
  },
  songData: [{
      id: 1,
      name: 'Angel Baby',
      artist: 'Troye Sivan',
      url: './music/Troye Sivan - Angel Baby.mp3',
      cover: './img/Troye-Sivan.webp'
    },
    {
      id: 2,
      name: 'Not Angry',
      artist: 'Chris James',
      url: './music/Chris James - Not Angry.mp3',
      cover: './img/Chris-James.webp'
    },
    {
      id: 3,
      name: 'Attention',
      artist: 'Charlie Puth',
      url: './music/Charlie Puth - Attention_y0023y92u5d_1_0 [mqms].mp3',
      cover: './img/1647088259403.jpg'
    },
    {
      id: 4,
      name: '花海',
      artist: '周杰伦',
      url: './music/周杰伦 - 花海.mp3',
      cover: './img/18690fb6-d545-45e7-84dc-86e25798ad58.jpg'
    },
    {
      id: 5,
      name: '凄美地',
      artist: '郭顶',
      url: './music/郭顶 - 凄美地.mp3',
      cover: './img/郭顶.webp'
    }
  ]
}

export default state