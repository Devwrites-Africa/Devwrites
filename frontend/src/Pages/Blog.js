import React from "react";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import {FaAngleDown } from "react-icons/fa";
import "./Blog.css";


const Blog =()=>{
    return  (
<>
<div className="Blog-page">
<Navbar/>
<div className="blog-container">
    
    {/* begining of landing-section */}
<div className="landing-section">
<div className="blog-title">
    <div className="blog-heading">
    <h1>Blogs</h1>
    <div className="underline"></div>
    </div>
    
    <img src="../images/vector-17.png" alt="blog-photos" className="blog-vector"/>



</div>
</div>

    {/* end of landing-section */}


{/*begining of  blogs section */}

<div className="blogs-section">
<form className="form-control">
        <input type='search' className="search-bar" placeholder="Search">
        </input>

    </form>
    <div className="title-container">
        <h1>Latest</h1>
        <p>view all <span><FaAngleDown/></span></p>
    </div>
</div>
<div className="blogs">
<article className="single-blog">
<img src="../images/blog-photo-3.png" alt="blog-photos" className="blog-photos"/>
<div className="blog-content">
<p className="blog-tag">UI/UX</p>
<h3>Lorem Ipsum Text</h3>
<p className="blog-paragraph">Nihil, aperiam, ad molestiae ut enim reprehenderit
     rem repudiandae ducimus dolorum obcaecati rerum accusamus
      provident atque eos cum. Reiciendis, modi, sint, vel, 
      eligendi veniam 
      esse qui quasi voluptas 
</p>
<h4 className="last-text">November 9th 2022, 10 mins read</h4>
</div>

</article>
<article className="single-blog">
<img src="../images/blog-photo-1.png" alt="blog-photos" className="blog-photos"/>
<div className="blog-content">
<p className="blog-tag">ARTIFICIAL INTELLIGENCE</p>
<h3>Lorem Ipsum Text</h3>
<p className="blog-paragraph">Nihil, aperiam, ad molestiae ut enim reprehenderit
     rem repudiandae ducimus dolorum obcaecati rerum accusamus
      provident atque eos cum. Reiciendis, modi, sint, vel, 
      eligendi veniam 
      esse qui quasi voluptas 
</p>
<h4 className="last-text">November 9th 2022, 10 mins read</h4>
</div>
</article>

<article className="single-blog">
<img src="../images/blog-photo-2.png" alt="blog-photos" className="blog-photos"/>
<div className="blog-content">
<p className="blog-tag">TYPING</p>
<h3>Lorem Ipsum Text</h3>
<p className="blog-paragraph">Nihil, aperiam, ad molestiae ut enim reprehenderit
     rem repudiandae ducimus dolorum obcaecati rerum accusamus
      provident atque eos cum. Reiciendis, modi, sint, vel, 
      eligendi veniam 
      esse qui quasi voluptas 
</p>
<h4 className="last-text">November 9th 2022, 10 mins read</h4>
</div>
</article>

<article className="single-blog">
<img src="../images/blog-photo-4.png" alt="blog-photos" className="blog-photos"/>
<div className="blog-content">
<p className="blog-tag">APP DEVELOPMENT</p>
<h3>Lorem Ipsum Text</h3>
<p className="blog-paragraph">Nihil, aperiam, ad molestiae ut enim reprehenderit
     rem repudiandae ducimus dolorum obcaecati rerum accusamus
      provident atque eos cum. Reiciendis, modi, sint, vel, 
      eligendi veniam 
      esse qui quasi voluptas 
</p>
<h4 className="last-text">November 9th 2022, 10 mins read</h4>
</div>

</article>
    </div>
{/* end of blogs section */}

{/* begining of top blogs section */}

<div className="top-blogs-section">
<h1 className="title">Top Blogs</h1>
<div className="col-2-container">
<article className="top-blogs-header" >
    <h2>Branding</h2>
    <h1>Lorem Ipsum Text</h1>
    <p>Nihil, aperiam, 
        ad molestiae ut enim reprehenderit 
        rem repudiandae ducimus dolorum obcaecati rerum accusamus 
        provident atque eos cum. Reiciendis, modi, 
        sint, vel, eligendi veniam esse qui quasi voluptas 
</p>
<footer>November 9th 2022, 10 mins read</footer>
</article>

    <div className="top-blogs-container">
    <article className="single-top-blog">
<img src="../images/top-blog-1.png" alt="blog-photos" className="blog-photos"/>
<h2>ILLUSTRATION</h2>
<h3>Lorem Ipsum Text</h3>
<p>Nihil, aperiam, ad molestiae ut enim reprehenderit
     rem repudiandae ducimus dolorum obcaecati rerum accusamus
      provident atque eos cum. Reiciendis, modi, sint, vel, 
      eligendi veniam 
      esse qui quasi voluptas 
</p>
<h4 className="last-text">November 9th 2022, 10 mins read</h4>


</article>
<article className="single-top-blog">
<img src="../images/top-blog-2.png" alt="blog-photos" className="blog-photos"/>
<h2>PRODUCT DESIGN</h2>
<h3>Lorem Ipsum Text</h3>
<p>Nihil, aperiam, ad molestiae ut enim reprehenderit
     rem repudiandae ducimus dolorum obcaecati rerum accusamus
      provident atque eos cum. Reiciendis, modi, sint, vel, 
      eligendi veniam 
      esse qui quasi voluptas 
</p>
<h4 className="last-text">November 9th 2022, 10 mins read</h4>


</article>
<article className="single-top-blog">
<img src="../images/top-blog-3.png" alt="blog-photos" className="blog-photos"/>
<h2>SOFTWARE ENGINEERING</h2>

<h3>Lorem Ipsum Text</h3>
<p>Nihil, aperiam, ad molestiae ut enim reprehenderit
     rem repudiandae ducimus dolorum obcaecati rerum accusamus
      provident atque eos cum. Reiciendis, modi, sint, vel, 
      eligendi veniam 
      esse qui quasi voluptas 
</p>
<h4 className="last-text">November 9th 2022, 10 mins read</h4>


</article>
<article className="single-top-blog">
<img src="../images/top-blog-4.png" alt="blog-photos" className="blog-photos"/>
<h2>WEB DEVELOPMENT</h2>

<h3>Lorem Ipsum Text</h3>
<p>Nihil, aperiam, ad molestiae ut enim reprehenderit
     rem repudiandae ducimus dolorum obcaecati rerum accusamus
      provident atque eos cum. Reiciendis, modi, sint, vel, 
      eligendi veniam 
      esse qui quasi voluptas 
</p>
<h4 className="last-text">November 9th 2022, 10 mins read</h4>


</article>
    </div>
</div>

</div>

{/* end of top blogs section */}

{/* begining of popular blogs section */}

<div className="popular-blogs-section">
<h1 className="title">Popular</h1>
<div className="popular-container">
<article className="single-popular popular-1" >
    <h2>Branding</h2>
    <h1>Lorem Ipsum Text</h1>
    <p>Nihil, aperiam, 
        ad molestiae ut enim reprehenderit 
        rem repudiandae ducimus dolorum obcaecati rerum accusamus 
        provident atque eos cum. Reiciendis, modi, 
        sint, vel, eligendi veniam esse qui quasi voluptas 
</p>
<footer>November 9th 2022, 10 mins read</footer>
</article>
<article className="single-popular popular-2" >
    <h2>Branding</h2>
    <h1>Lorem Ipsum Text</h1>
    <p>Nihil, aperiam, 
        ad molestiae ut enim reprehenderit 
        rem repudiandae ducimus dolorum obcaecati rerum accusamus 
        provident atque eos cum. Reiciendis, modi, 
        sint, vel, eligendi veniam esse qui quasi voluptas 
</p>
<footer>November 9th 2022, 10 mins read</footer>
</article>
<article className="single-popular popular-3" >
    <h2>Branding</h2>
    <h1>Lorem Ipsum Text</h1>
    <p>Nihil, aperiam, 
        ad molestiae ut enim reprehenderit 
        rem repudiandae ducimus dolorum obcaecati rerum accusamus 
        provident atque eos cum. Reiciendis, modi, 
        sint, vel, eligendi veniam esse qui quasi voluptas 
</p>
<footer>November 9th 2022, 10 mins read</footer>
</article>


</div>
<div className="popular-container">
<article className="single-popular popular-3" >
    <h2>Branding</h2>
    <h1>Lorem Ipsum Text</h1>
    <p>Nihil, aperiam, 
        ad molestiae ut enim reprehenderit 
        rem repudiandae ducimus dolorum obcaecati rerum accusamus 
        provident atque eos cum. Reiciendis, modi, 
        sint, vel, eligendi veniam esse qui quasi voluptas 
</p>
<footer>November 9th 2022, 10 mins read</footer>
</article>
<article className="single-popular popular-2" >
    <h2>Branding</h2>
    <h1>Lorem Ipsum Text</h1>
    <p>Nihil, aperiam, 
        ad molestiae ut enim reprehenderit 
        rem repudiandae ducimus dolorum obcaecati rerum accusamus 
        provident atque eos cum. Reiciendis, modi, 
        sint, vel, eligendi veniam esse qui quasi voluptas 
</p>
<footer>November 9th 2022, 10 mins read</footer>
</article>
<article className="single-popular popular-1" >
    <h2>Branding</h2>
    <h1>Lorem Ipsum Text</h1>
    <p>Nihil, aperiam, 
        ad molestiae ut enim reprehenderit 
        rem repudiandae ducimus dolorum obcaecati rerum accusamus 
        provident atque eos cum. Reiciendis, modi, 
        sint, vel, eligendi veniam esse qui quasi voluptas 
</p>
<footer>November 9th 2022, 10 mins read</footer>
</article>


</div>

</div>

{/* end of popular blogs section */}

{/* begining of tags section */}

<div className="blogs-tag-section">
<h1>Tags </h1>

<div className='tags-container'>
<div className="tag tag-1">BUSINESS</div>
<div className="tag tag-2">SOFTWARE ENGINEERING</div>
<div className="tag tag-3">TYPING</div>
<div className="tag tag-4">BRANDING</div>
<div className="tag tag-5">UI/UX DESIGN</div>
<div className="tag tag-6">ILLUSTRATION</div>
<div className="tag tag-7">ARTIFICIAL INTELLIGENCE</div>
<div className="tag tag-8">NETWORKING</div>
<div className="tag tag-12">IDEAS</div>
<div className="tag tag-9">TECHNOLOGY</div>
<div className="tag tag-10">MOTIVATION</div>
<div className="tag tag-11">APP DEVELOPMENT</div>
<div className="tag tag-13">SOCIAL MEDIA</div>
<div className="tag tag-14">DESIGN </div>
<div className="tag tag-14">DESIGN & PROTOTYPING </div>
</div>
<div className="tag-photos">
    <img  className="tag-photo" src="../images/tag-photo.png"/>
<div className="tag-p"><p>We hope this image inspires your 
    creativity the way it inspires us at Devwrites Africa</p></div>
    <p className="tag-p1">Don't want to miss anything?</p>
    <p className="tag-p2">Get weekly updates on the latest blogs, programs and tips right in your mailbox.</p>

    <form className="tag-form">
        <input type='email' placeholder='Email'></input>
        <button  type="submit">Submit</button>
    </form>

</div>
</div>

{/* end of tags section */}

</div>


{/*
    <div className="blog-section">
<DividerComponent/>
<header className="header-content">
 <div className="content">
 <Typography
variant="h1"
sx={{
 fontweight: 800,
fontSize: "2rem",
 color: "#F5F5F5",
paddingLeft: { sm: "2.5rem", xs: 0 },
fontFamily: "Inter",
 textAlign: "center",
}}
 >
    Blog
 </Typography>                          
  </div>
</header>
<DividerComponent/>

</div>
<div className="section-center">
    <form className="form-control">
        <input type='search' className="search-bar" placeholder="Search">
        </input>

    </form>
    <div className="blogs">
<article className="single-blog">
<img src="../images/blog-image.png" alt="blog-photos" className="blog-photos"/>
<h3>Lorem Ipsum Text</h3>
<p>Nihil, aperiam, ad molestiae ut enim reprehenderit
     rem repudiandae ducimus dolorum obcaecati rerum accusamus
      provident atque eos cum. Reiciendis, modi, sint, vel, 
      eligendi veniam 
      esse qui quasi voluptas 
</p>
<h4 className="last-text">November 9th 2022, 10 mins read</h4>

</article>
<article className="single-blog">
<img src="../images/blog-image.png" alt="blog-photos" className="blog-photos"/>
<h3>Lorem Ipsum Text</h3>
<p>Nihil, aperiam, ad molestiae ut enim reprehenderit
     rem repudiandae ducimus dolorum obcaecati rerum accusamus
      provident atque eos cum. Reiciendis, modi, sint, vel, 
      eligendi veniam 
      esse qui quasi voluptas 
</p>
<h4 className="last-text">November 9th 2022, 10 mins read</h4>


</article>
<article className="single-blog">
<img src="../images/blog-image.png" alt="blog-photos" className="blog-photos"/>
<h3>Lorem Ipsum Text</h3>
<p>Nihil, aperiam, ad molestiae ut enim reprehenderit
     rem repudiandae ducimus dolorum obcaecati rerum accusamus
      provident atque eos cum. Reiciendis, modi, sint, vel, 
      eligendi veniam 
      esse qui quasi voluptas 
</p>
<h4 className="last-text">November 9th 2022, 10 mins read</h4>

</article>
<article className="single-blog">
<img src="../images/blog-image.png" alt="blog-photos" className="blog-photos"/>
<h3>Lorem Ipsum Text</h3>
<p>Nihil, aperiam, ad molestiae ut enim reprehenderit
     rem repudiandae ducimus dolorum obcaecati rerum accusamus
      provident atque eos cum. Reiciendis, modi, sint, vel, 
      eligendi veniam 
      esse qui quasi voluptas 
</p>
<h4 className="last-text">November 9th 2022, 10 mins read</h4>

</article>
    </div>

</div> */
}

<Footer/>
</div>


</>
    )
}

export default Blog;