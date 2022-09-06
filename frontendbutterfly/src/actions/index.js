export const addCvData = (
  profileData,
  professionalData,
  familyData,
  educationalData,
  siblingData,
  preferenceData,
  preferenceInfoData,
) => {
  return {
    type: 'ADD_CV',
    payload: {
      profileData: profileData,
      professionalData: professionalData,
      familyData: familyData,
      educationalData: educationalData,
      siblingData: siblingData,
      preferenceData: preferenceData,
      preferenceInfoData: preferenceInfoData,
    },
  }
}
