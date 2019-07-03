import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImg() {
  document.body.style.backgroundImage = `url(${_is.img})`

}
export default class ImageController {
  constructor() {
    _is.addSubscriber('img', drawImg)
    _is.getImg()
  }
}
