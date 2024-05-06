import React, {useState} from 'react';
import SettingsForm from '../components/SettingsForm';
import FormLayout from '@/Shared/layout/FormLayout';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

export default function Profile() {
  const [image, setImage] = useState('');

  const handleImageUpload = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled the picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedFile = response.assets[0];
        const uri = `data:${selectedFile.type};base64,${selectedFile.base64}`;

        setImage(uri);
      }
    });
  };

  return (
    <FormLayout
      image={image}
      onImageUpload={handleImageUpload}
      currentForm="profile">
      <SettingsForm image={image} />
    </FormLayout>
  );
}
