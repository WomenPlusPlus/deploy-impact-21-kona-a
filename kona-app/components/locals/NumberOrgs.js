import React from 'react';
import { Text } from 'react-native';
import { GlobalStyles } from '../globals/GlobalStyles';

const NumberOrgs = ({orgs}) => {
    return (
        <Text style={ GlobalStyles.h2 }>{(orgs.length)} organizations found</Text>
    )}

export default NumberOrgs;