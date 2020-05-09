import React, { useState } from 'react';
import SubBanner from '../LayoutComponents/SubBanner';
import LabelBanner from '../LayoutComponents/LabelBanner';
import TextInput from '../FormComponents/TextInput';
//import SelectInput from '../FormComponents/SelectInput';
//import ExplainBox from '../FormComponents/ExplainBox';
//import Button from '../FormComponents/Button';

export default function References(props) {
    const [refName1, setRefName1] = useState('');
    const [refRelationship1, setRefRelationship1] = useState('');
    const [refPhone1, setRefPhone1] = useState('');
    const [refAddress1, setRefAddress1] = useState('');
    const [refName2, setRefName2] = useState('');
    const [refRelationship2, setRefRelationship2] = useState('');
    const [refPhone2, setRefPhone2] = useState('');
    const [refAddress2, setRefAddress2] = useState('');

    const handleRefName1Change = input => setRefName1(input);
    const handleRefRelationship1Change= input => setRefRelationship1(input);
    const handleRefPhone1Change = input => setRefPhone1(input);
    const handleRefAddress1Change = input => setRefAddress1(input);
    const handleRefName2Change = input => setRefName1(input);
    const handleRefRelationship2Change = input => setRefRelationship1(input);
    const handleRefPhone2Change = input => setRefPhone1(input);
    const handleRefAddress2Change = input => setRefAddress1(input);

    return(
        <form>
            <SubBanner name='Please list two references' />
            <LabelBanner name='Reference 1' />
            <TextInput
                id='refName1'
                name='Name'
                required={true}
                onChange={e => handleRefName1Change(e.target.value)}
            />
            <TextInput
                id='refRelationship1'
                name='Relationship'
                required={true}
                onChange={e => handleRefRelationship1Change(e.target.value)}
            />
            <TextInput
                id='refPhone1'
                name='Phone'
                required={true}
                onChange={e => handleRefPhone1Change(e.target.value)}
            />
            <TextInput
               id='refAddress1'
               name='Address'
               required={true}
               onChange={e => handleRefAddress1Change(e.target.value)}
            />
            <LabelBanner name='Reference 2' />
            <TextInput
                id='refName2'
                name='Name'
                required={true}
                onChange={e => handleRefName2Change(e.target.value)}
            />
            <TextInput
                id='refRelationship2'
                name='Relationship'
                required={true}
                onChange={e => handleRefRelationship2Change(e.target.value)}
            />
            <TextInput
                id='refPhone2'
                name='Phone'
                required={true}
                onChange={e => handleRefPhone2Change(e.target.value)}
            />
            <TextInput
               id='refAddress2'
               name='Address'
               required={true}
               onChange={e => handleRefAddress2Change(e.target.value)}
            />

        </form>
    )
}