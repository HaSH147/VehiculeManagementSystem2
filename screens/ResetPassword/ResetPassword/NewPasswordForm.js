import React from 'react';
import { View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Formik } from 'formik';
import { styles as formStyles } from '../Form/styles';
import { TextInputWithIcon } from '../Form/TextInputWithIcon';
import { Note } from '../Form/Note';
import { Error } from '../Form/Error';
import { Text } from '../Text';
import * as Yup from 'yup';
import { Spinner } from '../Form/Spinner';
export class NewPasswordForm extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            submitting: false,
            serverError: null,
            passwordReset: false,
        };
    }
    componentDidMount() {
        this.setState({
            passwordReset: false,
        });
    }
    render() {
        return (React.createElement(Formik, { initialValues: {
                password: '',
            }, validationSchema: Yup.object({
                password: Yup.string()
                    .required(" Aucun Mot de Passe N'est entré"),
            }), onSubmit: (values, formikActions) => {
                this.setState({
                    submitting: true,
                    serverError: null
                });
                // server validation in place of `setTimeout`
                setTimeout(() => {
                    formikActions.setSubmitting(false);
                    this.setState({
                        submitting: false,
                        passwordReset: true,
                    });
                }, 1000);
            } }, props => (React.createElement(React.Fragment, null,
            React.createElement(Error, { error: this.state.serverError }),
            React.createElement(Note, { note: 'Vérifié Avec Succès. Entrez un Nouveau Mot de Passe:' }),
            React.createElement(TextInputWithIcon, { ionIcon: 'ios-lock', name: 'mot de passe', autoCompleteType: 'password', onChangeText: props.handleChange('password'), onBlur: props.handleBlur('password'), value: props.values.password, placeholder: "mot de passe", style: Object.assign({}, formStyles.input), secureTextEntry: true, placeholderTextColor: '#666', clearButtonMode: 'while-editing', maxLength: 100, editable: !props.isSubmitting }),
            React.createElement(View, { style: formStyles.submit }, this.state.submitting === true
                ? React.createElement(React.Fragment, null,
                    // React.createElement(Spinner, null),
                    React.createElement(Text, { style: formStyles.submitText }, "Réinitialisation du mot de passe en cours"))
                :
                    React.createElement(Text, { style: formStyles.submitText, onPress: () => props.handleSubmit() }, this.state.passwordReset === true
                        ? 'Password Modifié Avec Succès'
                        : 'Réinitialiser Le Mot de Passe')),
            // React.createElement(View, { style: { marginTop: 20, fontWeight: 'bold', placeholderTextColor:"#FC766AFF" } },
            //     React.createElement(Text,  { onPress: () => this.props.switchStage(this.props.stages.REQUEST_LINK) }, "Recommencer une autre fois"))
            React.createElement(Text, { style: formStyles.submitText, onPress: () => this.props.switchStage(this.props.stages.REQUEST_LINK) }, "Recommencer"
                        
            
            )))));
     }
}
export default NewPasswordForm;
const styles = StyleSheet.create({
    text_footer: {
        fontWeight: 'bold',
        color:'#FC766AFF',
        fontSize: 19,
        marginLeft: -130, 
        borderColor: 'black'
    }
})
// <TouchableOpacity
//                     onPress= {() => this.props.switchStage(this.props.stages.REQUEST_LINK)  }
//             >
//                 <Text style={styles.text_footer}>Recommencer</Text>
//             </TouchableOpacity>