import React from 'react';
import {Pressable} from 'react-native';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import {PlusIcon} from '@/assets/icons';
import {useUploadPost} from '../api/uploadPost';

export default function UploadButton() {
  const {mutate, isPending} = useUploadPost();

  const handlePress = () => {
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
        mutate({
          title: selectedFile.fileName || '',
          uri: uri || '',
          type: selectedFile.type || '',
        });
      }
    });
  };

  return (
    <Pressable onPress={handlePress} disabled={isPending}>
      <PlusIcon />
    </Pressable>
  );
}
