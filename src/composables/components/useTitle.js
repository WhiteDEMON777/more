export default {
  // props: ['big', 'theme'],
  setup(props) {
    console.log('props', props)

    const modificatorsFromProps = computed((e) => {
      let title = []
      const baseClass = 'title--'
      if (big) title.push(baseClass)
      if (theme) title.push(baseClass + theme)

      return title.join(' ')
    })

    return modificatorsFromProps
  },
}
