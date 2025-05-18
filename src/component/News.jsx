import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem'; // assuming Card is in the same folder
import Loading from './Loading';


export default function News(props) {
let [articles,Setarticles] = useState([])
let [page, setPage] = useState(1)
let [col, setCol] = useState(4)
let [nextbtn, setnextbtn] = useState(0)
let [pagesize, setpagesize] = useState(6)
let [loading, setloading] = useState(false);
let [country, setCountry] = useState('us');
// let [category, setCategory] = useState();



let fetchapi = async ()=>{
  setloading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&page=${page}&apiKey=ef0069780d584148a96ea5eac4aa7f5a&pagesize=${pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    Setarticles(parsedData.articles || [])
    setnextbtn(parsedData.totalResults || 0);
    setloading(false)
}
useEffect(()=>{
fetchapi();
},[page,props.category])

useEffect(() => {
  setPage(1); // 🔁 Reset to page 1 when category changes
}, [props.category]);


let prevClick = ()=>{
setPage(page - 1)
}
let nextClick = ()=>{
    setPage(page + 1)
}

  useEffect(() => {

      const updateCol = () => {
      if (window.innerWidth <= 768) {
        setCol(12);
      } else if (window.innerWidth <= 992) {
        setCol(6);
      } else {
        setCol(4);
      }
    };

    updateCol(); // Call once on mount
    window.addEventListener('resize', updateCol);

    return () => window.removeEventListener('resize', updateCol);
  }, []);


  return (
    <div>
      <div className='container'>
        <h2 className='my-3'>Top News Headlines (US)</h2>
{  loading &&    < Loading />}
        <div className="row">
          { !loading && articles.map((element) => (
            <div className={`col-md-${col} `} key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 60) : ""}
                heading={element.description ? element.description.slice(0, 100) : ""}
                imageurl={element.urlToImage}
                url={element.url}
                author={element.author}
                publishedate={element.publishedAt}
              />
            </div>
          ))}
        </div>

      {!loading  &&<div className="d-flex justify-content-between my-3">
        <button type="button" className="btn btn-warning" onClick={prevClick} disabled={page <= 1}>
          &larr; Previous
        </button>
        <button type="button" className="btn btn-info" disabled={page >= Math.ceil(nextbtn / pagesize)} onClick={nextClick}>
          Next &rarr;
        </button>
      </div>}
      </div>
    </div>
  );
}
