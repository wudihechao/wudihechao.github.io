const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "体面",
        artist: '于文文',
        url: 'https://win-web-nf01-sycdn.kuwo.cn/4199dbe68f62f04706f5be67cab5de61/5d9a9b11/resource/n3/94/8/3136134011.mp3',
        cover: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=45ead8f7ba3533fae1bb9b7cc9ba967a/b812c8fcc3cec3fda031f68cdd88d43f8794273f.jpg',
      },
      {
        name: '白羊',
        artist: '徐秉龙&沈以诚',
        url: 'https://win-web-nf01-sycdn.kuwo.cn/647f0cbe9cdadfea9959b50daedd23fc/5d9a9ba5/resource/n2/72/58/2811696247.mp3',
        cover: 'http://img3.kuwo.cn/star/starheads/120/67/74/3204842448.jpg',
      },
      {
        name: '绿色',
        artist: '陈雪凝',
        url: 'https://sp-sycdn.kuwo.cn/64eabd9b0a59fc2997717033b0339946/5d9a9cdf/resource/n3/79/89/3763381716.mp3',
        cover: 'http://img2.kuwo.cn/star/albumcover/120/92/93/306713154.jpg',
      },
      {
        name: '退',
        artist: '蒋蒋',
        url: 'https://win-web-nf01-sycdn.kuwo.cn/47470cdd6a2899e1d268b3492ff3daa9/5d9a9d31/resource/n3/20/34/3457848894.mp3',
        cover: 'http://img2.kuwo.cn/star/albumcover/120/3/46/4189090216.jpg',
      },
      {
        name: '恋爱循环',
        artist: '花泽香菜',
        url: 'https://win-web-nf01-sycdn.kuwo.cn/177e07c7feb2334f8312f60b4e170cb4/5d9a9c1e/resource/n2/60/21/501763569.mp3',
        cover: 'http://img3.kuwo.cn/star/albumcover/120/83/18/648271655.jpg',
      }
    ]
});
