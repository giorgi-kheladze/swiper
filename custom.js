class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer class="footer">
        <div class="register"></div>

        <div class="navbar">
            <ul class="navlist">
                <li><a href="#">Home</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul class="social">
                <li><a href="#"><i class='bx bxl-facebook-circle'></i></a></li>
                <li><a href="#"><i class='bx bxl-twitter' ></i></a></li>
                <li><a href="#"><i class='bx bxl-instagram' ></i></a></li>
                <li><a href="#"><i class='bx bxl-youtube' ></i></a></li>
            </ul>
        </div>

        <div class="line"></div>

        <div class="foot">
            <p>2022 Monito. All rigths reserved.</p>
            <div class="logo">
                <img src="">
                <p>Pets for Best</p>
            </div>
            <div>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define("my-footer", MyFooter);