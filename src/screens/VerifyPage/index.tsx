import React, { useState } from 'react';
import {
  SafeAreaView, Text, TouchableOpacity, TextInput,
} from 'react-native';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import { resendCode, verify } from '../../redux/slices/authSlice';
import FormatStyle from '../../utils/FormatStyle';

const VerifyPage = () => {
  const dispatch = useAppDispatch();
  const { id, email } = useAppSelector((state) => state.auth);
  const [code, setCode] = useState<string>('');

  const handleSubmit = () => {
    // Send only if all fields filled in
    if (!code) alert('Please enter a code!');
    else {
      dispatch(verify({ id, email, code }));
    }
  };

  return (
    <SafeAreaView style={FormatStyle.container}>
      <Text>Verify</Text>
      <Text>Code</Text>
      <TextInput
        onChangeText={(text) => setCode(text)}
        value={code}
        placeholder="Type your code"
      />
      <TouchableOpacity
        onPress={handleSubmit}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(resendCode({ id, email }))}
      >
        <Text>Resend Code</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default VerifyPage;