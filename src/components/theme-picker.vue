<template>
  <el-select
    :value="themeName"
    placeholder="请选择"
    @change="handleThemeChange"
  >
    <el-option
      v-for="item in themeList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      themeList: [
        { label: "green", value: "theme-green" },
        { label: "black-gloden", value: "theme-black-gloden" },
        { label: "black-gray", value: "theme-black-gray" },
        { label: "tap", value: "theme-tap" }
      ]
    };
  },
  computed: {
    ...mapGetters(["themeName"])
  },
  methods: {
    handleThemeChange(theme) {
      this.$store.dispatch("SET_THEME_NAME", theme);
    }
  }
};
</script>
