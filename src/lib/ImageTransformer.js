class ImageTransformer {
  static mimeTypes () {
    return ['image/jpeg', 'image/png', 'image/svg+xml']
  }

  parse (source) {
    return JSON.parse(source)
  }

  // extendNodeType ({ graphql }) {
  //   return {}
  // }
}

export default ImageTransformer
