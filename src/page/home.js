import React from "react";

const Home=()=>{
    return(
        <>
        <h1>
        <section>
        <div class="container-fluid">
            <div class="row bg-dark justify-content-center align-items-center" style={{height: '50vh'}}>
              <div class="col-sm-10 text-center" >
                <h1 class="display-2 text-capitalize">
                    <span class="text-warning">Home</span>
                   
                </h1>
                <h3 class="font-weight-light font-italic text-light">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                </h3>
            
              </div>
            </div>
        </div>
        
       
    </section>
     
        </h1>
        </>
    )
}

export default Home;







//  import React, { useState } from 'react';


// function App() {
//   // Initial data for two companies
//   const initialData = [
//     { company: 'Company A', revenue: 100, profit: 20 },
//     { company: 'Company B', revenue: 150, profit: 30 }
//   ];

//   // State to hold the data
//   const [data, setData] = useState(initialData);

//   // Function to update data with random values
//   const updateData = () => {
//     const newData = data.map(company => ({
//       ...company,
//       revenue: Math.floor(Math.random() * 200) + 50,
//       profit: Math.floor(company.revenue * 0.2) // Assuming profit is 20% of revenue
//     }));
//     setData(newData);
//   };

//   return (
//     <div className="container">
//       <h1>Financial Data</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Company</th>
//             <th>Revenue (in million $)</th>
//             <th>Profit (in million $)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((company, index) => (
//             <tr key={index}>
//               <td>{company.company}</td>
//               <td>{company.revenue}</td>
//               <td>{company.profit}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// }

// export default App;
