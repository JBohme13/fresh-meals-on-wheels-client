import React, { useState } from 'react';
import SubBanner from '../LayoutComponents/SubBanner';
import TextInput from '../FormComponents/TextInput';
import TextArea from '../FormComponents/TextArea';
import SelectInput from '../FormComponents/SelectInput';
import ExplainBox from '../FormComponents/ExplainBox';
import Button from '../FormComponents/Button';

export default function PersonalInfo(props) {
    const [gender, setGender] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [race, setRace] = useState('');
    const [language, setLanguage] = useState('');
    const [employer, setEmployer] = useState('');
    const [retired, setRetired] = useState('');
    const [military, setMilitary] = useState('');
    const [limitations, setLimitations] = useState('');

    const handleGenderChange = input => setGender(input);
    const handleMaritalStatusChange = input => setMaritalStatus(input);
    const handleRaceChange = input => setRace(input);
    const handleLanguageChange = input => setLanguage(input);
    const handleEmployerChange = input => setEmployer(input);
    const handleRetiredChange = input => setRetired(input);
    const handleMilitaryChange = input => setMilitary(input);
    const handleLimitationsChange = input => setLimitations(input);

    return(
        <form>
            <SubBanner name='Personal Information' />
            <TextInput
                id='gender'
                name='Gender'
                required={false}
                onChange={e => handleGenderChange(e.target.value)}
            />
            <SelectInput
                id='maritalStatus'
                name='Marital Status'
                required={true}
                onChange={e => handleMaritalStatusChange(e.target.value)}
                options={[
                    {name: '-Select one', value: ''}, 
                    {name: 'Married', value: 'married'},
                    {name: 'Single', value: 'single'},
                    {name: 'Widowed', value: 'widowed'},
                    {name: 'devorced', value: 'devorced'},
                    {name: 'Separated', value: 'separated'},
                    {name: 'Other', value: 'other'}
                ]}
            />
            <SelectInput
                id='race'
                name='Race'
                required={false}
                onchange={e => handleRaceChange(e.target.value)}
                options={[
                    {name: '-Select one', value: ''},
                    {name: 'Non-Minority', value:'nonMinority'},
                    {name: 'African American', value: 'africanAmerican'},
                    {name: 'Hispanic', value: 'hispanic'},
                    {name: 'Native American', value: 'nativeAmerican'},
                    {name: 'Asian/ Pacific Islander', value:'asian'},
                    {name: 'Other', value: 'other'}
                ]}
            />
            <SelectInput
                id='language'
                name='Do you speak another language?'
                required={true}
                onChange={e => handleLanguageChange(e.target.value)}
                options={[
                    {name: '-Select one', value: ''},
                    {name: 'Yes', value: true},
                    {name: 'No', value: false}
                ]}
            />
            {language === 'true' ? <ExplainBox name='If so, what language(s)?' id='languageExplain' /> : ''}
            <TextInput
                id='employer'
                name='Employer/Retired from'
                required={false}
                onChange={e => handleEmployerChange(e.target.value)}
            />
            <SelectInput
                id='retired'
                name='Retired'
                required={false}
                onChange={e => handleRetiredChange(e.target.value)}
                options={[
                    {name: '-Select one', value: ''},
                    {name: 'Yes', value: true},
                    {name: 'No', value: false}
                ]}
            />
            <TextArea
                id='military'
                name='Military Service(branch, years, location)'
                required={false}
                onChange={e => handleMilitaryChange(e.target.value)}
            />
            <TextArea
                id='limitations'
                name='Please indicate any medical conditions or physical limitations we should be aware of'
                required={false}
                onChange={e => handleLimitationsChange(e.target.value)}
            />
        </form>
    )
}