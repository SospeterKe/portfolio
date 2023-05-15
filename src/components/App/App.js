import './App.css';
import { FaPlay, FaStop, FaGithub,FaInstagram, FaLinkedin, FaTwitter, FaQuoteLeft, FaQuoteRight, FaEnvelope, FaBars,FaTimes } from "react-icons/fa";


function App() {

  const videoID = "n4b8FRUDNZo"; 


  const handleCloseClick = () => {
    document.getElementById("nav").style.height = "0%";
    if(window.innerWidth < 738){
      document.getElementById("open").style.display = "block";
    }

    
  }

  const handleOpenClick = () => {
    document.getElementById("nav").style.height = "100%";
    document.getElementById("open").style.display = "none";
    
  }

  const audio = document.getElementById("myaudio1");
  const playbutton = document.getElementById("playbutton1");

  playbutton.addEventListener("click", function(){
    audio.play();
  })

  return (
    <div className="App">
      <header>
      <button className='open' id='open' onClick={handleOpenClick}><FaBars/></button>
        <nav className="navbar" id="nav">
        <button className='close' id='close' onClick={handleCloseClick}><FaTimes /></button>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href ="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <main className='main'>
          <div className='hero-image'>
            <img src="https://static.vecteezy.com/system/resources/previews/008/878/184/non_2x/icosahedron-geometric-shape-3d-illustration-free-png.png" alt="Icosahedron geometric shape 3D illustration" ></img>
          </div>
          <div className="main-title">
            <p>Hi,</p>
            <h1>I'm Sospeter Kedogo</h1>
            <p>I love crafting beautiful websites using HTML, CSS , JavaScript, and React.</p>
            <button className='hero-btn'>Let's Chat</button>
          </div>
          </main>        
      </header>

      <section id='about'  className='aboutme'>
          <h2>About Me</h2>
          <p>As a web developer and Cybersecurity student at the University of Northampton, I'm fueled by my passion for coding and creating fascinating projects that showcase my skills. I have a broad knowledge base, especially in web design, as well as SEO and blog writing.</p><p>My love for technology dates back to my childhood, where I spent countless hours tinkering with a Windows XP computer and exploring the possibilities of what it could do. Since then, I've been pursuing my career in tech with a strong sense of curiosity and a drive to push myself to new heights.</p><p>Today, I continue to explore innovative ways to enhance user experiences and stay up-to-date with cutting-edge technologies. I'm excited about the future of web development and cybersecurity, and I'm dedicated to making a significant impact with my expertise and passion.</p>
      </section>

      <section >
        <div className='projects'>
          <p>Behold, the fruits of my labor! Feast your eyes on some of the incredible projects I've completed so far.</p>
        </div>

        <div className='calculator' id='projects'>
          <div className='calcText'>
            <h2>Javascript Calculator</h2>
            <p>My calculator is a simple yet powerful tool for performing basic math functions such as addition, subtraction, multiplication, and division. It has a user-friendly interface and a large display that shows the current calculation and final result in real-time.</p>
          </div>
          <div className='calcImage'>
            <img src="https://cdn-icons-png.flaticon.com/512/4645/4645203.png" alt="calculator display"></img>
          </div>
        </div>


        <div className='quotegenerator'>
          <p className='quotemark leftquote'><FaQuoteLeft/></p>
          <div className="quotetext">
            <h2>Quote Generator</h2>
            <p>I built an app that fetches inspiring quotes about life using an API. The app has a simple and user-friendly interface that displays quotes in a visually appealing format. It's perfect for anyone who needs a little motivation and inspiration to help them stay focused and achieve their goals. </p>
          </div>
          <p className='quotemark rightquote'><FaQuoteRight/></p>
        </div>

        <div className='drumpads'>
          <h2>Drum pads</h2>
          <p>This app features nine pads, each with a unique sound that can be played with a click. Users can create a complete beat sequence by playing the sounds in a pattern. It's perfect for anyone who wants to explore their musical abilities and create amazing beats and sounds.</p>
          <img src="https://m.media-amazon.com/images/I/61W4xdnOeZL.png" alt="drums pad"></img>
          <button>Check it Out!</button>
        </div>
      </section>

      <section className='hobbies'>
        <h2>My Life Beyond Work</h2>
        <p>When I'm not coding, I love to immerse myself in music. Here are some of my all-time favorite tunes</p>

        <div className='songs'>
          <div className='song'>
            <img src="https://upload.wikimedia.org/wikipedia/en/6/60/Firework_cover.png" alt="spinning disc with album icon"></img>
            <p className='title'>Fireworks</p>
            <p className='artist'>Katy Perry</p>
            <button id='playbutton1'>< FaPlay /></button>
            <button ><FaStop/></button>
          </div>

          <div className='song'>
            <img src="https://upload.wikimedia.org/wikipedia/en/8/82/Cardi_B%2C_Bad_Bunny_and_J_Balvin_-_I_Like_It_%28Single_Cover%29.png" alt="spinning disc with album icon"></img>
            <p className='title'>I like it</p>
            <p className='artist'>Cardi B ft. J.Balvin & Bad Bunny</p>
            <button >< FaPlay /></button>
            <button><FaStop/></button>
          </div>

          <div className='song'>
            <img src="https://assets.teenvogue.com/photos/5f340b70d120ffde6de633c8/1:1/w_1461,h_1461,c_limit/Dynamite_GroupPoster-A_FIN_0812.jpg" alt="spinning disc with album icon"></img>
            <p className='title'>Dynamite</p>
            <p className='artist'>BTS</p>
            <button>< FaPlay /></button>
            <button ><FaStop/></button>
          </div>

          <div className='song'>
            <img src="https://upload.wikimedia.org/wikipedia/en/0/0e/Migos_-_Walk_It_Talk_It.jpg" alt="spinning disc with album icon"></img>
            <p className='title'>Walk it talk it</p>
            <p className='artist'>Migos</p>
            <button >< FaPlay/></button>
            <button ><FaStop /></button>
          </div>

        </div>
      </section>

      <section className='gaming'>
      

        <iframe className="video" title="callofduty"
          src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&loop=1&playlist=${videoID}&controls=0`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className='content'>
          <h2>Thriving in the world of competitive mobile gaming is my guilty pleasure.</h2>
        </div>
          
      </section>

      <footer>
        <h2>Ready to Bring Your Vision to Life?</h2>
        <p>Let's collaborate and create something amazing together. Reach out today and <a href="email" className='chatlink'>let's chat!</a></p>
        <ul id='contact'>
          <li><a href="instagram.html"><FaInstagram/></a></li>
          <li><a href="twitter.html"><FaTwitter/></a></li>
          <li><a href="email.html"><FaEnvelope/></a></li>
          <li><a href="github.html"><FaGithub/></a></li>
          <li><a href="linkedin"><FaLinkedin/></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
