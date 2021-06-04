import React from 'react';
import {TextInput} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';

const SearchBar = ({value, onChange, onEndEditing}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon containerStyle={styles.iconStyle} name="search" size={35} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChange}
        style={styles.inputStyle}
        placeholder="Search"
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {alignSelf: 'center', marginHorizontal: 15},
});
