import React from "react";
import { useState } from "react";

const Data = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]




export default function TableSort (){

    const [TableData, setTableData] = useState(Data);

    const sortByDate = (e)=>{
        const SortData = [...Data].sort((a,b)=>{
            const datedif = new Date(a.date) - new Date(b.date)
            if (datedif !== 0){
               return  new Date(a.date) - new Date(b.date)
            }else{
                return b.views - a.views
            }
        })

        setTableData(SortData)
    }

    const sortByViews = (e)=>{
        const sortData = [...Data].sort((a,b)=>{
            const datedif = b.views - a.views
            if (datedif !== 0){
               return  datedif
            }else{
                return new Date(a.date) - new Date(b.date)
            }
        })

        setTableData(sortData)
    }

    return(
        <div>
            <h1>Date and Views Table</h1>

            <button type="button" onClick={(e)=>sortByDate(e)} >Sort by Date</button> 
            <button type="button" onClick={(e)=>sortByViews(e)}>Sort by Views</button>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Views</th>
                            <th>Article</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            TableData.map((ele,idx)=>{
                                return(
                                    <tr key={idx}>
                                        <td>{ele.date}</td>
                                        <td>{ele.views}</td>
                                        <td>{ele.article}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};