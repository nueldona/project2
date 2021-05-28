<template>
  <section
    class="w-100 h-100 flex flex-col justify-center align-middle space-y-4"
  >
    <form class="w-100 space-y-6">
      <input
        type="text"
        placeholder="User Id"
        class="h-12 w-full px-3 py-5 border-b-2 border-gray-200"
      />
      <input
        type="text"
        placeholder="PIN"
        class="h-12 w-full px-3 py-5 border-b-2 border-gray-200"
      />
      <button to="/ReportUnitSetup" class="text-center h-12 w-full bg-green-700 text-white">
        Next
      </button>
    </form>
  </section>
</template>

<script>
export default {};
</script>

