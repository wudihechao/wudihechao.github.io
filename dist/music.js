const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "体面",
        artist: '于文文',
        url: 'http://win.web.nf01.sycdn.kuwo.cn/e27a76df4e5c50a4055442c9d97f2451/5d9b4964/resource/n1/32/94/1843537127.mp3',
        cover: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=45ead8f7ba3533fae1bb9b7cc9ba967a/b812c8fcc3cec3fda031f68cdd88d43f8794273f.jpg',
      },
      {
        name: '白羊',
        artist: '徐秉龙&沈以诚',
        url: 'http://win-web-nf01-sycdn.kuwo.cn/b857f0b017e6dc52ae4537cc5c80140e/5d9aee60/resource/n2/72/58/2811696247.mp3',
        cover: 'http://img3.kuwo.cn/star/starheads/120/67/74/3204842448.jpg',
      },
      {
        name: '绿色',
        artist: '陈雪凝',
        url: 'http://sp-sycdn.kuwo.cn/6a6022d0ccc92782737c1fe80bd51175/5d9aeed2/resource/n3/79/89/3763381716.mp3',
        cover: 'http://img2.kuwo.cn/star/albumcover/120/92/93/306713154.jpg',
      },
      {
        name: '退',
        artist: '蒋蒋',
        url: 'http://win-web-nf01-sycdn.kuwo.cn/1261d541a211d8219067fc4f9c5f2b4a/5d9aef27/resource/n3/20/34/3457848894.mp3',
        cover: 'http://img2.kuwo.cn/star/albumcover/120/3/46/4189090216.jpg',
      },
      {
        name: '恋爱循环',
        artist: '花泽香菜',
        url: 'http://win-web-nf01-sycdn.kuwo.cn/af78a7e41d78250b0e4de9e4e55a8d5b/5d9aef6c/resource/n2/60/21/501763569.mp3',
        cover: 'http://img3.kuwo.cn/star/albumcover/120/83/18/648271655.jpg',
      }
    ]
});
