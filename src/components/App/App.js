import './App.css';
import { FaPlay, FaStop, FaGithub,FaInstagram, FaLinkedin, FaTwitter, FaQuoteLeft, FaQuoteRight, FaEnvelope } from "react-icons/fa";


function App() {

  const videoID = "n4b8FRUDNZo"; 

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href ="work.html">Work</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        <div className='main'>
          <div className='hero-image'>
            <img alt="3D cubes" src="https://image.canva.com/uhm_pSRdDhB2tanLmYy9XQ%3D%3D/pyv9IxLEVmXCYuI9WCL4Jg%3D%3D.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH25PN7VSL%2F20230508%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230508T032438Z&X-Amz-Expires=43570&X-Amz-Signature=be41e0c29d17db0d7e3174b1ef325b713b969c02eb01c13582c687f249c97e92&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2008%20May%202023%2015%3A30%3A48%20GMT"></img>
          </div>
          <div className="main-title">
            <p>Hi,</p>
            <h1>I'm Sospeter Kedogo</h1>
            <p>You can call me Peter.<br/>I'm a <span>web developer.</span></p>
            <button className='hero-btn'>Let's chat</button>
          </div>
          </div>        
      </header>

      <section className='aboutme'>
        <div className='aboutText'>
          <h2>About Me</h2>
          <p>I'm a web developer currently at The Univeristy of Northampton taking a bachelor's degree in CyberSecurity. I love coding, and creating interesting stuff with my knowledge and skills.</p>
          </div>
          <div className='aboutImg'>
          <img alt="a boy using a laptop" className='aboutmeImage' src="https://image.canva.com/sz_Kffk1HEEXWHosq0P80Q%3D%3D/XpLsbFLMxiE5ALd0FYty7A%3D%3D.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH25PN7VSL%2F20230508%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230508T121614Z&X-Amz-Expires=21630&X-Amz-Signature=1f8ba1f4d13dfc220a1a2389bdbff772d252010c2dff08483f5af59db7ac560f&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2008%20May%202023%2018%3A16%3A44%20GMT"></img>
        </div>
      </section>

      <section>
        <div className='projects'>
          <p>The following are some of the projects I have completed so far...</p>
        </div>

        <div className='calculator'>
          <div className='calcImage'>
            <img src="https://cdn-icons-png.flaticon.com/512/4645/4645203.png" alt="calculator display"></img>
          </div>
          <div className='calcText'>
            <p className='openingtag'>&lt;script&gt;</p>
            <h2>Javascript Calculator</h2>
            <p>Built a calculator that performs basic math operations very fast but more efficiently.</p>
            <p className='closingtag'>&lt;script/&gt;</p>
          </div>
        </div>


        <div className='quotegenerator'>
          <p className='quotemark leftquote'><FaQuoteLeft/></p>
          <div className="quotetext">
            <h2>Quote Generator</h2>
            <p>Built an app that uses an API to fetch quotes about life and displays them </p>
          </div>
          <p className='quotemark rightquote'><FaQuoteRight/></p>
        </div>

        <div className='drumpads'>
          <h2>Drum pads</h2>
          <p>This app has nine pads, each with a unique sound. When you click on either of them, it plays the sound. You can play it in a pattern to make a complete beat sequence.</p>
          <img src="https://m.media-amazon.com/images/I/61W4xdnOeZL.png" alt="drums pad"></img>
          <button>Check it Out!</button>
        </div>
      </section>

      <section className='hobbies'>
        <h2>Besides Work...</h2>
        <div className='cards'>
          <div className='card'>
            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="I love music"></img>
          </div>

          <div className='card'>
            <img src="https://images.unsplash.com/photo-1575975243243-5462a2054ed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="Headphones"></img>
          </div>

          <div className='card'>
            <img src="https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1060&q=80" alt="Spinning vinyl"></img>
          </div>
          
        </div>

        <div className='music-player'>
          <h2>Favourite Songs</h2>
          <div className='songs'>
          <div className='song'>
            <img src="https://upload.wikimedia.org/wikipedia/en/6/60/Firework_cover.png" alt="spinning disc with album icon"></img>
            <p className='title'>Fireworks</p>
            <p className='artist'>Katy Perry</p>

            <button>< FaPlay /></button>
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

        </div>
      </section>

      <section className='gaming'>
      

        <iframe className="video"
          src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&loop=1&playlist=${videoID}&controls=0`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className='content'>
          <h2 >I also enjoy competitive mobile gaming</h2>
        </div>
          
      </section>

      <footer>
        <h2>I do freelance work</h2>
        <p>Have an exciting project where you need some help? <br/>Send me a message and <a href="email">let's chat</a></p>
        <ul>
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
