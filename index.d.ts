declare module '*.svg' {
  import Vue, { VueConstructor } from 'vue'
  const content: VueConstructor<Vue>
  export default content
}

declare module '*.svg?inline' {
  const content: any
  export default content
}
