import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg" alt="Second slide" height="400px" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/706b9474134343.5c239806af449.jpg" alt="First slide" height="400px" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="https://wallpapers.com/images/hd/fantastic-beasts-and-where-to-find-them-horizontal-poster-86utad5c6nr65k54.jpg" alt="Third slide" height="400px" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
