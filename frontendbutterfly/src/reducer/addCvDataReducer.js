const initialData = {
  profileData: {},
  professionalData: {},
  familyData: {},
  educationalData: {},
  siblingData: {},
  preferenceInfoData: {},
  galleryData: {},
}

const cvDataReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_CV':
      return {
        ...state,
        ...action.payload,
      }
    case 'INIT_CV':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default cvDataReducer
