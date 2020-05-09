import React, { useState } from 'react';
import SubBanner from '../LayoutComponents/SubBanner';
import TextInput from '../FormComponents/TextInput';
import SelectInput from '../FormComponents/SelectInput';
import ExplainBox from '../FormComponents/ExplainBox';
import Button from '../FormComponents/Button';

export default function ContactInfo(props) {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [maidenName, setMaidenName] = useState('');
    const [address,setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [homePhone, setHomePhone] = useState('');
    const [cellPhone, setCellPhone] = useState('');
    const [workPhone, setWorkPhone] = useState('');
    const [prefPhone, setPrefPhone] = useState('Home');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [newsletterPref, setNewsletterPref] = useState('email');

    const handleNameChange = input => setName(input);
    const handleNicknameChange = input => setNickname(input);
    const handleMaidenNameChange = input => setMaidenName(input);
    const handleAddressChange = input => setAddress(input);
    const handleCityChange = input => setCity(input);
    const handleZipChange = input => setZip(input);
    const handleHomePhoneChange = input => setHomePhone(input);
    const handleCellPhoneChange = input => setCellPhone(input);
    const handleWorkPhoneChange = input => setWorkPhone(input);
    const handlePrefPhoneChange = input => setPrefPhone(input);
    const handleEmailChange = input => setEmail(input);
    const handleBirthdateChange = input => setBirthDate(input);
    const handleNewsletterPrefChange = input => setNewsletterPref(input);

    return(
        <form>
            <SubBanner name='Volunteer Information'/>
            <TextInput
                id='name'
                name='Name'
                required={true}
                placeholder=''
                onChange={e => handleNameChange(e.target.value)}
            />
            <TextInput
                id='nickname'
                name='Prefered Name'
                required={false}
                placeholder=''
                onChange={e => handleNicknameChange(e.target.value)}
            />
            <TextInput
                id='maidenName'
                name='Maiden Name'
                required={false}
                placeholder=''
                onChange={e => handleMaidenNameChange(e.target.value)}
            />
            <TextInput
                id='address'
                name='Address'
                required={true}
                placeholder=''
                onChange={e => handleAddressChange(e.target.value)}
            />
            <TextInput
                id='city'
                name='City'
                required={true}
                placeholder=''
                onChange={e => handleCityChange(e.target.value)}
            />
            <TextInput
                id='zip'
                name='Zip code'
                required={true}
                onChange={e => handleZipChange(e.target.value)}
            />
            <TextInput
                id='homePhone'
                name='Home phone'
                required={true}
                onChange={e => handleHomePhoneChange(e.target.value)}
            />
            <TextInput
                id='cellPhone'
                name='Cell Phone'
                required={false}
                onChange={e => handleCellPhoneChange(e.target.value)}
            />
            <TextInput
                id='workPhone'
                name='Work Phone'
                required={false}
                onChange={e => handleWorkPhoneChange(e.target.value)}
            />
            <SelectInput
                id='prefPhone'
                name='Which should we call first?'
                required={true}
                onChange={e => handlePrefPhoneChange(e.target.value)}
                options={[
                    {name: '-Select one', value: ''},
                    {name: 'Home Phone', value: 'homePhone'},
                    {name: 'Cell Phone', value: 'cellPhone'}, 
                    {name: 'Work Phone', value: 'workPhone'}
                ]}
            />
            <TextInput
                id='email'
                name='Email'
                required={true}
                onchange={e => handleEmailChange(e.target.value)}
            />
            <TextInput
                id='birthdate'
                name='Birthdate (month/day/year)'
                required={true}
                onchange={e => handleBirthdateChange(e.target.value)}
            />
            <SelectInput
                id='newsletterPref'
                name='Volunteer Newsletter/Schedule delivery preference'
                required={true}
                onChange={e => handleNewsletterPrefChange(e.target.value)}
                options={[
                    {name: '-Select one', value: ''},
                    {name: 'Email', value: 'email'}, 
                    {name: 'US Mail', value: 'usMail'}
                ]}
            />
        </form>
    )
}