<template>
  <section class="px-4">
    <section
      class="px-4 py-4 mt-5"
      :class="{
        success: event.report_status == 'Sent',
        failed: event.report_status == 'Failed',
      }"
    >
      <div class="flex flex-row justify-between">
        <p class="text-base font-medium">{{ event.name_of_disease }}</p>
        <div class="h-6 px-2 text-xs bg-white py-1 text-center rounded-full">
          {{ event.report_type }}
        </div>
      </div>
      <p class="text-xs my-2 leading-3">{{ event.date }}</p>
      <div
        class="flex flex-row justify-between align-middle"
        v-if="event.report_status == 'Failed'"
      >
        <p class="text-xs text-red-600 py-1">{{ event.report_status }}</p>
        <button
          class="text-white px-3 h-6 text-xs btn-green outline-none rounded"
        >
          Retry
        </button>
      </div>
      <div v-else>
        <p class="text-xs flex flex-row align-middle">
          {{ event.report_status }}
          <span class="w-1 h-1 Eclipse block mx-1 mt-2 rounded-full"> </span
          ><span
            class="xrt"
            :class="{ accepted: event.report_stage == 'accepted' }"
            >{{ event.report_stage }}</span
          >
        </p>
      </div>
      <div
        class="mt-4 px-1 error text-xs rounded"
        v-show="event.error_report !== ''"
      >
        {{ event.error_report }}
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
h1 {
  color: #011b00;
}

p {
  color: #2e4634;
}

.btn-green {
  background-color: #006722;
}

.Eclipse {
  background: #ffd6d6;
}

.xrt {
  color: #52520d;
}

.failed {
  background: #fff1f1;
  border: 2px solid #ff6d6b;
}

.success {
  border: 2px solid #9488ff;
  background: #efeeff;
}

.error {
  background: #fce5e5;
}

.accepted {
  color: #005d5d;
}
</style>
