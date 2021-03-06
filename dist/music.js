const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "体面",
        artist: '于文文',
        url: 'https://hewanyue.com/mp3/timian.mp3',
        cover: 'https://hewanyue.com/mp3/cover/timian.jpg',
      },
      {
        name: '白羊',
        artist: '徐秉龙&沈以诚',
        url: 'https://hewanyue.com/mp3/baiyang.mp3',
        cover: 'https://hewanyue.com/mp3/cover/baiyang.jpg',
      },
      {
        name: '绿色',
        artist: '陈雪凝',
        url: 'https://hewanyue.com/mp3/lvse.mp3',
        cover: 'https://hewanyue.com/mp3/cover/lvse.jpg',
      },
      {
        name: '退',
        artist: '蒋蒋',
        url: 'https://hewanyue.com/mp3/tui.mp3',
        cover: 'https://hewanyue.com/mp3/cover/tui.jpg',
      },
      {
        name: '恋爱循环',
        artist: '花泽香菜',
        url: 'https://hewanyue.com/mp3/lianaixunhuan.mp3',
        cover: 'https://hewanyue.com/mp3/cover/lianaixunhuan.jpg',
      }
    ]
});
