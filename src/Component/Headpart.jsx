import React from 'react'

const Headpart = () => {

    const headContainer={
        height:'400px',
        backgroundColor:'green',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        color:'white'
    }
    const heading={
        fontSize:'3rem'
    }

    const btn={
        width:'fit-content',
        backgroundColor:'black',
        color:'white'
    }

  return (
    <div style={headContainer}>
        <h1 style={heading}>Dramatically Engage</h1>
        <h3>Objectively innovate empowered manufactured products whereas parallel platforms.</h3>
        <button style={btn}>Engage Now</button>
    </div>
  )
}

export default Headpart