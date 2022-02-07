import React from 'react';
import Member from "./Member";
import "./MemberSet.css";

function MemberSet({member1, member2, member3, 
                    hasDirectors1, hasDirectors2, hasDirectors3,
                    director1, director2, director3,
                    codirector1, codirector2, codirector3,
                    level1, level2, level3, image1, image2, image3}){
    return (
        <div className="member-pair__container">
            <Member 
                img={image1}
                level={level1}
                member={member1}
                hasDirectors={hasDirectors1}
                director={director1}
                codirector={codirector1}
            />
            <Member
                img={image2}
                level={level2}
                member={member2}
                hasDirectors={hasDirectors2}
                director={director2}
                codirector={codirector2}
            />
            <Member 
                img={image3}
                level={level3}
                member={member3}
                hasDirectors={hasDirectors3}
                director={director3}
                codirector={codirector3}
            />
        </div>
    )
}

export default MemberSet;