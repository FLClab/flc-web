import React from 'react';
import Member from './Member';
import './DynamicMemberSet.css';


function DynamicMemberSet({data}){
    return (
        <div className="dynamic-member-set__container">
            {data.map( ({member, img}) => (
                <Member
                    key={member.name}
                    member={member}
                    img={img}
                />
            )) }
        </div>
    )
}

export default DynamicMemberSet;