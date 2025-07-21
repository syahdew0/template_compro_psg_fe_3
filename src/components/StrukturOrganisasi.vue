<template>
  <section class="py-16 px-6 bg-gradient-to-br from-blue-50 to-white min-h-screen font-poppins relative">
    <h2 class="text-4xl font-bold text-center mb-14 text-gray-800">
      Struktur Organisasi
    </h2>

    <!-- Founder to PA -->
    <div class="flex flex-col items-center relative mb-">
      <div class="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center border-t-[6px] border-blue-600 z-10">
        <h3 class="text-xl font-semibold text-gray-800">Founder</h3>
      </div>

      <!-- Line: Founder to PA -->
      <div class="w-1 h-16 bg-blue-500"></div>

      <div class="bg-blue-100 border-l-4 border-blue-500 rounded-lg shadow-inner p-4 w-full max-w-md text-center z-10">
        <h4 class="font-medium text-blue-900">Personal Assistant (PA)</h4>
      </div>

      <!-- Line: PA to GM section -->
      <div class="w-1 h-24 bg-green-500 top-0 relative z-0"></div>
    </div>

    <!-- GM + Finance Roles (Green) -->
    <div class="relative mb-24">
      <!-- Horizontal connector -->
      <div class="absolute top-8 left-[10%] w-[80%] h-1 bg-green-400 z-0"></div>

      <!-- Role Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
        <div
          v-for="role in financeRoles"
          :key="role"
          class="bg-white rounded-xl top-12 shadow-lg border-t-[10px] border-green-500 p-8 text-center hover:scale-[1.02] transition"
        >
          <h4 class="text-sm font-semibold text-gray-800">{{ role }}</h4>
        </div>
      </div>
    </div>

    <!-- Line to Divisions -->
    <div class="relative mb-20">
      <!-- Vertical line from GM to division line -->
      <div class="absolute -top-28 left-1/2 transform -translate-x-1/2 w-1 h-40 bg-gray-400 z-0"></div>
      <!-- Horizontal line to division boxes -->
      <div class="absolute top-12 left-[10%] w-[80%] h-1 bg-gray-300 z-0"></div>
    </div>

    <!-- Divisions -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2 relative z-10">
      <div
        v-for="(division, index) in divisions"
        :key="index"
        :class="[
          'p-6 rounded-xl shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 bg-white border-t-[6px]',
          `border-${division.color}-500`
        ]"
      >
        <h4 class="text-xl font-semibold mb-4 text-center text-gray-800">{{ division.title }}</h4>
        <ul class="space-y-2">
          <li
            v-for="(r, i) in division.roles"
            :key="i"
            :class="[
              'text-sm flex items-start gap-2 rounded px-2 py-1',
              r.level === 'staff' ? 'bg-gray-100 border-l-4 border-gray-400 text-gray-700' : '',
              r.level === 'manager' ? 'bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800' : ''
            ]"
          >
            <svg class="w-4 h-full mt-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd" />
            </svg>
            <span>{{ r.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>


<script setup>
const financeRoles = [
  "Admin Payroll",
  "Finance Officer",
  "General Manager",
  "Accounting & Tax Officer",
  "Purchasing Officer"
];

const divisions = [
  {
    title: "Head of People & Culture",
    color: "yellow", // kepala divisi (level 4)
    roles: [
      { name: "Talent Acquisition & Development Officer", level: "staff" },
      { name: "Engagement & Culture Officer", level: "staff" },
      { name: "People & Operations Coordinator (HR + GA)", level: "staff" },
      { name: "Housekeeping Coordinator (Hospitality)", level: "staff" }
    ]
  },
  {
    title: "Technical Project Manager",
    color: "yellow",
    roles: [
      { name: "Fullstack Developer(s)", level: "staff" },
      { name: "UI/UX Designer", level: "staff" },
      { name: "QA Manager", level: "staff" },
      { name: "Technical Support (AI-Assisted)", level: "staff" },
      { name: "Customer Support (AI-Assisted)", level: "staff" }
    ]
  },
  {
    title: "Property Operations Supervisor",
    color: "yellow",
    roles: [
      { name: "Maintenance & Unit Readiness Coordinator", level: "staff" },
      { name: "Freelance Booking Team (Komisi & SLA-based)", level: "staff" },
      { name: "Partnership & Owner Relation Coordinator", level: "staff" }
    ]
  },
  {
    title: "Digital Growth & Marketing Manager",
    color: "yellow",
    roles: [
      { name: "SEO Specialist", level: "staff" },
      { name: "Social Media Strategist", level: "staff" },
      { name: "Software Consultant", level: "staff" },
      { name: "Sales Software Executive", level: "staff" },
      { name: "OTA Revenue Specialist", level: "staff" }
    ]
  }
];

</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
