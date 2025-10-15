import styled from 'styled-components'

type ContainerProps = {
    done:boolean
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    label {
        color: #ccc;
        text-decoration: ${props => props.done ? 'line-through' : 'initial'};
    }

    input {
        height: 25px;
        width: 25px;
        margin-right: 10px;
        
    }
`