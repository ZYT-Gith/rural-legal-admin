/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    // Vue 自动导入
    ref: 'readonly',
    reactive: 'readonly',
    computed: 'readonly',
    watch: 'readonly',
    watchEffect: 'readonly',
    onMounted: 'readonly',
    onUnmounted: 'readonly',
    onBeforeMount: 'readonly',
    onBeforeUnmount: 'readonly',
    onUpdated: 'readonly',
    nextTick: 'readonly',
    toRef: 'readonly',
    toRefs: 'readonly',
    toRaw: 'readonly',
    isRef: 'readonly',
    isReactive: 'readonly',
    shallowRef: 'readonly',
    shallowReactive: 'readonly',
    readonly: 'readonly',
    markRaw: 'readonly',
    defineComponent: 'readonly',
    defineAsyncComponent: 'readonly',
    // Vue Router 自动导入
    useRouter: 'readonly',
    useRoute: 'readonly',
    // Pinia 自动导入
    defineStore: 'readonly',
    storeToRefs: 'readonly',
    createPinia: 'readonly',
    // Element Plus（按需注册，无需全局变量）
  },
  rules: {
    // 允许 <script setup> 中使用 defineOptions 等编译宏
    'vue/no-multiple-template-root': 'off',
  },
  ignorePatterns: ['dist', 'dist-ssr', 'coverage', '*.d.ts', 'node_modules'],
}
