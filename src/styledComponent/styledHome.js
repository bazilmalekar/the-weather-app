import styled from "styled-components";

export const StyledHome = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;    
    flex-direction: column;
    align-items: center;
    background-image: url("images/background.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: rgba(0,0,0,0.4);
    background-blend-mode: multiply;           
`

export const HomeContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 250ms; 
    input{
        margin: 8rem 0 2rem;
        width: 60%;
        padding: 0.5rem 1rem;
        border: none;
        outline: none;
        border-radius: 5rem;
        &:focus{
            outline: 1px solid #fff;
        }
    }
    .nameDiv{
        height: 2rem;
        color: #fff;
        margin: 8rem 0 2rem;
    }
    @media(max-width: 786px){
        width: 90%;
        input{     
            margin: 4rem 0 2rem;
            width: 100%;
        }
        .nameDiv{
            margin: 4rem 0 2rem;
        }
    }
`

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    padding: 1rem 0;
    background-color: rgba(0,0,0, 0.8);
    color: #fff;    
    border-radius: 1rem;
    position: relative;
    .set_ico{
        display: inline-block;
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        cursor: pointer;
        transition: all 0.25s;
        .set_ico_i:active{
            transform: rotate(30deg);
        }
    }
    .set_div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 4.5rem;
        height: 4rem;
        background-color: rgba(0,0,0, 0.8);
        position: absolute;
        top: -4.5rem;
        right: 1rem;
        border-radius: 5px;
        color: #fff;
        padding: 0.2rem;
        .set_div_chr{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.1rem;
        }
    }
    .min_max_temp{
        margin: 1rem 0;
    }
    .temp_info{
        display: flex;
        flex-direction: row;
        align-items: end;
        gap: 1rem;                    
        h1{
            font-size: 5rem;
            font-weight: 200;
        }  
        img{
            width: 5.5rem;
            height: 5.5rem;
            margin-bottom: -0.4rem;
        }                  
    }
    @media(max-width: 786px){
        width: 100%;
    }
`

