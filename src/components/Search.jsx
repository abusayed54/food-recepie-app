import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate();
    const submiHandler = (e) => {
        e.preventDefault()
        navigate('/searched/' + input)
    }
    return (
        <FormStyle onSubmit={submiHandler}>

            <div>
                {/* <FaSearch></FaSearch> */}
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    value={input} />
                <h2>{input}</h2>
            </div>
        </FormStyle>
    );
};

const FormStyle = styled.form`
margin: 0rem auto;
position: relative;
width: 100%;
div{ 
    width: 100%; 
    position: relative;
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        border: none;
        border-radius: 1rem;
        outline: none;
        height: 3rem;
        width: 100%;
        margin: 1rem 3rem;
        padding-left: 10px;
    
        svg{
            position: absolute;
            top: 50%;
            left: 0%;
            transform: translate(100%, -50%)
            color: white; 
        }
    }
}

`

export default Search;