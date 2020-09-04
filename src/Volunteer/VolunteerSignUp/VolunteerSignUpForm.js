import React, { useState, Fragment } from 'react'
import UserInfo from './UserInfo';
import ContactInfo from './ContactInfo';
import PersonalInfo from './PersonalInfo';
import EmergencyContact from './EmergencyContact';
import AutoInfo from './AutoInfo';
import References from './References';
import Signature from './Signature';
import VolunteerNavBar from '../VolunteerNavBar';
import SectionBanner from '../../LayoutComponents/SectionBanner';
import SubBanner from '../../LayoutComponents/SubBanner';
import Button from '../../FormComponents/Button';
import './VolunteerSignUpForm.css';

export default function VolunteerSignUpForm() {
    const apiUrl = 'localhost:8000';
    //user info state variables
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    //Contact info state variables
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [maidenName, setMaidenName] = useState('');
    const [address,setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [homePhone, setHomePhone] = useState('');
    const [cellPhone, setCellPhone] = useState('');
    const [workPhone, setWorkPhone] = useState('');
    const [prefPhone, setPrefPhone] = useState('home');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [newsletterPref, setNewsletterPref] = useState('email');
    //Personal info state variables
    const [gender, setGender] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [race, setRace] = useState('');
    const [language, setLanguage] = useState('');
    const [additionalLanguages, setAdditionalLanguages] = useState('');
    const [employer, setEmployer] = useState('');
    const [retired, setRetired] = useState('');
    const [military, setMilitary] = useState('');
    const [limitations, setLimitations] = useState('');
    //Emergency contact state variables
    const [emergencyContact, setEmergencyContact] = useState('');
    const [emergencyRelationship, setEmergencyRelationship] = useState('');
    const [emergencyAddress, setEmergencyAddress] = useState('');
    const [emergencyHomePhone, setEmergencyHomePhone] = useState('');
    const [emergencyCellPhone, setEmergencyCellPhone] = useState('');
    const [emergencyWorkPhone, setEmergencyWorkPhone] = useState('');
    //References state variables
    const [refName1, setRefName1] = useState('');
    const [refRelationship1, setRefRelationship1] = useState('');
    const [refPhone1, setRefPhone1] = useState('');
    const [refAddress1, setRefAddress1] = useState('');
    const [refName2, setRefName2] = useState('');
    const [refRelationship2, setRefRelationship2] = useState('');
    const [refPhone2, setRefPhone2] = useState('');
    const [refAddress2, setRefAddress2] = useState('');
    //Driver info state variables
    const [driver, setDriver] = useState('');
    const [licenseNumber, setLicensenumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [insuranceCompany, setInsuranceCompany] = useState('');
    const [policyNumber, setPolicyNumber] = useState('');
    const [policyExpiration, setPolicyExpiration] =useState('');
    const [subList, setSubList] = useState(false);
    const [lastMinuteList, setLastMinuteList] = useState(false);
    const [subPreferences, setSubPreferences] = useState('');
    //Signature info variables
    const [signature, setSignature] = useState('');
    const [signatureDate, setSignatureDate] = useState('');
    const [userClassName, setUserClassName] = useState('');
    const [contactClassName, setContactClassName] = useState('hidden');
    const [personalClassName, setPersonalClassName] = useState('hidden');
    const [emergencyClassName, setEmergencyClassName] = useState('hidden');
    const [autoClassName, setAutoClassName] = useState('hidden');
    const [referenceClassName, setReferenceClassName] = useState('hidden');
    const [signatureClassName, setsignatureClassName] = useState('hidden');

    const handleUserContinueButton = e => {
        e.preventDefault();
        setUserClassName('hidden');
        setContactClassName('');
    };

    const handleContactContinueButton = e => {
        e.preventDefault();
        setContactClassName('hidden');
        setPersonalClassName('');
    };

    const handlePersonalContinueButton = e => {
        e.preventDefault();
        setPersonalClassName('hidden')
        setEmergencyClassName('');
    };

    const handleEmergencyContinueButton = e => {
        e.preventDefault();
        setEmergencyClassName('hidden');
        setAutoClassName('');
    };

    const handleAutoContinueButton = e => {
        e.preventDefault();
        setAutoClassName('hidden');
        setReferenceClassName('');
    };

    const handleReferenceContinueButton = e => {
        e.preventDefault();
        setReferenceClassName('hidden');
        setsignatureClassName('');
    };



    const handleVolunteerFormSubmit = e => {
        e.preventDefault();
        const volunteer = {
            userName: userName,
            password: password,
            name: name,
            nickname: nickname,
            maidenName: maidenName,
            address: address,
            city: city,
            zip: zip,
            homePhone: homePhone,
            cellPhone: cellPhone,
            workPhone: workPhone,
            prefPhone: prefPhone,
            email: email,
            birthdate: birthdate,
            newsletterPref: newsletterPref,
            gender: gender,
            maritalStatus: maritalStatus,
            race: race,
            language: language,
            additionalLanguages: additionalLanguages,
            employer: employer,
            retired: retired,
            military: military,
            limitations: limitations,
            emergencyContact: emergencyContact,
            emergencyRelationship: emergencyRelationship,
            emergencyAddress: emergencyAddress,
            emergencyHomePhone: emergencyHomePhone,
            emergencyCellPhone: emergencyCellPhone,
            emergencyWorkPhone: emergencyWorkPhone,
            refName1: refName1,
            refRelationship1: refRelationship1,
            refPhone1: refPhone1,
            refAddress1: refAddress1,
            refName2: refName2,
            refRelationship2: refRelationship2,
            refPhone2: refPhone2,
            refAddress2: refAddress2,
            driver: driver,
            licenseNumber: licenseNumber,
            expirationDate: expirationDate,
            insuranceCompany: insuranceCompany,
            policyNumber: policyNumber,
            policyExpiration: policyExpiration,
            subList: subList,
            lastMinuteList: lastMinuteList,
            subPreferences: subPreferences,
            signatue: signature,
            signatureDate: signatureDate
        }

        
        /*fetch(`${apiUrl}/api/volunteers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(volunteer),
        })
        .then((volunteerRes) => {
            console.log('POST call attempted for volunteer submition');
            console.log(volunteerRes);
        })*/
    }

    return(
        <Fragment>
            <VolunteerNavBar />
            <form>
                <SubBanner 
                    name='Please create a username and password below' 
                    className={userClassName}/>
                <UserInfo 
                    className={userClassName}
                    handleUserNameChange={userName => setUserName(userName)}
                    handlePasswordChange={password => setPassword(password)}
                />
                <Button 
                    name='continue' 
                    onClick={e => handleUserContinueButton(e)}  
                    className={userClassName}
                />
                <SectionBanner 
                    name='Volunteer Sign Up' 
                    className={contactClassName}/>
                <SubBanner 
                    name='If you need help please give us a Call! (###)###-####' 
                    className={contactClassName}/>
                <ContactInfo 
                    className={contactClassName}
                    handleNameChange={name => setName(name)}
                    handleNickNameChange={nickname => setNickname(nickname)}
                    handleMaidenNameChange={maidenName => setMaidenName(maidenName)}
                    handleAddressChange={address => setAddress(address)}
                    handleCityChange={city => setCity(city)}
                    handleZipChange={zip => setZip(zip)}
                    handleHomePhoneChange={homePhone => setHomePhone(homePhone)}
                    handleCellPhoneChange={cellPhone => setCellPhone(cellPhone)}
                    handleWorkPhoneChange={workPhone => setWorkPhone(workPhone)}
                    handlePrefPhoneChange={prefPhone => setPrefPhone(prefPhone)}
                    handleEmailChange={email => setEmail(email)}
                    handleBirthDateChange={birthdate => setBirthDate(birthdate)}
                    handleNewsletterPrefChange={newsletterPref => setNewsletterPref(newsletterPref)}
                />
                <Button 
                    name='continue' 
                    onClick={e => handleContactContinueButton(e)}  
                    className={contactClassName}
                />
                <PersonalInfo
                    className={personalClassName} 
                    handleGenderChange={gender => setGender(gender)}
                    handleMaritalStatusChange={maritalStatus => setMaritalStatus(maritalStatus)}
                    handleRaceChange={race => setRace(race)}
                    handleLanguageChange={language => setLanguage(language)}
                    language={language}
                    handleAdditionalLanguageChange={additionalLanguages => setAdditionalLanguages(additionalLanguages)}
                    handleEmployerChange={employer => setEmployer(employer)}
                    handleRetiredChange={retired => setRetired(retired)}
                    handleMilitaryChange={military => setMilitary(military)}
                    handleLimitationsChange={limitations => setLimitations(limitations)}
                />
                <Button 
                    name='continue' 
                    onClick={e => handlePersonalContinueButton(e)}  
                    className={personalClassName}
                />
                <EmergencyContact
                    className={emergencyClassName}
                    handleEmergencyContactChange={emergencyContact => setEmergencyContact(emergencyContact)}
                    handleEmergencyRelationshipChange={emergencyRelationship => setEmergencyRelationship(emergencyRelationship)}
                    handleEmergencyAddressChange={emergencyAddress => setEmergencyAddress(emergencyAddress)}
                    handleEmergencyHomePhoneChange={emergencyHomePhone => setEmergencyHomePhone(emergencyHomePhone)}
                    handleEmergencyCellPhoneChange={emergencyCellPhone => setEmergencyCellPhone(emergencyCellPhone)}
                    handleEmergencyWorkPhoneChange={emergencyWorkPhone => setEmergencyWorkPhone(emergencyWorkPhone)}
                />
                <Button 
                    name='continue' 
                    onClick={e => handleEmergencyContinueButton(e)}  
                    className={emergencyClassName}
                />
                <AutoInfo
                    className={autoClassName} 
                    handleDriverChange={driver => setDriver(driver)}
                    driver={driver}
                    handleLicenseNumberChange={licenseNumber => setLicensenumber(licenseNumber)}
                    handleExpirationDateChange={expirationDate => setExpirationDate(expirationDate)}
                    handleInsuranceCompanyChange={insuranceCompany => setInsuranceCompany(insuranceCompany)}
                    handlePolicyNumberChange={policyNumber => setPolicyNumber(policyNumber)}
                    handlePolicyExpirationChange={policyExpiration => setPolicyExpiration(policyExpiration)}
                    handleSubListChange={subList => setSubList(subList)}
                    handleLastMinuteListChange={lastMinuteList => setLastMinuteList(lastMinuteList)}
                    handleSubPreferencesChange={subPreferences => setSubPreferences(subPreferences)}
                />
                <Button 
                    name='continue' 
                    onClick={e => handleAutoContinueButton(e)}  
                    className={autoClassName}
                />
                <References
                    className={referenceClassName}
                    handleRefName1Change={refName1 => setRefName1(refName1)}
                    handleRefRelationship1Change={refRelationship1 => setRefRelationship1(refRelationship1)}
                    handleRefPhone1Change={refPhone1 => setRefPhone1(refPhone1)}
                    handleRefAddress1Change={refAddress1 => setRefAddress1(refAddress1)}
                    handleRefName2Change={refName2 => setRefName2(refName2)}
                    handleRefRelationship2Change={refRelationship2 => setRefRelationship2(refRelationship2)}
                    handleRefPhone2Change={refPhone2 => setRefPhone2(refPhone2)}
                    handleRefAddress2Change={refAddress2 => setRefAddress2(refAddress2)}
                />
                <Button 
                    name='continue' 
                    onClick={e => handleReferenceContinueButton(e)}  
                    className={referenceClassName}
                />
                <Signature
                    className={signatureClassName}
                    handleSignatureChange={signature => setSignature(signature)}
                    handleSignatureDateChange={signatureDate => setSignatureDate(signatureDate)}
                />
                <Button 
                    className={signatureClassName}
                    id='volunteerSubmitButton'
                    name='Submit'
                    onClick={e => handleVolunteerFormSubmit(e)}
                />
            </form>
        </Fragment>
    )
}