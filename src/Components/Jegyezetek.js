import React from 'react'

export default function Jegyezetek() {
  return (
    <form>
        <div className="blog-container">
      <div className="section">
        <h2>Piros-Fekete Fa</h2>
        <p>[Itt lenne a piros-fekete fa szövege]</p>
        <img src="path/to/piros_fekete_fa_image.png" alt="Piros-Fekete Fa" />
      </div>

      <div className="section">
        <h2>Mester Tétel</h2>
        <p>[Itt lenne a mester tétel szövege]</p>
        <img src="path/to/mester_tetel_image.png" alt="Mester Tétel" />
      </div>

      {/* További szakaszok és képek... */}

    </div>
    </form>
  )
}
