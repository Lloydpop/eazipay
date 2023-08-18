<template>
  <div class="tabs p-3">
    <div
      class="flex items-center justify-center gap-5 mt-5 border p-4 rounded-2xl"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.label }}
      </button>
    </div>

    <div
      class="tab-content"
      v-for="(tab, index) in tabs"
      :key="index"
      v-show="activeTab === index"
    >
      <slot :name="tab.slotName"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTabs",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>

<style scoped>
/* Your styles here */
.tabs {
  gap: 10px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #f7f7f7;
  border-radius: 20px;
  width: 200px;
}

button.active {
  background-color: #11453b;
  color: white;
}

.tab-content {
  display: block;
  margin-top: 10px;
}

.tab-content.show {
  display: block;
}
</style>
