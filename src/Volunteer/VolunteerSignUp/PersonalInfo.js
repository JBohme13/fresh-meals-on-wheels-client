import React, { Fragment } from 'react';
import SubBanner from '../../LayoutComponents/SubBanner';
import TextInput from '../../FormComponents/TextInput';
import TextArea from '../../FormComponents/TextArea';
import SelectInput from '../../FormComponents/SelectInput';
import ExplainBox from '../../FormComponents/ExplainBox';

export default function PersonalInfo(props) {
    return(
        <Fragment>
            <SubBanner name='Personal Information' />
            <TextInput
                id='gender'
                name='Gender'
                required={false}
                onChange={e => props.handleGenderChange(e.target.value)}
            />
            <SelectInput
                id='maritalStatus'
                name='Marital Status'
                required={true}
                onChange={e => props.handleMaritalStatusChange(e.target.value)}
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
                onchange={e => props.handleRaceChange(e.target.value)}
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
                onChange={e => props.handleLanguageChange(e.target.value)}
                options={[
                    {name: '-Select one', value: ''},
                    {name: 'Yes', value: true},
                    {name: 'No', value: false}
                ]}
            />
            {props.language === 'true' ? 
                <ExplainBox 
                    name='If so, what language(s)?' 
                    id='languageExplain' 
                    onChange={e => props.handleAdditionalLanguageChange(e.target.value)}
                /> 
                : ''
            }
            <TextInput
                id='employer'
                name='Employer/Retired from'
                required={false}
                onChange={e => props.handleEmployerChange(e.target.value)}
            />
            <SelectInput
                id='retired'
                name='Retired'
                required={false}
                onChange={e => props.handleRetiredChange(e.target.value)}
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
                onChange={e => props.handleMilitaryChange(e.target.value)}
            />
            <TextArea
                id='limitations'
                name='Please indicate any medical conditions or physical limitations we should be aware of'
                required={false}
                onChange={e => props.handleLimitationsChange(e.target.value)}
            />
        </Fragment>
    )
}