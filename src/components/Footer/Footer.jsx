import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
         <footer>
      <div class="wrapper">
        <div class="block_1">
          <a href=""><img src="./images/logo.svg" alt="" /></a>
          <div class="text_politics">
            <p>© Все права защищены</p>
            <p class="paddding">Политика конфиденциальности</p>
            <p>Публичная оферта</p>
          </div>
        </div>
        <div class="footer_links">
          <p>Home</p>
          <div class="clothes-links">
            <p>Product</p>
          </div>
          <p>Price</p>
        </div>
        <div class="block_2">
          <p>+7 (495) 823-54-12</p>
          <p>LookEnjoy@mail.com</p>
          <div class="social">
            <img src="https://w7.pngwing.com/pngs/322/394/png-transparent-logo-computer-icons-instagram-logo-miscellaneous-smile-screenshot.png" alt="icon" />
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111819.png" alt="icon" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXaOeEoicyCBt-lHs6f-R3aS5mLmdlqs8bLw&usqp=CAU" alt="icon" />
          </div>
          <img class="img_master" src="./images/visa-mastercard 1.svg" alt="" />
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer