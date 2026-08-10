import React from 'react';
import Member from './Member';
import './DynamicMemberSet.css';


function DynamicMemberSet({data}){
    return (
        <div className="dynamic-member-set__container">
            {data.map( ({member, img, cv}) => (
                <Member
                    key={member.name}
                    member={member}
                    img={img}
                    cv={cv}
                />
            )) }
        </div>
    )
}

export default DynamicMemberSet;