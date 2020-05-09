import React, { useState, useEffect } from 'react';
import SubBanner from '../LayoutComponents/SubBanner';
//import LabelBanner from '../LayoutComponents/LabelBanner';
import TextInput from '../FormComponents/TextInput';
import SelectInput from '../FormComponents/SelectInput';
//import ExplainBox from '../FormComponents/ExplainBox';
//import Button from '../FormComponents/Button';
import TextArea from '../FormComponents/TextArea';

export default function AutoInfo(props) {
    const [driver, setDriver] = useState('');
    const [licenseNumber, setLicensenumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [insuranceCompany, setInsuranceCompany] = useState('');
    const [policyNumber, setPolicyNumber] = useState('');
    const [policyExpiration, setPolicyExpiration] =useState('');
    const [subList, setSubList] = useState(false);
    const [lastMinuteList, setLastMinuteList] = useState('');
    const [subPreferences, setSubPreferences] = useState('');

    const handleDriverChange = input => setDriver(input);
    const handleLicenseNumberChange = input => setLicensenumber(input);
    const handleExpirationDateChange = input => setExpirationDate(input);
    const handleInsuranceCompanyChange = input => setInsuranceCompany(input);
    const handlePolicyNumberChange = input => setPolicyNumber(input);
    const handlePolicyExpirationChange = input => setPolicyExpiration(input);
    const handleSubListChange = input => setSubList(input);
    const handleLastMinuteListChange = input => setLastMinuteList(input);
    const handleSubPreferencesChange = input => setSubPreferences(input);
    const renderDriverForm = driver => {
        if (driver === 'true') {
            return(
                <div>
                        <TextInput
                            id='licesneNumber'
                            name="Driver's license number"
                            required={true}
                            onChange={e => handleLicenseNumberChange(e.target.value)}
                        />
                        <TextInput
                            id='expirationDate'
                            name='Expiration Date'
                            required={true}
                            onChange={e => handleExpirationDateChange(e.target.value)}
                        />
                        <TextInput
                            id='insuranceCompany'
                            name='Auto Insurance Company'
                            required={true}
                            onChange={e => handleInsuranceCompanyChange(e.target.value)}
                        />
                        <TextInput
                            id='policyNumber'
                            name='Policy Number'
                            required={true}
                            onChange={e => handlePolicyNumberChange(e.target.value)}
                        />
                        <TextInput
                            id='policyExpiration'
                            name='Policy Expiration Date'
                            required={true}
                            onChange={e => handlePolicyExpirationChange(e.target.value)}
                        />
                        <SelectInput
                            id='subList'
                            name='Can we put you on our sub list?'
                            required={true}
                            onChange={e => handleSubListChange(e.target.value)}
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
                            onChange={e => handleLastMinuteListChange(e.target.value)}
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
                            onChange={e => handleSubPreferencesChange(e.target.value)}
                        />
                    </div>
            )
        } else {
            return ''
        }
    };

    return(
        <form>
            <SubBanner name='Driver Information' />
            <SelectInput
                id='driverBoolean'
                name='Do you plan to volunteer to deliver meals?'
                required={true}
                onChange={e => handleDriverChange(e.target.value)}
                options={[
                    {name: '-Select one', value: ''},
                    {name: 'Yes', value: 'true'},
                    {name: 'No', value: false}
                ]}
            />
            {renderDriverForm(driver)}
        </form>
    )
}