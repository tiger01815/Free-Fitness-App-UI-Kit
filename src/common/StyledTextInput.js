import React, { forwardRef, useEffect, useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import Constants from '../common/Constants';
import { TextInputMask } from 'react-native-masked-text';
import moment from 'moment';
// import DateTimePickerModal from './DateTimePickerModal';

const StyledTextInput = forwardRef(({ type = 'default', format = 'MM', options, placeholder, label = '', editable = true, value, secureTextEntry = false, multiline = false, autoCapitalize = 'none', autoCorrect = false, keyboardType = 'default', returnKeyType = 'default', containerStyle, textStyle, onChangeText, onSubmitEditing, mode = undefined, minimumDate = null, maximumDate = null, defaultDate = null }, ref) => {
    const [visibleDatePicker, setVisibleDatePicker] = useState(false)
    return (
        <TouchableOpacity activeOpacity={1} onPress={() => {
            // if (type === 'datetime') {
            //     setVisibleDatePicker(true)
            // }
        }} style={[styles.container, containerStyle]} >
            {
                type === 'default' ?
                    <TextInput
                        ref={ref}
                        value={value}
                        editable={editable}
                        multiline={multiline}
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        onSubmitEditing={onSubmitEditing}
                        autoCorrect={autoCorrect}
                        autoCapitalize={autoCapitalize}
                        keyboardType={keyboardType}
                        returnKeyType={returnKeyType}
                        secureTextEntry={secureTextEntry}
                        style={[styles.text, textStyle, { paddingTop: label !== '' ? 15 : 0 }]}
                        selectionColor={Constants.COLOR.BLACK}
                        placeholderTextColor={Constants.COLOR.BLACK} /> :
                    type === 'datetime' ?
                        <Text style={[styles.text, textStyle, { flex: undefined }]}>
                            {value === '' ? placeholder : moment(value).format(format)}
                        </Text> :
                        <TextInputMask
                            ref={ref}
                            value={value}
                            type={type}
                            maxLength={type === 'cel-phone' ? value.toString().startsWith('1') ? 19 : 16 : 2}
                            options={
                                type === 'cel-phone' ? value.startsWith('1') ? { dddMask: '+9 (999) 999 - ' } : { dddMask: '(999) 999 - ' } : options
                            }
                            // maxLength={type === 'cel-phone' ? value.toString().startsWith('1') ? 16 : 14 : 2}
                            // options={
                            //     type === 'cel-phone' ? value.startsWith('1') ? { dddMask: '9 999 999 - ' } : { dddMask: '999 999 - ' } : options
                            // }
                            editable={editable}
                            multiline={multiline}
                            placeholder={placeholder}
                            onChangeText={onChangeText}
                            onSubmitEditing={onSubmitEditing}
                            autoCorrect={autoCorrect}
                            autoCapitalize={autoCapitalize}
                            keyboardType={keyboardType}
                            returnKeyType={returnKeyType}
                            secureTextEntry={secureTextEntry}
                            style={[styles.text, textStyle, { paddingTop: label !== '' ? 15 : 0 }]}
                            selectionColor={Constants.COLOR.BLACK}
                            placeholderTextColor={Constants.COLOR.BLACK} />
            }
            {
                label !== '' &&
                <Text style={{ position: 'absolute', top: 8, left: 20, color: Constants.COLOR.GRAY, fontFamily: Constants.FONT_FAMILY.PRIMARY_REGULAR, fontSize: Constants.FONT_SIZE.FT13 }}>
                    {label}
                </Text>
            }
            {/* {
                visibleDatePicker &&
                <DateTimePickerModal
                    onSelect={(date) => {
                        onChangeText(date)
                        setVisibleDatePicker(false);
                    }}
                    minimumDate={minimumDate}
                    maximumDate={maximumDate}
                    defaultDate={defaultDate}
                    onCancel={() => {
                        setVisibleDatePicker(false);
                    }}
                    value={value}
                    mode={mode} />
            } */}
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    container: {
        width: Constants.LAYOUT.SCREEN_WIDTH - 60, height: 60, backgroundColor: Constants.COLOR.WHITE, paddingHorizontal: 20, borderRadius: 7, justifyContent: 'center'
    },
    text: {
        width: '100%', flex: 1, color: Constants.COLOR.BLACK, fontFamily: Constants.FONT_FAMILY.PRIMARY_MEDIUM, fontSize: Constants.FONT_SIZE.FT22, paddingBottom: 0
    }
})

export default StyledTextInput;