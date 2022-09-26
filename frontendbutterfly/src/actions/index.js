export const addCvData = (
  profileData,
  professionalData,
  familyData,
  educationalData,
  siblingData,
  preferenceInfoData,
  galleryData,
) => {
  return {
    type: 'ADD_CV',
    payload: {
      profileData: profileData,
      professionalData: professionalData,
      familyData: familyData,
      educationalData: educationalData,
      siblingData: siblingData,
      preferenceInfoData: preferenceInfoData,
      galleryData: galleryData,
    },
  }
}
