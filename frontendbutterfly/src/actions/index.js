export const addCvData = (
  profileData,
  professionalData,
  personalData,
  familyData,
  educationalData,
  siblingData,
  preferenceData,
) => {
  return {
    type: 'ADD_CV',
    payload: {
      profileData: profileData,
      professionalData: professionalData,
      personalData: personalData,
      familyData: familyData,
      educationalData: educationalData,
      siblingData: siblingData,
      preferenceData: preferenceData,
    },
  }
}
