{/*  แยกไปเป็น Component 
          prop = List_MEMBERS(ทั้งหมด),"ชื่อวง"
          ให้ Component แสดงผลเฉพาะสมาชิกในวงที่ระบุ
          <MemberList members={List_MEMBERS} group="Bus"/>
          <MemberList members={List_MEMBERS} group="SajaBoys"/>
          */}




  type Member = { 
    nameTH: string;    // ชื่อภาษาไทย 
    nameEN: string;    // ชื่อภาษาอังกฤษ 
    heightCm: number;  // ส่วนสูง (เซนติเมตร) 
    age: number;       // อายุ (ปี)
    imageUrl?: string;  // รูปภาพ (ถ้ามี)
    group?: string;   // กลุ่ม (ถ้ามี)
  }; 

   type MemberListProps = {
    members: Member[];
    group: string;
  };


export default function MemberList({ members, group }: MemberListProps) {
  const filteredMembers = members.filter(member => member.group === group);

  return (
    <ul>
      {filteredMembers.map((member, index) => (
        <li key={index}>
          {member.nameTH} ({member.nameEN})<br />
          {member.imageUrl && (
            <img src={member.imageUrl} alt={member.nameEN} width="150" />
          )}
        </li>
      ))}
    </ul>
  );
}

 