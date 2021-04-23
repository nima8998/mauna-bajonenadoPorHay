import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'

import '../css/Talle.css'

export default function Talle() {
    const [talle, setTalle] = useState();

  const handleChange = (event) => {
    setTalle(event.target.talle);
  };

    return (
        <div className='Talle'>
            <FormControl>
                <FormLabel>Talle</FormLabel>
                    <RadioGroup row aria-label="gender" name="gender1" value={talle} onChange={handleChange}>
                        <FormControlLabel value="Talle 1" control={<Radio />} label="Talle 1" />
                        <FormControlLabel value="Talle 2" control={<Radio />} label="Talle 2" />
                        <FormControlLabel value="Talle 3" control={<Radio />} label="Talle 3" />
                    </RadioGroup>
            </FormControl>
        </div>
    )
}
