import { Edit } from "@refinedev/mui";
import { Box, TextField, Checkbox, FormControlLabel } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const UsersEdit = () => {
    const {
        saveButtonProps,
        refineCore: { queryResult },
        register,
        control,
        formState: { errors },
    } = useForm();

    const usersData = queryResult?.data?.data;

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("id", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.id}
                    helperText={(errors as any)?.id?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Id"
                    name="id"
                    disabled
                />
                <TextField
                    {...register("firstName", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.firstName}
                    helperText={(errors as any)?.firstName?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="First Name"
                    name="firstName"
                />
                <TextField
                    {...register("lastName", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.lastName}
                    helperText={(errors as any)?.lastName?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Last Name"
                    name="lastName"
                />
                <TextField
                    {...register("email", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.email}
                    helperText={(errors as any)?.email?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="email"
                    label="Email"
                    name="email"
                />
                <Controller
                    control={control}
                    name="status"
                    // eslint-disable-next-line
                    defaultValue={null as any}
                    render={({ field }) => (
                        <FormControlLabel
                            label="Status"
                            control={
                                <Checkbox
                                    {...field}
                                    checked={field.value}
                                    onChange={(event) => {
                                        field.onChange(event.target.checked);
                                    }}
                                />
                            }
                        />
                    )}
                />
                {/*
                    DatePicker component is not included in "@refinedev/mui" package.
                    To use a <DatePicker> component, you can follow the official documentation for Material UI.

                    Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
                */}
                <TextField
                    {...register("birthday", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.birthday}
                    helperText={(errors as any)?.birthday?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Birthday"
                    name="birthday"
                />

                <Box sx={{ display: "flex", gap: 1 }}>
                    {usersData?.skills?.map((item: any, index: number) => (
                        <TextField
                            key={index}
                            {...register(`skills.${index}`, {
                                required: "This field is required",
                            })}
                            error={!!(errors as any)?.skills?.[index]}
                            helperText={
                                (errors as any)?.skills?.[index]
                                    ?.message as string
                            }
                            margin="normal"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            type="text"
                            label="Skills"
                            name={`skills.${index}`}
                        />
                    ))}
                </Box>
            </Box>
        </Edit>
    );
};