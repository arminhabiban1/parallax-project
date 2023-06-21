import layerBaseImage from './img/layer-base.png'
import layerMidImage from './img/layer-middle.png'
import layerFrontImage from './img/layer-front.png'
import dungeonImage from './img/dungeon.jpg'
import { useEffect } from 'react'

function App() {
  useEffect(()=>{

window.addEventListener('scroll',()=>{
let scrollY=window.scrollY;
document.documentElement.style.setProperty('--scrollTop',`${scrollY}px`)



})



    
  },[])



  return (
    <>
    <div className="wrapper">
      <div className="content">
        <header className="header-main">
          <div className="layers">
            <div className="layer-head">
              <div className="caption"> Welcome to Paralax Web</div>
              <div className="title"> Dark forest</div>
            </div>
            <div  className="img-layer layer-base" style={{backgroundImage:`url(${layerBaseImage})`}} >
salam
            </div>
            <div className="img-layer layer-mid" style={{backgroundImage:`url(${layerMidImage})`}}>


            </div>
            <div className="img-layer layer-front" style={{backgroundImage:`url(${layerFrontImage})`}}>

              
            </div>

          </div>
        </header>
        <article className='article-main' style={{backgroundImage:`url(${dungeonImage})`}}>
          <div className='m-article-content'>
            <h2 className='m-header'>Story to be continued</h2>
            <p className='m-paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque quas aspernatur, est officia tempore. Dolor harum eius ipsa architecto reprehenderit quas quam, recusandae sint laboriosam sit, quaerat quasi delectus.</p>
          </div>
          <div className='copy'>
            NDD YT
          </div>
        </article>
      </div>
    </div>

    </>
  )
}

export default App;
