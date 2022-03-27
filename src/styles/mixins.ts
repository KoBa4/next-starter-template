/**
 * @example
 *  ${fontFace('Montserrat', '/fonts/Montserrat/Montserrat-Regular')}
 *  ${fontFace('Montserrat', '/fonts/Montserrat/Montserrat-Bold', 700)}
 */
export const fontFace = (
  name: string,
  path: string,
  weight = 400,
  style = 'normal',
  support = 'modern'
): string => {
  let fontSource = ''

  switch (support) {
    case 'oldie':
      fontSource = `
        src: url('${path}.eot');
        src:
          url('${path}.eot?#iefix') format('embedded-opentype'),
          url('${path}.woff2') format('woff2'),
          url('${path}.woff') format('woff'),
          url('${path}.ttf') format('truetype');
      `
      break
    case 'recent':
      fontSource = `
        src:
          url('${path}.woff2') format('woff2'),
          url('${path}.woff') format('woff'),
          url('${path}.ttf') format('truetype');
      `
      break
    default:
      fontSource = `
        src:
          url('${path}.woff2') format('woff2'),
          url('${path}.woff') format('woff');
      `
      break
  }

  return `
    @font-face {
      font-weight: ${weight};
      font-family: ${name};
      font-style: ${style};
      font-display: swap;
      ${fontSource}
    }
  `
}
