// App.js
import React, { Component } from 'react';
import styled from 'styled-components';
class Collatz extends Component { constructor(props)
    {
    super(props)
     let x = this.props.number;
     let outputArr = [x]
    while (typeof x == 'number' && x !== 1) {
        if ((x % 2) === 1) { 
                x = 3*x + 1;
        } 
        else {
            x = x/2;
        };
             outputArr.push(x); 
            };
            this.outputArr = outputArr;
        }
             render() {
                 const { number } = this.props;
                 const outputArr = this.outputArr;
                 return( 
                <div className="Collatz">
                     <h2>Collatz Sequence for {number}</h2>
                    <ul>{
                     outputArr.map((x,ind)=>{ return <SpecialListItem key = {ind} > {x} 
                     </SpecialListItem>})
                     }
                     </ul> 
                </div>
            );
            }
    }
const GridDiv = styled.div`
        display:grid;
        grid-template-columns: 30% 70%
        grid-template-rows: auto;
        grid-gap: 10px
        background-color: #eee
        color: black;
        margin:20px;
`;

const LeftColumn = styled.div`
        grid-column:1;
        margin: 0.8em;
`;

const RightColumn = styled.div`
        grid-column:2;
        margin: 0.8em;

`;

const EmphaticPar = styled.p`
        font-style:oblique;
`;

const VeryEmphaticPar = styled(EmphaticPar)` font-size: 150%;
`;

const SpecialListItem = styled.li`
        font-weight: bold;
        font-size: 90%
        padding:2px
        list-stle-type: ${props => props.listStyleType || "square"};
`;

class App extends Component { 
    render() {
        const number = 17; 
        const wikilink ='https://en.wikipedia.org/wiki/Collatz_conjecture';
        return (
            <GridDiv>
            <LeftColumn>
            <h1>Collatz Conjecture</h1>
                    <p>The <a href={wikilink}>Collatz Conjecture</a>&nbsp;
                    states that for any positive integer, <i>x</i>,
                    repeatedly applying <i>3x + 1</i> if odd and 
                    <i> x/2</i> if even will eventually lead to 1.</p>
                <VeryEmphaticPar>No one knows if this is true.</VeryEmphaticPar>
                    
            </LeftColumn>
            <RightColumn>
                <Collatz number={number} /> 
            </RightColumn>
            </GridDiv>
            
          
              
         
        );
    }
}
export default App;
