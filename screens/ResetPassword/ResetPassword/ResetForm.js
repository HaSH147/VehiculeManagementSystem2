import React from 'react';
import { View } from 'react-native';
import { styles as formStyles } from '../Form/styles';
import { Formik } from 'formik';
import { TextInputWithIcon } from '../Form/TextInputWithIcon';
import { Error } from '../Form/Error';
import { Note } from '../Form/Note';
import { Text } from '../Text';
import * as Yup from 'yup';
import { Spinner } from '../Form/Spinner';
export class ResetForm extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            submitting: false,
            serverError: null,
        };
    }
    render() {
        return (React.createElement(Formik, { initialValues: {
                email: 'me@email.com',
            }, validationSchema: Yup.object({
                email: Yup.string()
                    .email('Adresse Email Invalide')
                    .required("Aucune Adresse Email N'est Entrée"),
            }), onSubmit: (values, formikActions) => {
                this.setState({
                    submitting: true,
                    serverError: null
                });
                // server validation in place of `setTimeout`
                setTimeout(() => {
                    formikActions.setSubmitting(false);
                    this.props.setEmail(values.email);
                    this.props.switchStage(this.props.stages.VERIFY);
                }, 1000);
            } }, props => (React.createElement(React.Fragment, null,
            React.createElement(Error, { error: this.state.serverError }),
            React.createElement(Text, { style: { marginTop: 40, marginBottom: 20, marginLeft: 60, fontSize: 17, color: 'black'} }, "Veuillez fournir l'adresse e-mail de votre compte pour demander un code de réinitialisation du mot de passe."),
            React.createElement(Text, { style: { marginTop: 10, marginBottom: 20, marginLeft: 20, fontSize: 20, color: 'black'} }, "Vous recevrez votre code à votre"),
            React.createElement(Text, { style: {  marginBottom: 20, marginLeft: 60, fontSize: 20, color: 'black'} }, "adresse Email si Elle est Valide!"),
            React.createElement(TextInputWithIcon, { name: 'email', ionIcon: 'ios-person', autoCompleteType: 'email', onChangeText: props.handleChange('email'), onBlur: props.handleBlur('email'), value: props.values.email, placeholder: "Email Address", style: Object.assign({}, formStyles.input), autoCapitalize: 'none', placeholderTextColor: '#666', clearButtonMode: 'while-editing', keyboardType: 'email-address', maxLength: 100, editable: !props.isSubmitting }),
            React.createElement(View, { style: formStyles.submit }, this.state.submitting === true
                ? React.createElement(React.Fragment, null,
                    // React.createElement(Spinner, null),
                    React.createElement(Text, { style: formStyles.submitText }, "Demande En Cours"))
                :
                    React.createElement(Text, { style: formStyles.submitText, onPress: () => props.handleSubmit() }, "Envoyer le Code de Réinitialisation"))))));
    }
}
export default ResetForm;