import React from 'react';
import Member from "./Member";
import "./MemberSet.css";

function MemberSet({member1, member2, member3, level1, level2, level3, image1, image2, image3}){
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
            <Member 
                img={image3}
                level={level3}
                member={member3}
            />
        </div>
    )
}

export default MemberSet;