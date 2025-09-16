// สร้าง Component  สำหรับเก็บรายชื่อวิชาและเกรด 
//  - Input : รายชื่อวิชา, เกรด(A, B+, B,…, F, W)  ปุ่มเพิ่มรายวิชา, ปุ่มลบรายวิชา 
//  - แสดงรายวิชาทั้งหมดที่เพิ่ม  กรณีที่เป็นเกรด F ให้แสดงรายวิชานั้นเป็นตัวอักษรสีแดง 
//  - ปุ่มคำนวณ GPA และแสดงผลค่า GPA จากการคำนวน 

import { useState } from "react";



function TodoApp() { 
    type Course = {
        subject: string;
        grade: string;
    };

    const [subject, setSubject] = useState<string>("");        // เก็บค่าที่พิมพ์ใน input 
    const [grade, setGrade] = useState<string>(""); 
    
    const [course, setCourses] = useState<Course[]>([]);        // เก็บค่าที่พิมพ์ใน input

    const addCourse = () => { 
        if (subject.trim() === "" || grade.trim() === "") return;            // กัน input ว่าง 
        setCourses([...course,{subject,grade}]);                // เพิ่ม task ลงใน array 
        setSubject("");
        setGrade("");                               // เคลียร์ input หลังเพิ่ม 
    }; 

    {/* เพิ่มปุ่มลบรายการ และ Function การลบรายการ  */}
    const deleteCourse = (index: number) => { 
        // เก็บรายการที่ index ไม่ตรงกับอันที่ต้องการลบ 
        const newCourse = course.filter((_, i) => i !== index); 
        setCourses(newCourse); 
    }; 
 

    return ( 
        <div style={{ textAlign: "center", marginTop: "50px" }}> 
            <h1>My To-do List</h1> 

             {/* Input : รายชื่อวิชา, เกรด */}
            <input 
                type="text" 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                placeholder="รายชื่อวิชา..." 
            /> 
            <select name="grade" id="" value={grade} onChange={(e) => setGrade(e.target.value)}>
                <option value="">เลือกเกรด...</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="F">F</option>
                <option value="W">W</option>
            </select>

            <button onClick={addCourse}>Add</button>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {course.map((c, index) => (
                    <li
                        key={index}
                        style={{
                            margin: "5px 0",
                            color: c.grade === "F" ? "red" : undefined,
                        }}
                    >
                        {c.subject} - {c.grade}
                        <button
                            onClick={() => deleteCourse(index)}
                            style={{ marginLeft: 10, color: "red" }}
                        >
                            ลบ
                        </button>
                    </li>
                ))}
            </ul>

             {/* ปุ่มคำนวณ GPA และแสดงผลค่า GPA จากการคำนวน  */}
        <button
            onClick={() => {
                // GPA calculation
                const gradeMap: { [key: string]: number } = {
                    "A": 4,
                    "B+": 3.5,
                    "B": 3,
                    "C+": 2.5,
                    "C": 2,
                    "D+": 1.5,
                    "D": 1,
                    "F": 0,
                };
                const validCourses = course.filter(c => c.grade !== "W" && c.grade in gradeMap);
                const totalPoints = validCourses.reduce((sum, c) => sum + gradeMap[c.grade], 0);
                const gpa = validCourses.length > 0 ? (totalPoints / validCourses.length) : 0;
                alert(`GPA: ${gpa.toFixed(2)}`);
            }}
            style={{ margin: "0 10px" }}
        >
            คำนวณ GPA
        </button>
        </div> 
    ); 
} 


export default TodoApp; 