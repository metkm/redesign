export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    button: {
      defaultVariants: {
        variant: 'ghost',
        color: 'neutral',
        size: 'xl'
      },
      compoundVariants: [
        {
          color: 'neutral',
          variant: 'ghost',
          class: 'hover:bg-black/50'
        }
      ]
    }
  }
})
