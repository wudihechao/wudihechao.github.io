const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "体面",
        artist: '于文文',
        url: 'https://hewanyue.com/mp3/timian.mp3',
        cover: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=45ead8f7ba3533fae1bb9b7cc9ba967a/b812c8fcc3cec3fda031f68cdd88d43f8794273f.jpg',
      },
      {
        name: '白羊',
        artist: '徐秉龙&沈以诚',
        url: 'https://hewanyue.com/mp3/baiyang.mp3',
        cover: 'http://img3.kuwo.cn/star/starheads/120/67/74/3204842448.jpg',
      },
      {
        name: '绿色',
        artist: '陈雪凝',
        url: 'http://fs.open.kugou.com/889c155e3dfcf0e081fbb8bca80fa488/5d9c51d1/G161/M0A/09/1F/QYcBAFyQz--Ae3laAEHWnhJxq1c247.mp3',
        cover: 'http://img2.kuwo.cn/star/albumcover/120/92/93/306713154.jpg',
      },
      {
        name: '退',
        artist: '蒋蒋',
        url: 'http://fs.open.kugou.com/fce2bd3958921509e4b6b83a3d993f4c/5d9c50b0/G112/M01/1F/19/EIcBAFnM4FuAdrieADsTn3zi8ZI661.mp3',
        cover: 'http://img2.kuwo.cn/star/albumcover/120/3/46/4189090216.jpg',
      },
      {
        name: '恋爱循环',
        artist: '花泽香菜',
        url: 'http://fs.open.kugou.com/7ccfce6341fde6fcbc38a258e2d5dd07/5d9c532f/G002/M05/0F/08/Qg0DAFS4Om6ADD4gAD4IAK1LhpU308.mp3',
        cover: 'http://img3.kuwo.cn/star/albumcover/120/83/18/648271655.jpg',
      }
    ]
});
