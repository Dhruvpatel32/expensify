import moment from 'moment';

export default (expense,{text,sortBy,startDate,endDate}={})=>{
    return expense.filter((expenses)=>{
      const createdAtMoment=moment(expenses.createdAt);
      const startdateMatch= startDate?startDate.isSameOrBefore(createdAtMoment,'day'):true;
      const enddatematch=endDate?endDate.isSameOrAfter(createdAtMoment,'day'):true;
      const textMatch=expenses.description.toLowerCase().includes(text.toLowerCase());
      return textMatch && startdateMatch&&enddatematch;
    }).sort((a,b)=>{
      if(sortBy==='date')
      {
          return a.createdAt<b.createdAt?1:-1;
      }
      else if(sortBy==='amount')
      {
          return a.amount<b.amount?1:-1;
      }
    })
}
 