<template>
  <div class="bg-futbol-green h-screen">
    <div class="flex justify-between items-center p-8">
      <div class="text-futbol-brown text-huge font-title">PC FUTBOL</div>
      <div class="font-dinamic text-white text-4xl flex items-center">
        <span>dinamic</span>
        <img class="w-24 mx-4" src="@/assets/images/dinamic-logo.png" />
        <span>multimedia</span>
      </div>
    </div>
    <div class="flex justify-between items-center pt-2">
      <div class="flex-1 flex flex-col items-center">
        <div class="text-futbol-brown text-giant">5.0</div>
        <div class="flex-1 uppercase text-futbol-brown bg-black text-4xl px-4">Temporada 96-97</div>
      </div>
      <div class="font-menu text-white uppercase font-black text-3xl flex-1">
        <div class="bg-futbol-green-dark mb-2 cursor-pointer hover:text-black hover:bg-white pl-12">
          Instrucciones
        </div>
        <div class="bg-futbol-green-dark mb-2 cursor-pointer hover:text-black hover:bg-white pl-16">
          Historia
        </div>
        <div class="bg-futbol-green-dark mb-2 cursor-pointer hover:text-black hover:bg-white pl-20">
          Base de datos
        </div>
        <div class="bg-futbol-green-dark mb-2 cursor-pointer hover:text-black hover:bg-white pl-24">
          Seguimiento
        </div>
        <div class="bg-futbol-green-dark mb-2 cursor-pointer hover:text-black hover:bg-white pl-32">
          Seguimiento manual
        </div>
        <div class="bg-futbol-green-dark mb-2 cursor-pointer hover:text-black hover:bg-white pl-32">
          Actualización on line
        </div>
        <div class="bg-futbol-green-dark mb-2 cursor-pointer hover:text-black hover:bg-white pl-32">
          Info futbol
        </div>
        <div class="bg-futbol-green-dark mb-2 cursor-pointer hover:text-black hover:bg-white pl-24">
          Partido amistoso
        </div>
        <div class="bg-futbol-green-dark mb-2 cursor-pointer hover:text-black hover:bg-white pl-20">
          Liga manager
        </div>
        <div class="bg-futbol-green-dark mb-2 cursor-pointer hover:text-black hover:bg-white pl-16">
          Liga promanager
        </div>
        <div class="bg-futbol-green-dark mb-2 cursor-pointer hover:text-black hover:bg-white pl-12">
          Proquinielas
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
