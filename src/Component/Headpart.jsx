import React from 'react'

const Headpart = () => {

    const headContainer={
        height:'400px',
        backgroundColor:'#9acd32',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        color:'white'
    }
    const heading={
        color:'#adff2f',
        fontSize:'3rem'
    }

    const btn={
        width:'fit-content',
        borderRadius:'5px',
        backgroundColor:'#337ab7',
        color:'white',
        padding:'3px',
        fontSize:'2rem'

    }

  return (
    <div style={headContainer}>
        <h1 style={heading}>Dramatically Engage</h1>
        <h3 style={{color:'#adff2f'}}>Objectively innovate empowered manufactured products whereas parallel platforms.</h3>
        <button style={btn}>Engage Now</button>
    </div>
  )
}

export default Headpart