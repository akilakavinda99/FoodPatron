import * as ImagePicker from "expo-image-picker";

// var base64;
const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 0.5,
    base64: true,
  });

  /* The base64 returned by the result does not contain the data uri.
     So it is concataneted to the base64 string */
  var imageUri = result ? `data:image/jpg;base64,${result.base64}` : null;

  /* return the base64 only if the user selects the image, 
  if the user cancelled it will be undefined */
  if (!result.cancelled) {
    return imageUri;
  }
};

export default pickImage;
