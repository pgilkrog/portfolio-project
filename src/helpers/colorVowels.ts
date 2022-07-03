export default function ColorVowels (stringToChange: string, color: string) : string {
  let tempString = ''
  for (let i = 0; i < stringToChange.length; i++) {
    if ('aeiouøæå'.includes(stringToChange[i])) {
      tempString += '<span class="text-' + color + '">' + stringToChange[i] + '</span>'
    } else {
      tempString += stringToChange[i]
    }
  }
  return tempString
}
