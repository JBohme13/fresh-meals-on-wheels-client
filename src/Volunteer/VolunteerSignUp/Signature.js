import React, { Fragment } from 'react';
import SubBanner from '../../LayoutComponents/SubBanner';
import TextInput from '../../FormComponents/TextInput';

export default function Signature(props) {
    return(
        <Fragment>
            <SubBanner name='Acknowedgments/ signature' />
            <p>
                In the interest of serving the homebound of Sheboygan County,
                 I agree to uphold and abide by the policies and procedures of
                 Meals On Wheels of Sheboygan County, inc. 
                 Meals On Wheels of Sheboygan County, Inc. (the Agency)
                 strongly upholds the strictest level of volunteer, employee, and client confidentiality.     
            </p>
            <ul>
                <li>I agree to abide by the Agency's policies on configentiality.</li>
                <li>I agree not to discuss any client's living conditions, health concerns
                     or financial status with anyone other than Meals On Wheels staff.</li>
                <li>I agree not to copy or in any way reproduce information concerning any Agancy participants.</li>
                <li>I agree not to solicit business or leave promotional materials with clients.</li>
            </ul>
            <p>
                I authorize Meals On Wheels of Sheboygan County, Inc. to conduct a background chekc on me, which may or may not include,
                 but not be limitied to, contacting my references regarding my conduct and character.<br />
                Just as a volunteer may terminate his/her relationship with the Agency at any time for any reason.
                  The Agency expressly reserves the right to terminate any volunteer at its sole discretion.
            </p>
            <TextInput
                id='signature'
                name='Signatue'
                required={true}
                onChange={e => props.handleSignatureChange(e.target.value)}
            />
            <TextInput
                id='singatureDate'
                name='Date'
                required={true}
                onChange={e => props.handleSignatureDateChange(e.target.value)}
            />
        </Fragment>
    )
}