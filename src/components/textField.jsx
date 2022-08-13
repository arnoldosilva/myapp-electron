import React from 'react';
import { Controller } from 'react-hook-form';
import MuiTextField from '@mui/material/TextField';


export default function TextField({ control, name, defaultValue, required, label, placeholder, ...props }) {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue || ''}
            rules={required ? { required: 'This field is required!' } : props.rules}
            render={({
                field,
                fieldState: { error },
            }) => (
                <MuiTextField
                    {...props}
                    error={!!error}
                    helperText={!!error ? error.message : ''}
                    placeholder={!!placeholder ? placeholder : ''}
                    label={!!label ? label : ''}
                    {...field}
                />
            )}
        />
    )
}
