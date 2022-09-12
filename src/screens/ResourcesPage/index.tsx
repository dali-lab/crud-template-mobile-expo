import React from 'react';
import { Text, SafeAreaView } from 'react-native'
import FormatStyle from '../../utils/FormatStyle';
import TextStyles from '../../utils/TextStyles';

const ResourcesPage = () => {
  return (
    <SafeAreaView style={FormatStyle.container}>
      <Text style={TextStyles.title}>
        Resources
      </Text>
    </SafeAreaView>
  )
}

export default ResourcesPage;