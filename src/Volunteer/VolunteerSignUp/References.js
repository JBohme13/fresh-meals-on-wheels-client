import React from 'react';
import SubBanner from '../../LayoutComponents/SubBanner';
import LabelBanner from '../../LayoutComponents/LabelBanner';
import TextInput from '../../FormComponents/TextInput';

export default function References(props) {
    return(
        <section className={props.className}>
            <SubBanner name='Please list two references' />
            <LabelBanner name='Reference 1' />
            <TextInput
                id='refName1'
                name='Name'
                required={true}
                onChange={e => props.handleRefName1Change(e.target.value)}
            />
            <TextInput
                id='refRelationship1'
                name='Relationship'
                required={true}
                onChange={e => props.handleRefRelationship1Change(e.target.value)}
            />
            <TextInput
                id='refPhone1'
                name='Phone'
                required={true}
                onChange={e => props.handleRefPhone1Change(e.target.value)}
            />
            <TextInput
               id='refAddress1'
               name='Address'
               required={true}
               onChange={e => props.handleRefAddress1Change(e.target.value)}
            />
            <LabelBanner name='Reference 2' />
            <TextInput
                id='refName2'
                name='Name'
                required={true}
                onChange={e => props.handleRefName2Change(e.target.value)}
            />
            <TextInput
                id='refRelationship2'
                name='Relationship'
                required={true}
                onChange={e => props.handleRefRelationship2Change(e.target.value)}
            />
            <TextInput
                id='refPhone2'
                name='Phone'
                required={true}
                onChange={e => props.handleRefPhone2Change(e.target.value)}
            />
            <TextInput
               id='refAddress2'
               name='Address'
               required={true}
               onChange={e => props.handleRefAddress2Change(e.target.value)}
            />
        </section>
    )
}