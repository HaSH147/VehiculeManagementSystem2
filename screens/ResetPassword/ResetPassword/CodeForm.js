import React from 'react';
import { View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { styles as formStyles } from '../Form/styles';
import { Formik } from 'formik';
import { TextInputWithIcon } from '../Form/TextInputWithIcon';
import { Note } from '../Form/Note';
import { Error } from '../Form/Error';
import { Text } from '../Text';
import * as Yup from 'yup';
import { Spinner } from '../Form/Spinner';
export class CodeForm extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            submitting: false,
            serverError: null,
        };
    }
    render() {
        return (React.createElement(Formik, { initialValues: {
                code: '',
            }, validationSchema: Yup.object({
                code: Yup.string()
                    .required('Entrer un code de Vérification Valide'),
            }), onSubmit: (values, formikActions) => {
                this.setState({
                    submitting: true,
                    serverError: null
                });
                // server validation in place of `setTimeout`
                setTimeout(() => {
                    formikActions.setSubmitting(false);
                    this.props.switchStage(this.props.stages.RESET);
                }, 1000);
            } }, props => (React.createElement(React.Fragment, null,
            React.createElement(Error, { error: this.state.serverError }),
            React.createElement(Note, { note: 'Le Code de Vérification a été envoyé à votre adresse email.' }),
            React.createElement(TextInputWithIcon, { name: 'code', ionIcon: 'ios-arrow-dropright-circle', onChangeText: props.handleChange('code'), onBlur: props.handleBlur('code'), value: props.values.code, placeholder: "Entrez Le Code", style: Object.assign({}, formStyles.input), autoCapitalize: 'none', placeholderTextColor: '#666', clearButtonMode: 'while-editing', keyboardType: 'numeric', maxLength: 6, editable: !props.isSubmitting }),
            React.createElement(View, { style: formStyles.submit }, this.state.submitting === true
                ? React.createElement(React.Fragment, null,
                    // React.createElement(Spinner, null),
                    React.createElement(Text, { style: formStyles.submitText }, "Vérification du Code"))
                :
                    React.createElement(Text, { style: formStyles.submitText, onPress: () => props.handleSubmit() }, "Valider")),
            // React.createElement(View, { style: { marginTop: 10 } },
            //     React.createElement(Text,  { onPress: () => this.props.switchStage(this.props.stages.REQUEST_LINK) }, "Retourner à La page Précédente"))
            
            React.createElement(Text, { style: formStyles.submitText, onPress: () => this.props.switchStage(this.props.stages.REQUEST_LINK) }, "Précédent"
                        
            
            )))));
            
    }
}
export default CodeForm;

const styles = StyleSheet.create({
    text_footer: {
        fontWeight: 'bold',
        color:'#FC766AFF',
        fontSize: 19
    }
})