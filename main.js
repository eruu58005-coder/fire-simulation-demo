const mainPage = document.getElementById('main-page');
const videoPage = document.getElementById('video-page');
const videoEl = document.getElementById('video-player');
const hot1 = document.getElementById('hot-1');
const hot2 = document.getElementById('hot-2');

const videoList = {
  v1: "./video1.mp4", //消火栓灭火视频
  v2: "./video2.mp4"  //灭火器灭火视频
};

//视频播放结束自动返回主页
videoEl.onended = () => {
  videoEl.pause();
  videoEl.src = "";
  videoPage.classList.add("hidden");
  mainPage.classList.remove("hidden");
};

hot1.onclick = ()=> playVideo(videoList.v1);
hot2.onclick = ()=> playVideo(videoList.v2);

function playVideo(src){
  mainPage.classList.add("hidden");
  videoPage.classList.remove("hidden");
  videoEl.src = src;
  videoEl.play();
}
