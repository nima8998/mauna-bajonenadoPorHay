import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'
import styled from 'styled-components'

export default function Talle() {
    const [talle, setTalle] = useState();

  const handleChange = (event) => {
    setTalle(event.target.talle);
  };

    return (
        <TalleContainer>
            <FormControl>
                <FormLabel>Talle</FormLabel>
                    <RadioGroup row value={talle} onChange={handleChange}>
                        <FormControlLabel value="Talle 1" control={<Radio />} label="Talle 1" />
                        <FormControlLabel value="Talle 2" control={<Radio />} label="Talle 2" />
                        <FormControlLabel value="Talle 3" control={<Radio />} label="Talle 3" />
                    </RadioGroup>
            </FormControl>
        </TalleContainer>
    )
}

const TalleContainer = styled.div`
    text-align: center;
`