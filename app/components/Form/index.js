import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { Controller, useForm } from 'react-hook-form';

const Form = ({ data, onSubmit, bottomComponent, isLoading = false }) => {
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();

  return (
    <View style={styles.container}>
      {data.map(
        (
          {
            Component,
            componentProps,
            name,
            defaultValue = '',
            rules,
            submitType,
          },
          index,
        ) => (
          <View key={`${name}_${index}`} style={styles.inputWrap}>
            <Controller
              control={control}
              rules={rules}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Component
                  disabled={isLoading}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={() => {
                    if (submitType === 'submit') {
                      handleSubmit(onSubmit)();
                    } else {
                      setFocus(submitType);
                    }
                  }}
                  ref={ref}
                  {...componentProps}
                />
              )}
              name={name}
              defaultValue={defaultValue}
            />
            {errors[name] && (
              <Text style={styles.errorText}>
                {errors[name].message || errors[name].type}
              </Text>
            )}
          </View>
        ),
      )}
      {bottomComponent({ handleSubmit })}
    </View>
  );
};

export default Form;
