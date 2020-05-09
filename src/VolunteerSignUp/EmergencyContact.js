import React, { useState } from 'react';
import SubBanner from '../LayoutComponents/SubBanner';
//import LabelBanner from '../LayoutComponents/LabelBanner';
import TextInput from '../FormComponents/TextInput';
import SelectInput from '../FormComponents/SelectInput';
//import ExplainBox from '../FormComponents/ExplainBox';
//import Button from '../FormComponents/Button';
import TextArea from '../FormComponents/TextArea';

export default function EmergencyContact(props) {
    const [emergencyContact, setEmergencyContact] = useState('');
    const [emergencyRelationship, setEmergencyRelationship] = useState('');
    const [emergencyAddress, setEmergencyAddress] = useState('');
    const [emergencyHomePhone, setEmergencyHomePhone] = useState('');
    const [emergencyCellPhone, setEmergencyCellPhone] = useState('');
    const [emergencyWorkPhone, setEmergencyWorkPhone] = useState('');

    const handleEmergencyContactChange = input => setEmergencyContact(input);
    const handleEmergencyRelationshipChange = input => setEmergencyRelationship(input);
    const handleEmergencyAddressChange = input => setEmergencyAddress(input);
    const handleEmergencyHomePhoneChange = input => setEmergencyHomePhone(input);
    const handleEmergencyCellPhoneChange = input => setEmergencyCellPhone(input);
    const handleEmergencyWorkPhoneChange = input => setEmergencyWorkPhone(input);

    return(
        <form>
            <SubBanner name='Emergency Contact' />
            <TextInput
                id='emergencyContact'
                name='Emergency Contact'
                required={true}
                onChange={e => handleEmergencyContactChange(e.target.value)}
            />
            <TextInput
                id='emergencyRelationship'
                name='Relationship'
                required={true}
                onChange={e => handleEmergencyRelationshipChange(e.target.value)}
            />
            <TextInput
                id='emergencyAddress'
                name='Emergency Contact Address'
                required={true}
                onChange={e => handleEmergencyAddressChange(e.target.value)}
            />
            <TextInput
                id='emergencyHomePhone'
                name='Emergancy Contact Home Phone'
                required={true}
                onChange={e => handleEmergencyHomePhoneChange(e.target.value)}
            />
            <TextInput
                id='emergencyCellPhone'
                name='Emergency Contact Cell Phone'
                required={true}
                onChange={e => handleEmergencyCellPhoneChange(e.target.value)}
            />
            <TextInput
                id='emergencyWorkPhone'
                name='Emergency Contact Work Phone'
                required={false}
                onChange={e => handleEmergencyWorkPhoneChange(e.target.value)}
            />
        </form>
    )
}