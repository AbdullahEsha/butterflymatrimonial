import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const ButterflyGallery = () => {
  const [imageData, setImageData] = useState([])

  const { id } = useParams()

  useEffect(() => {
    getImageData()
    return () => {
      //console.log("removing...", e);
    }
  }, [])
  const getImageData = async () => {
    fetch(`http://localhost:8000/api/get/gallery-image/${id}`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('vul')
        } else {
          setImageData(data)
        }
      })
      .catch((err) => {
        console.log('pro erro', err)
      })
  }
  console.log(imageData)
  return (
    <>
      <div className="cv-bank-butterfly-outside">
        <Container className="cv-bank-butterfly">
          <div className="row">
            {imageData.map((elem) => (
              <div className="col-sm-12 col-md-3">
                <div className="gallery-image">
                  <img src={`http://localhost:8000/${elem.imageFill}`} alt="" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}

export default ButterflyGallery
