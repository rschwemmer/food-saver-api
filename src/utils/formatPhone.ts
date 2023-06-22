import { parsePhoneNumber } from "libphonenumber-js"

export default function formatPhone(phoneNumberString: string) {
  try {
    return parsePhoneNumber(phoneNumberString, "US").formatNational()
  } catch (e) {
    console.log(e)
    return phoneNumberString
  }
}
