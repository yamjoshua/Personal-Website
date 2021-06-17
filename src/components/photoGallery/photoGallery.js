import React, { useState  } from "react";
import { Container} from "react-bootstrap";
import Particle from "../Particle";
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import photo1 from "../../Assets/Photos/1.jpg";
import photo2 from "../../Assets/Photos/2.jpg";
import photo3 from "../../Assets/Photos/3.jpg";
import photo4 from "../../Assets/Photos/4.jpg";
import photo5 from "../../Assets/Photos/5.jpg";
import photo6 from "../../Assets/Photos/6.jpg";
import photo7 from "../../Assets/Photos/7.jpg";
import photo8 from "../../Assets/Photos/8.jpg";
import photo9 from "../../Assets/Photos/9.jpg";
import photo10 from "../../Assets/Photos/10.jpg";
import photo11 from "../../Assets/Photos/11.jpg";
import photo12 from "../../Assets/Photos/12.jpg";
import photo13 from "../../Assets/Photos/13.jpg";
import photo14 from "../../Assets/Photos/14.jpg";
import photo15 from "../../Assets/Photos/15.jpg";
import photo16 from "../../Assets/Photos/16.jpg";
import photo17 from "../../Assets/Photos/17.jpg";
import photo18 from "../../Assets/Photos/18.jpg";
import photo19 from "../../Assets/Photos/19.jpg";
import photo20 from "../../Assets/Photos/20.jpg";
import photo21 from "../../Assets/Photos/21.jpg";


var index = 0;

const Gallery = () => {  
  let data = [
    {
      id: 1,
      imgSrc: photo1,
    },
    {
      id: 2,
      imgSrc: photo2,
    },
    {
      id: 3,
      imgSrc: photo3,
    },
    {
      id: 4,
      imgSrc: photo4,
    },
    {
      id: 5,
      imgSrc: photo5,
    },
    {
      id: 6,
      imgSrc: photo6,
    },
    {
      id: 7,
      imgSrc: photo7,
    },
    {
      id: 8,
      imgSrc: photo8,
    },
    {
      id: 9,
      imgSrc: photo9,
    },
    {
      id: 10,
      imgSrc: photo10,
    },
    {
      id: 11,
      imgSrc: photo11,
    },
    {
      id: 12,
      imgSrc: photo12,
    },
    {
      id: 13,
      imgSrc: photo13,
    },
    {
      id: 14,
      imgSrc: photo14,
    },
    {
      id: 15,
      imgSrc: photo15,
    },
    {
      id: 16,
      imgSrc: photo16,
    },
    {
      id: 17,
      imgSrc: photo17,
    },
    {
      id: 18,
      imgSrc: photo18,
    },
    {
      id: 19,
      imgSrc: photo19,
    },
    {
      id: 20,
      imgSrc: photo20,
    },
    {
      id: 21,
      imgSrc: photo21,
    },
    {
      id: 22,
      imgSrc: photo21,
    },
    {
      id: 23,
      imgSrc: photo21,
    },
    {
      id: 24,
      imgSrc: photo21,
    },
    {
      id: 25,
      imgSrc: photo21,
    },
    {
      id: 26,
      imgSrc: photo21,
    }
  ]

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc, picIndex) => {
    setTempImgSrc(imgSrc);
    setModel(true);
    index = picIndex;
  }

  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
        setModel(false);
    }
    if (evt.keyCode === 37) {
        onClickPrevious();
    }
    if (evt.keyCode === 39) {
        onClickNext();
    }
  };

  const onClickNext = () => {
    if (index + 1 === data.length ) {
      setTempImgSrc(data[0].imgSrc);
      index = 0;
    } else {
      setTempImgSrc(data[index + 1].imgSrc);
      index++;
    } 
  }

  const onClickPrevious = () => {
    if (index - 1 === -1 ) {
      setTempImgSrc(data[data.length - 1].imgSrc);
      index = data.length - 1;
    } else {
      setTempImgSrc(data[index - 1].imgSrc);
      index--;
    } 
  }    

  return(
    <>
    <Particle/>
    <Container className = "gallery-heading">
      <div className={model? "model open" : "model"}>
        {window.scrollTo(0, 0)}
        <img src={tempimgSrc} alt="Selected"/>
        <CloseIcon style={{top: 50, right: 50}} onClick={() => setModel(false)} />
        <ArrowForwardIosIcon style={{top: '50%', right: '10%'}} onClick={() => onClickNext()}/>
        <ArrowBackIosIcon style={{top: '50%', left: '10%'}} onClick={() => onClickPrevious()}/>
      </div>

      <div className="gallery">
        {data.map((item, index)=>{ 
          return(
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc, index)}>
              <img src={item.imgSrc} style={{width: '100%'}} alt="Individual"/>
            </div>
          )
        })}
      </div>
    </Container>
    </>
  )
}


function photoGallery() {
  return(
    <>
    <Gallery />
    </> 
  );
}

export default photoGallery;
