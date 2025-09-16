// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ButtonAdd from './components/ButtonAdd'
// import HeaderTxt from './components/HeaderTxt'
// import MemberList from './components/MemberList';

import Govermment from './components/Govermment'


//  const allMembers=[
//     {nameTH: "อลัน พศวีร์ ศรีอรุโณทัย",nameEN: "Alan", heightCm: 185, age: 23,
//       imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/72b3c153-e0c9-4a1d-acbd-f3ec538b89a5.jpg",
//       group: "Bus"},
//     { nameTH: "มาร์ค กฤษณ์ กัญจนาทิพย์", nameEN: "Marckris", heightCm: 172, age: 22,
//       imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/05f7d2eb-f614-40fa-b8a9-fb7d03826327.jpg",
//       group: "Bus"
//     },
//     { nameTH: "ขุนพล ปองพล ปัญญามิตร", nameEN: "Khunpol", heightCm: 179, age: 22,
//       imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/5c8b7c54-2b7a-4f36-b414-d55883b572dc.jpg",
//       group: "Bus"
//     },
//     { nameTH: "c จันเคน", nameEN: "Heart", heightCm: 174, age: 22,
//       imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/c550699d-d164-46ff-999f-d3733321ef38.jpg",
//       group: "Bus"
//     },
//     { nameTH: "ฮาร์ท ชุติวัฒน์ จันเคน", nameEN: "Heart", heightCm: 174, age: 22,
//       imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/73cb6f1d-a112-462f-87ee-9b544f59540a.jpg",
//       group: "Bus"
//     },
//     { nameTH: "จินวุค คิม", nameEN: "Jinwook", heightCm: 178, age: 21,
//       imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/c550699d-d164-46ff-999f-d3733321ef38.jpg",
//       group: "Bus"
//     },
//     { nameTH: "ไทย ชญานนท์ ภาคฐิน", nameEN: "Thai", heightCm: 178, age: 20,
//       imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/8733244c-13ee-4969-9158-c9b9be36ee41.jpg",
//       group: "Bus"
//     },
//     { nameTH: "เน็กซ์ ณัฐกิตติ์ แช่มดารา", nameEN: "Nex", heightCm: 180, age: 20,
//       imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/83d44e85-a7f9-4fcb-925d-73a603f49e87.jpg",
//       group: "Bus"
//     },
//     { nameTH: "ภู ธัชชัย ลิ้มปัญญากุล", nameEN: "Phu", heightCm: 180, age: 20,
//       imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/9d8795e0-702d-4f56-9aa0-c358c680f3c1.jpg",
//       group: "Bus"
//     },
//     { nameTH: "คอปเปอร์ เดชาวัต พรเดชาพิพัฒ", nameEN: "Copper", heightCm: 173, age: 19,
//       imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/9f5cd847-bfb0-41cc-9f04-eceba98916e8.jpg",
//       group: "Bus"
//     },
//     { nameTH: "เอเอ อชิรกรณ์ สุวิทยะเสถียร", nameEN: "AA", heightCm: 178, age: 19,
//       imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/26eb6b87-7897-432d-a5fe-33cc1c357d23.jpg",
//       group: "Bus"
//     },
//     { nameTH: "จั๋ง ธีร์ บุญเสริมสุวงศ์", nameEN: "Jungt", heightCm: 173, age: 19,
//       imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/ea2a13c7-8a01-4859-8600-88e9931c1112.jpg",
//       group: "Bus"
//     },
//     { nameTH: "ภีม วสุพล พรพนานุรักษ์", nameEN: "Peem", heightCm: 187, age: 19,
//       imageUrl: "https://s359.kapook.com/rq/600/auto/50/pagebuilder/e33ea513-bd5f-479f-a1f6-056d225d8323.jpg",
//       group: "Bus"
//     },
//       {nameTH: "จินู ซาจา",nameEN: "Jinu Saja",heightCm: 175,age: 22,
//         imageUrl: "https://blog.delivered.co.kr/wp-content/uploads/2025/08/Jinu-small.jpg",
//         group: "SajaBoys"},
//       { nameTH: "แอบบี้ ซาจา", nameEN: "Abby Saja", heightCm: 178, age: 21,
//         imageUrl: "https://blog.delivered.co.kr/wp-content/uploads/2025/08/Abby-small.jpg",
//         group: "SajaBoys"
//       },
//       { nameTH: "เบบี้ซาจา", nameEN: "Baby Saja", heightCm: 170, age: 20,
//         imageUrl: "https://blog.delivered.co.kr/wp-content/uploads/2025/08/Baby-small.jpg",
//         group: "SajaBoys"
//       },
//       { nameTH: "มิสทรี ซาจา", nameEN: "Mystery Saja", heightCm: 177, age: 19,
//         imageUrl: "https://blog.delivered.co.kr/wp-content/uploads/2025/08/Mystery-small.jpg",
//         group: "SajaBoys"
//       },
//       { nameTH: "โรแมนซ์ ซาจา", nameEN: "Romance Saja", heightCm: 176, age: 18,
//         imageUrl: "https://blog.delivered.co.kr/wp-content/uploads/2025/08/Romance-small.jpg",
//         group: "SajaBoys"
//       }];

// export default function App() {
// //   return (
// //     <div>
// //       <h1>Member Lists</h1>

// //       <h2>Bus</h2>
// //       <MemberList group="Bus" members={allMembers} />

// //       <h2>SajaBoys</h2>
// //       <MemberList group="SajaBoys" members={allMembers} />
// //     </div>
// //   );
// // }

// return (
//     <>
//       <div>
//         <HeaderTxt title="Computer Science" txtsize="50" status={false}/>
//         <HeaderTxt title="Meajo University" txtsize="20" status={true}/>

//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>

//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>

//       </div>

//       <h1>Vite + React</h1>
      
//       <div className="card">
//         <ButtonAdd />
        
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>

//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Govermment />
    </div>
  )
}

export default App

    




