import React from 'react';
import SubBanner from '../../LayoutComponents/SubBanner';
import TextInput from '../../FormComponents/TextInput';
import SelectInput from '../../FormComponents/SelectInput';
import TextArea from '../../FormComponents/TextArea';

export default function AutoInfo(props) {
    const renderDriverForm = driver => {
        if (driver === 'true') {
            return(
                <section className={props.className}>
                        <TextInput
                            id='licesneNumber'
                            name="Driver's license number"
                            required={true}
                            onChange={e => props.handleLicenseNumberChange(e.target.value)}
                        />
                        <TextInput
                            id='expirationDate'
                            name='Expiration Date'
                            required={true}
                            onChange={e => props.handleExpirationDateChange(e.target.value)}
                        />
                        <TextInput
                            id='insuranceCompany'
                            name='Auto Insurance Company'
                            required={true}
                            onChange={e => props.handleInsuranceCompanyChange(e.target.value)}
                        />
                        <TextInput
                            id='policyNumber'
                            name='Policy Number'
                            required={true}
                            onChange={e => props.handlePolicyNumberChange(e.target.value)}
                        />
                        <TextInput
                            id='policyExpiration'
                            name='Policy Expiration Date'
                            required={true}
                            onChange={e => props.handlePolicyExpirationChange(e.target.value)}
                        />
                        <SelectInput
                            id='subList'
                            name='Can we put you on our sub list?'
                            required={true}
                            onChange={e => props.handleSubListChange(e.target.value)}
                            options={[
                                {name: '-Select one', value: ''},
                                {name: 'Yes', value: true},
                                {name: 'No', value: false}
                            ]}
                        />
                        <SelectInput
                            id='lastMinuteList'
                            name='Can we call you with last-minute cancellations?'
                            required={true}
                            onChange={e => props.handleLastMinuteListChange(e.target.value)}
                            options={[
                                {name: '-Select one', value: ''},
                                {name: 'Yes', value: true},
                                {name: 'No', value: false}
                            ]}
                        />
                        <TextArea
                            id='subPreferences'
                            name='Please indicate any preferences you have for substituting'
                            required={true}
                            onChange={e => props.handleSubPreferencesChange(e.target.value)}
                        />
                    </section>
            )
        } else {
            return ''
        }
    };

    return(
        <section className={props.className}>
            <SubBanner name='Driver Information' />
            <SelectInput
                id='driverBoolean'
                name='Do you plan to volunteer to deliver meals?'
                required={true}
                onChange={e => props.handleDriverChange(e.target.value)}
                options={[
                    {name: '-Select one', value: ''},
                    {name: 'Yes', value: 'true'},
                    {name: 'No', value: false}
                ]}
            />
            {renderDriverForm(props.driver)}
        </section>
    )
}