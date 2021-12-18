export default {
  props: ['primary', 'theme'],
  setup(props) {
    console.log('props', props)

    const modificatorsFromProps = computed((e) => {
      let classes = []
      const baseClass = 'button--'
      if (primary) classes.push(baseClass + primary)
      if (theme) classes.push(baseClass + theme)

      return classes.join(' ')
    })

    return modificatorsFromProps
  },
}
