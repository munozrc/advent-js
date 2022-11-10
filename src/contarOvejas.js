export default function contarOvejas (ovejas) {
  if (!Array.isArray(ovejas)) throw new Error('paramater provided must be a list/array')
  return ovejas.filter(({ name, color }) => {
    const nameContainsLetterNorA = name.match(/(n|N)(a|A)/g)
    const colorEqualsRed = color === 'rojo'
    return nameContainsLetterNorA && colorEqualsRed
  })
}
