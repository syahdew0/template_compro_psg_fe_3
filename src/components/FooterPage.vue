<template>
    <footer class="bg-gray-100 py-10 px-5">
      <div class="w-full mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        <!-- Brand Section -->
        <div>
          <img src="@/assets/logo.png" alt="Senyaman Logo" class="h-12 mb-3" />
          <h3 class="text-xl font-regular text-black">Senyaman Group</h3>
          <p class="text-sm">PT. Sinar Matahari Semesta, A member of PSG Group</p>
          <div class="flex space-x-3 mt-4">
            <i class="fas fa-globe text-2xl"></i>
            <i class="fa-brands fa-instagram text-2xl"></i>
            <i class="fa-brands fa-facebook text-2xl"></i>
            <i class="fa-brands fa-tiktok text-2xl"></i>
            <i class="fa-brands fa-x-twitter text-2xl"></i>
            <i class="fa-brands fa-threads text-2xl"></i>
            <i class="fa-brands fa-youtube text-2xl"></i>
          </div>
        </div>
        <!-- Quick Links -->
        <div>
          <h4 class="text-xl font-reguler mb-3 text-[#7E7E7E] ml-5">Quick Links</h4>
          <ul class="space-y-2">
            <li><router-link to="/" class="hover:text-blue-500 ml-6 ">Home</router-link></li>
            <li><router-link to="/layananPage" class="hover:text-blue-500 ml-6">Layanan</router-link></li>
            <li><router-link to="/tentangKami" class="hover:text-blue-500 ml-6">Tentang Kami</router-link></li>
            <li><router-link to="/hubungiKami" class="hover:text-blue-500 ml-6">Hubungi Kami</router-link></li>
          </ul>
        </div>
  
        <!-- Layanan Kami -->
        <div>
          <h4 class="text-xl font-regular mb-3 text-[#7E7E7E]">Layanan Kami</h4>
          <ul class="space-y-2">
            <li>Senyaman Living</li>
            <li>Senyaman House</li>
            <li>Senyaman Ride</li>
            <li>Senyaman Reward</li>
          </ul>
        </div>
  
        <div>
          <h4 class="text-xl font-regular mb-3 text-[#7E7E7E]">Contact Us</h4>
          <p>📞 (+62) 838 3688 2255</p>
          <p>✉️ halo@ptsms.co</p></div>
        <!-- Contact & Download -->
        

          <div >
            <h4 class="text-xl font-regular text-[#7E7E7E] mb-4 ">Download</h4>
            <img src="@/assets/appstore.png" alt="App Store" class="h-10 mb-2" />
            <img src="@/assets/playstore.png" alt="Google Play" class="h-10" />
          </div>

        </div>
    
  
      <div class="border-t mt-8 pt-4 text-center text-sm text-gray-600">
        © Copyright 2025 Senyaman. All Rights Reserved
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterPage",
  };
  </script>
  