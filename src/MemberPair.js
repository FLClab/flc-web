import React from 'react';
import Member from "./Member";
import "./MemberPair.css";

function MemberPair({member1, member2, level1, level2, image1, image2}){
    return (
        <div className="member-pair__container">
            <Member 
                img={image1}
                level={level1}
                member={member1}
            />
            <Member
                img={image2}
                level={level2}
                member={member2}
            />
        </div>
    )
}

export default MemberPair;