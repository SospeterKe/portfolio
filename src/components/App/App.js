import './App.css';

function App() {
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

        <img alt="3D cubes" className='hero-image' src="https://image.canva.com/uhm_pSRdDhB2tanLmYy9XQ%3D%3D/pyv9IxLEVmXCYuI9WCL4Jg%3D%3D.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH25PN7VSL%2F20230508%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230508T032438Z&X-Amz-Expires=43570&X-Amz-Signature=be41e0c29d17db0d7e3174b1ef325b713b969c02eb01c13582c687f249c97e92&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2008%20May%202023%2015%3A30%3A48%20GMT"></img>
        
        <div className="main-title">
          <p>Hi,</p>
          <h1>I'm Sospeter Kedogo</h1>
          <p>You can call me Peter.<br/>I'm a <span>web developer.</span></p>
          <button>Let's chat</button>
        </div>        
      </header>

      <section className='aboutme'>
        <h1>About Me</h1>
        <img alt="a boy using a laptop" className='aboutmeImage' src="https://image.canva.com/sz_Kffk1HEEXWHosq0P80Q%3D%3D/XpLsbFLMxiE5ALd0FYty7A%3D%3D.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH25PN7VSL%2F20230508%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230508T121614Z&X-Amz-Expires=21630&X-Amz-Signature=1f8ba1f4d13dfc220a1a2389bdbff772d252010c2dff08483f5af59db7ac560f&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2008%20May%202023%2018%3A16%3A44%20GMT"></img>
        <p>I'm a web developer currently at The Univeristy of Northampton taking a bachelor's degree in CyberSecurity. I love coding, and creating interesting stuff with my knowledge and skills.</p>
        <hr/>
      </section>

      <section>
        <div className='projects'>
          <p>The following are some of the projects I have completed so far...</p>
        </div>

        <div className='calculator'>
          <p className='openingtag'>&lt;script&gt;</p>
          <h1>Javascript Calculator</h1>
          <p>Built a calculator that performs basic math operations very fast but more efficiently.</p>
          <p className='closingtag'>&lt;script/&gt;</p>
          <img alt="calculator display" className='calcimgage'></img>
        </div>

        <div className='quotegenerator'>
          <p>"</p>
          <h1>Quote Generator</h1>
          <p>Built an app that uses an API to fetch quotes about life and displays them </p>
          <p>"</p>
        </div>

        <div className='drumpads'>
          <h1>Drum pads</h1>
          <p>This app has nine pads, each with a unique sound. When you click on either of them, it plays the sound. You can play it in a pattern to make a complete beat sequence.</p>
          <button>Check it Out!</button>
        </div>
      </section>

      <section>
        <h1>Besides Work...</h1>
        <div className='imageSlider'>
          <img alt="I love music"></img>
          <img alt="Headphones"></img>
          <img alt="Spinning vinyl"></img>
        </div>

        <div>
          <h2>Favourite Songs</h2>
          <div>
            <img alt="spinning disc with album icon"></img>
            <p>Fireworks - Katy Perry</p>
            <button>play</button>
            <button>stop</button>
          </div>
          <div>
            <img alt="spinning disc with album icon"></img>
            <p>I like it - Cardi B(ft. other artists)</p>
            <button>play</button>
            <button>stop</button>
          </div>
          <div>
            <img alt="spinning disc with album icon"></img>
            <p>Dynamite - BTS</p>
            <button>play</button>
            <button>stop</button>
          </div>
          <div>
            <img alt="spinning disc with album icon"></img>
            <p>Walk it talk it - Migos</p>
            <button>play</button>
            <button>stop</button>
          </div>

        </div>
      </section>

      <section>
        <h1>I also enjoy competitive mobile gaming</h1>
      </section>

      <footer>
        <h1>I do freelance work</h1>
        <p>Have an exciting project where you need some help? <br/>Send me a message and <a href="email">let's chat</a></p>
        <ul>
          <li><a href="instagram.html">Instagram</a></li>
          <li><a href="twitter.html">twitter</a></li>
          <li><a href="email.html">Email</a></li>
          <li><a href="github.html">github</a></li>
          <li><a href="linkedin">linkedin</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
