import React from 'react';
import SubBanner from '../../LayoutComponents/SubBanner';
import TextInput from '../../FormComponents/TextInput';
import SelectInput from '../../FormComponents/SelectInput';

export default function ContactInfo(props) {
    return(
        <section className= {props.className}>
            <SubBanner name='Volunteer Information'/>
            <TextInput
                id='name'
                name='Name'
                required={true}
                placeholder=''
                onChange={e => props.handleNameChange(e.target.value)}
            />
            <TextInput
                id='nickname'
                name='Prefered Name'
                required={false}
                placeholder=''
                onChange={e => props.handleNickNameChange(e.target.value)}
            />
            <TextInput
                id='maidenName'
                name='Maiden Name'
                required={false}
                placeholder=''
                onChange={e => props.handleMaidenNameChange(e.target.value)}
            />
            <TextInput
                id='address'
                name='Address'
                required={true}
                placeholder=''
                onChange={e => props.handleAddressChange(e.target.value)}
            />
            <TextInput
                id='city'
                name='City'
                required={true}
                placeholder=''
                onChange={e => props.handleCityChange(e.target.value)}
            />
            <TextInput
                id='zip'
                name='Zip code'
                required={true}
                onChange={e => props.handleZipChange(e.target.value)}
            />
            <TextInput
                id='homePhone'
                name='Home phone'
                required={true}
                onChange={e => props.handleHomePhoneChange(e.target.value)}
            />
            <TextInput
                id='cellPhone'
                name='Cell Phone'
                required={false}
                onChange={e => props.handleCellPhoneChange(e.target.value)}
            />
            <TextInput
                id='workPhone'
                name='Work Phone'
                required={false}
                onChange={e => props.handleWorkPhoneChange(e.target.value)}
            />
            <SelectInput
                id='prefPhone'
                name='Which should we call first?'
                required={true}
                onChange={e => props.handlePrefPhoneChange(e.target.value)}
                options={[
                    {name: '-Select one', value: ''},
                    {name: 'Home Phone', value: 'home'},
                    {name: 'Cell Phone', value: 'cell'}, 
                    {name: 'Work Phone', value: 'work'}
                ]}
            />
            <TextInput
                id='email'
                name='Email'
                required={true}
                onchange={e => props.handleEmailChange(e.target.value)}
            />
            <TextInput
                id='birthdate'
                name='Birthdate (month/day/year)'
                required={true}
                onchange={e => props.handleBirthdateChange(e.target.value)}
            />
            <SelectInput
                id='newsletterPref'
                name='Volunteer Newsletter/Schedule delivery preference'
                required={true}
                onChange={e => props.handleNewsletterPrefChange(e.target.value)}
                options={[
                    {name: '-Select one', value: ''},
                    {name: 'Email', value: 'email'}, 
                    {name: 'US Mail', value: 'usMail'}
                ]}
            />
        </section>
    )
}