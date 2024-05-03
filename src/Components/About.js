import React from 'react'

export function About() {
  return (

    <div className='kontakti'>
            <h2>Kontakt Forma</h2>

      <div className='aboutcountainer'>
      <div className='about'>
        <form action='#'>
          <input type='text' name="Emri" placeholder='Emaili'></input>
          <br />
          <input type='text' name='subjekti' placeholder='Subjekti'></input>
          
          <br />
          <textarea name="Mesazhi" id="Mesazhi" cols="30" rows="10" placeholder="Mesazhi"></textarea>
        </form>
        <br />
        <button>Dergo</button>
      </div>
      <div className='lokacioni'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1429.6492103852677!2d21.463394520469855!3d42.46854085788336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb97ea7aaca737404!2zNDLCsDI4JzA1LjEiTiAyMcKwMjcnNTEuMiJF!5e0!3m2!1sen!2sus!4v1651931138807!5m2!1sen!2sus"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <hr  style={{filter:'blur(3px)'}}/>
    </div>
    
    
    


  )
}
