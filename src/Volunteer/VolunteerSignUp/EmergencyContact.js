import React from 'react';
import SubBanner from '../../LayoutComponents/SubBanner';
import TextInput from '../../FormComponents/TextInput';

export default function EmergencyContact(props) {
    return(
        <section className={props.className}>
            <SubBanner name='Emergency Contact' />
            <TextInput
                id='emergencyContact'
                name='Emergency Contact'
                required={true}
                onChange={e => props.handleEmergencyContactChange(e.target.value)}
            />
            <TextInput
                id='emergencyRelationship'
                name='Relationship'
                required={true}
                onChange={e => props.handleEmergencyRelationshipChange(e.target.value)}
            />
            <TextInput
                id='emergencyAddress'
                name='Emergency Contact Address'
                required={true}
                onChange={e => props.handleEmergencyAddressChange(e.target.value)}
            />
            <TextInput
                id='emergencyHomePhone'
                name='Emergancy Contact Home Phone'
                required={true}
                onChange={e => props.handleEmergencyHomePhoneChange(e.target.value)}
            />
            <TextInput
                id='emergencyCellPhone'
                name='Emergency Contact Cell Phone'
                required={true}
                onChange={e => props.handleEmergencyCellPhoneChange(e.target.value)}
            />
            <TextInput
                id='emergencyWorkPhone'
                name='Emergency Contact Work Phone'
                required={false}
                onChange={e => props.handleEmergencyWorkPhoneChange(e.target.value)}
            />
        </section>
    )
}