const addClasses = (styles: { [key: string]: string }, classList: string) : string => {
  // convert string of classes to classes hashes
  // addClasses(styles, classes)
  // e.g. 'active hovered' to 'style_active__5aQam.style_hovered__7xGHb'
  return classList
  .split(' ')
  .map(className => styles[className] || className)
  .join(' ');
}

export default addClasses;