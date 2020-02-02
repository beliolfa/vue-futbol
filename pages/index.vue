<template>
  <div class="home-container">
    <div class="home-header">
      <div class="home-title">PC FUTBOL</div>
      <div class="home-dinamic">dinamic multimedia</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style lang="postcss">
.home-container {
  @apply bg-green-500 h-screen;
}
.home-header {
  @apply flex justify-between items-center p-8;
}
.home-title {
  font-family: Analogue;
  font-size: 120px;
  text-shadow: 4px 4px black;
  @apply text-yellow-900;
}
.home-dinamic {
  font-family: Optimus;
  font-size: 48px;
  @apply text-white;
}
</style>