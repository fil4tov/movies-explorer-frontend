export const getAge = (birthday: Date): number => {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const thisYearBirthdayDate = new Date(
    today.getFullYear(), birthday.getMonth(), birthday.getDate()
  )
  let age

  age = today.getFullYear() - birthday.getFullYear()

  if (today < thisYearBirthdayDate) {
    age = age - 1
  }

  return age
}
