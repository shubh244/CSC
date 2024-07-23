// CaptchaInput.js

import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';

// Example captcha image URL
const captchaImageUrl = 'https://example.com/captcha-image'; // Replace with your captcha image URL

const CaptchaInput = () => {
  const [captchaText, setCaptchaText] = useState('');
  const [refreshKey, setRefreshKey] = useState(0); // State to force refresh captcha image

  const refreshCaptcha = () => {
    // This function will refresh the captcha image
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <View>
      {/* Captcha Image */}
      <Image
        source={{ uri: `${captchaImageUrl}?key=${refreshKey}` }}
        style={{ width: 200, height: 50, marginBottom: 10 }}
        resizeMode="contain"
      />

      {/* Captcha Text Input */}
      <TextInput
        placeholder="Enter Captcha"
        value={captchaText}
        onChangeText={text => setCaptchaText(text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />

      {/* Refresh Captcha Button */}
      <TouchableOpacity onPress={refreshCaptcha}>
        <Text style={{ color: 'blue' }}>Refresh Captcha</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CaptchaInput;
