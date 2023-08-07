import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Typography, InputLabel, Link, IconButton, Container } from '@mui/material';
import { Facebook, Google } from '@mui/icons-material';
import Divider from './Divider';


// Сообщение, выводящееся в случае пустого поля
const emptyFieldMessage = 'Поле не должно быть пустым';

const SignUpForm = () => {

    // Определение схемы валидации формы (с использованием библиотеки Yup)
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required(emptyFieldMessage),
        lastName: Yup.string()
            .required(emptyFieldMessage),
        dateOfBirth: Yup.string()
            .required(emptyFieldMessage),
        email: Yup.string()
            .email('Некорректный формат эл.почты')
            .required(emptyFieldMessage),
        password: Yup.string()
            .min(8, 'Пароль должен содержать как минимум 8 символов')
            .required(emptyFieldMessage),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
            .required(emptyFieldMessage),
    });

    // Обработчик отправки формы
    const handleSubmit = (values) => {
        console.log(values);
    };

    // Управление состоянием формы и обработка валидации (с использованием хука useFormik)
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });

    // Построение формы
    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container direction="column" alignItems="center" spacing={3}>
                <Grid item><Typography variant="h3">Зарегистрироваться</Typography></Grid>
                <Grid item>
                    <Typography
                        variant="p"
                        style={{ fontWeight: '600' }}
                    >
                        Уже есть аккаунт? <Link href="src/components/SignUpForm#" underline="none">Войти</Link>
                    </Typography>
                </Grid>

                <Grid item>
                    <InputLabel>Имя</InputLabel>
                    <TextField
                        id="firstName"
                        name="firstName"
                        variant="standard"
                        sx={{
                            width: 350,
                        }}
                        {...formik.getFieldProps('firstName')}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                </Grid>
                
                <Grid item>
                    <InputLabel>Фамилия</InputLabel>
                    <TextField
                        id="lastName"
                        name="lastName"
                        variant="standard"
                        sx={{
                            width: 350,
                        }}
                        {...formik.getFieldProps('lastName')}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </Grid>

                <Grid item>
                    <InputLabel>Дата рождения</InputLabel>
                    <TextField
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        variant="standard"
                        sx={{
                            width: 350,
                        }}
                        {...formik.getFieldProps('dateOfBirth')}
                        error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                        helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                    />
                </Grid>
                
                <Grid item>
                    <InputLabel>Эл. почта</InputLabel>
                    <TextField
                        id="email"
                        name="email"
                        variant="standard"
                        sx={{
                            width: 350,
                        }}
                        {...formik.getFieldProps('email')}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                
                <Grid item>
                    <InputLabel>Пароль</InputLabel>
                    <TextField
                        id="password"
                        name="password"
                        type="password"
                        variant="standard"
                        sx={{
                            width: 350,
                        }}
                        {...formik.getFieldProps('password')}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Grid>
                
                <Grid item>
                    <InputLabel>Подтвердите пароль</InputLabel>
                    <TextField
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        variant="standard"
                        sx={{
                            width: 350,
                        }}
                        {...formik.getFieldProps('confirmPassword')}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                </Grid>

                <Grid item>
                    <Button
                        type="submit"
                        sx={{
                            height: 50,
                            width: 350,
                        }}
                        style={{
                            textTransform: 'capitalize ',
                            borderRadius: '0',
                            font: '16px sans-serif',
                            backgroundColor: 'blue',
                        }}
                        variant="contained"
                        color="primary"
                        disabled={formik.isSubmitting}
                    >Зарегистрироваться
                    </Button>
                </Grid>

                <Grid item style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '350px',
                }}>

                    <Divider />
                    <Typography
                        variant="p"
                        style={{
                            fontWeight: '600',
                            width: '300px',
                            textAlign: 'center',
                            margin: '0',
                        }}
                    >Или зарегистрируйтесь через
                    </Typography>
                    <Divider />
                </Grid>

                <Grid item>
                    <IconButton>
                        <Facebook fontSize="large" sx={{ color: '#4267B2' }} />
                    </IconButton>

                    <IconButton>
                        <Google fontSize="large" sx={{ color: '#DB4437' }} />
                    </IconButton>
                </Grid>
            </Grid>
        </form>
    );
};


export default SignUpForm;
