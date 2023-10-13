"use client"
import React from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'


import Text from '@/components/text/text'
import { Input } from '@/components/input/input'
import { Box } from '@chakra-ui/react'


function Signup() {

    const router = useRouter()

    function handleSubmit(e:any){
        e.preventDefault()
        router.push("/location")
    }

  return (
    <>
        <div style={fluid}>
            <div style={container}>
                <Text 
                    text='Log in' 
                    color='#080E11'
                    fwt={400}
                    ftz='32px'
                />

                <Box mt={"10PX"} >
                    <Text 
                        text='Welcome back' 
                        color='#080E11'
                        fwt={400}
                        ftz='12px'
                    />
                </Box>
            
                <form style={formStyle} onSubmit={handleSubmit} action="">

                    <Input placeHolder='Email' type='email'/>
                    <Input placeHolder='Password' type='password' />
                    <div style={buttonParent}>
                        <button style={buttonStyle}>Log in</button>
                    </div>
                    <div style={smallCont}>
                        <small style={small}>Don't have an account? {' '}
                        <Link style={link} href={"/signup"} >Sign up</Link> </small>
                    </div>
                    <div style={smallCont}>
                        <small style={small}>Forgot password?</small>
                    </div>


                </form>
            </div>
        </div>
    </>
  )
}


const formStyle = {
    display: "block",
    margin: "auto",
}

const link ={
    color: "#264653",
    textDecoration:"none",
    fontWeight:"600"
}

const buttonStyle ={
    maxWidth: "342px",
    width:"98%",
    height:"44px",
    paddingInline: "13px",
    margin:"auto",
    background: "#E76F51",
    fontSize:"16px",
    color: "white",
    border: "0",
    outline: 0,
    borderRadius: "8px",
    marginTop:"2em"
}

const buttonParent = {
    width: "100%",
}

const container = {
    marginTop:"30px",
    width:"90%"
}

const small = {
    color: "#264653",
    fontSize :"8px",
    fontFamily: 'Poppins',
}

const smallCont={
    width: "312px",
    display :"flex",
    justifyContent :"flex-end",
    marginTop:"8px",
    marginRight: "16px",
}

const fluid ={
    display: "flex",
    justifyContent :"center",
    alignItems: "center"
}



export default Signup