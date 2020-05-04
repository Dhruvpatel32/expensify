export  const setTextFilter=(text="")=>({
    type:'setTextFilter',
     text
})
export const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT'
   })
export   const sortBydate=()=>({
       type:'SORT_BY_DATE'
      })
export   const setStartDate=(startdate)=>({
       type:'SELECT_START_DATE',
       startdate
   })
export   const setEndDate=(enddate)=>({
       type:'SELECT_END_DATE',
       enddate
   })