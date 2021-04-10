<template>
  <div class="splash-screen">
    <div class="spinner-wrapper">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<style scoped>
.splash-screen {
    width: 80vw;
    height: 30vh;
  z-index: 70;    
  display: grid;
  place-content: center;
}


.spinner {
  width: 80px;
  height: 80px;
  margin: 100px auto;
  background-color: #762c8b;

  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>