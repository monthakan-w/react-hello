// เนียบรายชื่อสมาชิกผู้แทนราษฎร 
// - คำนำหน้า, ชื่อ, นามสกุล, รูปถ่าย2” 
// - ประวัติการทำงาน ผลงานที่ผ่านมา 
// - ตำแหน่งรัฐมนตรี กระทรวง 
// - สังกัดพรรคการเมือง 
// เพิ่ม แสดงรายชื่อทั้งหมด ลบ แก้ไข 
// ตกแต่งการจัดว่าง ความสวยงาม tailwindcss 

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Zod Schema
const memberSchema = z.object({
  title: z.string().min(1, "กรุณากรอกคำนำหน้า"),
  firstName: z.string().min(1, "กรุณากรอกชื่อ"),
  lastName: z.string().min(1, "กรุณากรอกนามสกุล"),
  position: z.string().min(1, "กรุณากรอกตำแหน่ง"),
  party: z.string().min(1, "กรุณากรอกชื่อพรรค"),
  photoUrl: z.string().url("รูปถ่ายต้องเป็นลิงก์ URL ที่ถูกต้อง"),
});

// TypeScript Types
type Member = {
  id: number;
  title: string;
  firstName: string;
  lastName: string;
  position: string;
  party: string;
  photoUrl: string;
};

type MemberFormInput = z.infer<typeof memberSchema>;

export default function Government() {
  const [members, setMembers] = useState<Member[]>([]);
  const [nextId, setNextId] = useState(1);
  const [editId, setEditId] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<MemberFormInput>({
    resolver: zodResolver(memberSchema),
  });

  const onSubmit = (data: MemberFormInput) => {
    if (editId !== null) {
      setMembers((old) =>
        old.map((m) => (m.id === editId ? { ...data, id: editId } : m))
      );
      setEditId(null);
    } else {
      setMembers((old) => [...old, { ...data, id: nextId }]);
      setNextId(nextId + 1);
    }
    reset();
  };

  const handleEdit = (id: number) => {
    const member = members.find((m) => m.id === id);
    if (!member) return;
    setEditId(id);
    setValue("title", member.title);
    setValue("firstName", member.firstName);
    setValue("lastName", member.lastName);
    setValue("position", member.position);
    setValue("party", member.party);
    setValue("photoUrl", member.photoUrl);
  };

  const handleDelete = (id: number) => {
    setMembers((old) => old.filter((m) => m.id !== id));
    if (editId === id) {
      setEditId(null);
      reset();
    }
  };

  return (
  <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "24px", backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
    <h1 style={{ textAlign: "center", marginTop: "50px", fontSize: "1.875rem", fontWeight: "700", color: "#1f2937", marginBottom: "32px" }}>
      รายชื่อสมาชิกผู้แทนราษฎร
    </h1>

    {/* ฟอร์ม */}
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "40px" }}
      noValidate
    >
     <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
  {[ 
    { name: "title", label: "คำนำหน้า", placeholder: "คำนำหน้า" },
    { name: "firstName", label: "ชื่อ", placeholder: "ชื่อ" },
    { name: "lastName", label: "นามสกุล", placeholder: "นามสกุล" },
    { name: "position", label: "ตำแหน่ง", placeholder: "ตำแหน่ง" },
    { name: "party", label: "พรรคการเมือง", placeholder: "พรรคการเมือง" },
    { name: "photoUrl", label: "URL รูปถ่าย 2 นิ้ว", placeholder: "https://example.com/photo.jpg" },
  ].map(({ name, label, placeholder }) => (
    <div key={name} style={{ width: "100%" }}>
      <label style={{ display: "block", fontWeight: "600", marginBottom: "8px" }}>{label}</label>
      <input
        {...register(name as keyof MemberFormInput)}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "8px 16px",
          borderRadius: "8px",
          border: errors[name as keyof MemberFormInput] ? "1.5px solid #f87171" : "1px solid #d1d5db",
          boxShadow: errors[name as keyof MemberFormInput] ? "0 0 6px #fca5a5" : "0 0 6px #93c5fd",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
      {errors[name as keyof MemberFormInput] && (
        <p style={{ color: "#b91c1c", fontSize: "0.875rem", marginTop: "4px" }}>
          {errors[name as keyof MemberFormInput]?.message}
        </p>
      )}
    </div>
  ))}
</div>

      <button
        type="submit"
        style={{
          width: "100%",
          backgroundColor: "#2563eb",
          color: "#fff",
          padding: "12px 0",
          borderRadius: "12px",
          fontWeight: "600",
          marginTop: "24px",
          cursor: "pointer",
          border: "none",
          transition: "background-color 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
      >
        {editId !== null ? "บันทึกการแก้ไข" : "เพิ่มสมาชิก"}
      </button>
    </form>

    {/* รายชื่อสมาชิก */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
      {members.length === 0 && (
        <p style={{ textAlign: "center", color: "#6b7280", gridColumn: "1 / -1" }}>ยังไม่มีสมาชิก</p>
      )}

      {members.map((member) => (
        <div
          key={member.id}
          style={{
            backgroundColor: "#fff",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            transition: "box-shadow 0.3s ease",
            cursor: "default",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 12px rgba(0,0,0,0.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)")}
        >
          <img
            src={member.photoUrl}
            alt={`${member.title} ${member.firstName} ${member.lastName}`}
            style={{
              width: "192px",
              height: "192px",
              borderRadius: "8px", 
              objectFit: "cover",
              marginBottom: "16px",
              border: "2px solid #bfdbfe",
            }}
          />
          <h2 style={{ fontSize: "1.125rem", fontWeight: "700", marginBottom: "4px" }}>
            {member.title} {member.firstName} {member.lastName}
          </h2>
          <p style={{ fontSize: "0.875rem", color: "#4b5563", marginBottom: "4px" }}>ตำแหน่ง: {member.position}</p>
          <p style={{ fontSize: "0.875rem", color: "#4b5563", marginBottom: "16px" }}>พรรค: {member.party}</p>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => handleEdit(member.id)}
              style={{
                backgroundColor: "#fbbf24",
                color: "#fff",
                padding: "6px 16px",
                borderRadius: "8px",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f59e0b")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fbbf24")}
            >
              แก้ไข
            </button>
            <button
              onClick={() => handleDelete(member.id)}
              style={{
                backgroundColor: "#dc2626",
                color: "#fff",
                padding: "6px 16px",
                borderRadius: "8px",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
            >
              ลบ
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
} 