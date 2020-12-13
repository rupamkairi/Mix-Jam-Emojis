import { ref } from "vue";

const exportMode = ref(false);
export function useExportMode() {
  const toggleExportMode = (exportMode) => {
    return !exportMode;
  };

  return { exportMode, toggleExportMode };
}
