<template>
    <video width="75%" height="auto" controls>
      <source :src="videoSrc" type="video/mp4">
      您的浏览器不支持 Video 标签。
    </video>
  </template>
   
  <script>
  export default {
    props: {
      videoSrc: {
        type: String,
        required: true,
      },
    },
  };
  </script>