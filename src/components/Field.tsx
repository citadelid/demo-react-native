import React, { ReactNode } from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import arrowSvg from '../../assets/arrow.svg';

export type FieldProps = {
  label?: string;
  value: string;
  onChange?: (value: string) => void;
  onSubmitEditing?: () => void;
  route?: string;
  routeParams?: Record<string, string>;
};

export const Field = ({ label, value, onChange, onSubmitEditing }: FieldProps) => {
  return (
    <TextInput
      autoCapitalize="none"
      placeholder={label}
      style={{ ...styles.root, ...styles.label }}
      value={value}
      onChangeText={(text) => onChange?.(text)}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

type FieldViewProps = {
  label?: string;
  value: string;
};

export const FieldView = ({ label, value }: FieldViewProps) => {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      {value ? (
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.value}>
          {value}
        </Text>
      ) : (
        <SvgXml xml={arrowSvg} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderBottomWidth: 1,
    borderColor: 'rgba(60, 60, 67, 0.29)',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 11,
    alignItems: 'center',
  },
  label: {
    fontSize: 17,
    lineHeight: 22,
    color: 'black',
  },
  value: {
    fontSize: 17,
    lineHeight: 22,
    color: 'rgba(60, 60, 67, 0.6)',
    maxWidth: 180,
  },
  fieldset: {
    marginBottom: 16,
    borderTopWidth: 1,
    borderColor: 'rgba(60, 60, 67, 0.29)',
  },
  title: {
    fontSize: 13,
    lineHeight: 18,
    paddingHorizontal: 16,
    paddingVertical: 6,
    color: 'rgba(60, 60, 67, 0.6)',
    textTransform: 'uppercase',
  },
});

export type FieldSetProps = {
  title?: string;
  children: ReactNode;
};

export const FieldSet = ({ children, title }: FieldSetProps) => {
  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.fieldset}>{children}</View>
    </View>
  );
};
