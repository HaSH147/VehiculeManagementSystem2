import { View, SafeAreaView } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text } from '../Text';
import { styles } from './styles';
import { styles as formStyles } from '../Form/styles';
import { ResetForm } from './ResetForm';
import { CodeForm } from './CodeForm';
import { NewPasswordForm } from './NewPasswordForm';
import { useState } from "react";
export const ResetPassword = (props) => {
    let stages;
    (function (stages) {
        stages["REQUEST_LINK"] = "REQUEST_LINK";
        stages["VERIFY"] = "VERIFY";
        stages["RESET"] = "RESET";
    })(stages || (stages = {}));
    const [stage, setStage] = useState(stages.REQUEST_LINK);
    const [email, setEmail] = useState(null);
    const switchStage = (stage) => {
        setStage(stage);
    };
    return (React.createElement(SafeAreaView, { style: styles.safeArea },
        React.createElement(KeyboardAwareScrollView, { contentContainerStyle: styles.container },
            React.createElement(View, { style: formStyles.container },
                React.createElement(Text, { style: { marginBottom: 20, fontSize: 22, color: '#009387', fontWeight: 'bold' } }, "Réinitialiser Votre Mot De Passe"),
                stage === stages.REQUEST_LINK &&
                    React.createElement(ResetForm, { stages: stages, switchStage: switchStage, setEmail: setEmail }),
                stage === stages.VERIFY &&
                    React.createElement(CodeForm, { stages: stages, switchStage: switchStage }),
                stage === stages.RESET &&
                    React.createElement(NewPasswordForm, { stages: stages, switchStage: switchStage, email: email })))));
};
export default ResetPassword;