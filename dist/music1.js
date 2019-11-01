{% aplayerlist %}
{
    "narrow": false,                          // （可选）播放器袖珍风格
    "autoplay": false,                         // （可选) 自动播放，移动端浏览器暂时不支持此功能
    "mode": "random",                         // （可选）曲目循环类型，有 'random'（随机播放）, 'single' (单曲播放), 'circulation' (>循环播放), 'order' (列表播放)， 默认：'circulation'      "showlrc": 3,                             // （可选）歌词显示配置项，可选项有：1,2,3
    "mutex": true,                            // （可选）该选项开启时，如果同页面有其他 aplayer 播放，该播放器会暂停
    "theme": "#e6d0b2",                       // （可选）播放器风格色彩设置，默认：#b7daff
    "preload": "metadata",                    // （可选）音乐文件预载入模式，可选项： 'none' 'metadata' 'auto', 默认: 'auto'
    "listmaxheight": "513px",                 // (可选) 该播放列表的最大长度 
    "music": [
        {
            "title": "体面",
            "author": "于文文",
            "url": "https://hewanyue.com/mp3/timian.mp3",
            "pic": "https://hewanyue.com/mp3/cover/timian.jpg",
            "lrc": "https://hewanyue.com/mp3/lrc/体面-于文文.lrc"
        },  
        {
            "title": "白羊",
            "author": "徐秉龙&沈以诚",
            "url": "https://hewanyue.com/mp3/baiyang.mp3",
            "pic": "https://hewanyue.com/mp3/cover/baiyang.jpg"
            "lrc": "https://hewanyue.com/mp3/lrc/白羊-沈以诚徐秉龙.lrc"
        }   
    ]   
}   
{% endaplayerlist %}
