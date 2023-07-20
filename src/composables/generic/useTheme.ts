import { onBeforeMount, onBeforeUnmount, ref } from 'vue';

export type Theme = 'light' | 'dark';

const getCurrentTheme = (): Theme => {
  const element = document.documentElement.classList;
  return element.contains('dark') ? 'dark' : 'light';
};

export function useTheme() {
  const currentTheme = ref<Theme>(getCurrentTheme());
  const observer = ref<MutationObserver>();

  onBeforeMount(() => {
    observer.value = new MutationObserver(() => {
      const theme = getCurrentTheme();
      if (theme !== currentTheme.value) {
        currentTheme.value = theme;
      }
    });
    observer.value?.observe(document.documentElement, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['class'],
    });
  });

  onBeforeUnmount(() => {
    observer.value?.disconnect();
  });

  return currentTheme;
}
