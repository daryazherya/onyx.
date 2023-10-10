import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ru from 'date-fns/locale/ru';
import SelectChannels from '../Indicators/SelectChannels';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Radio, RadioGroup } from '@mui/material';


const FormData = () => {

    const [valueStart, setValueStart] = useState(new Date());
    const [valueEnd, setValueEnd] = useState(new Date());
    const [value, setValue] = useState('1');
    const [formData, setFormData] = useState({
    });

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return <form className="form__history">
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
            <DemoContainer  sx={{ marginRight: 2}} components ={['DatePicker', 'DatePicker']}>
                <DatePicker 
                    sx={{ width: 150, '& .MuiButtonBase-root ': {
                        marginRight: '5px',
                        padding: 0
                    }}}
                    label="Начало периода"
                    value={valueStart}
                    onChange={(valueStart) => setValueStart(valueStart)}
                    disableFuture
                />
                <DatePicker
                    sx={{ width: 150, '& .MuiButtonBase-root ': {
                        marginRight: '5px',
                        padding: 0
                    }}}
                    label="Конец периода"
                    value={valueEnd}
                    onChange={(valueEnd) => setValueEnd(valueEnd)}
                    disableFuture
                />
            </DemoContainer>
            <fieldset className='form__typeAverage'>
                <legend className='form__typeAverage_description'>
                    Тип усреднений
                </legend>
                <RadioGroup 
                    value = {value}
                    onChange = {handleChange}
                    sx = {{'&.MuiFormGroup-root' : {
                    display: 'block'
                    }}}
                >
                    <FormControlLabel sx={{
                        '& .MuiTypography-root': {
                        fontSize: '15px',
                        }}} 
                        control={ <Radio
                        value = '1'
                        /> } 
                        label="Базовые 20 мин" 
            
                    />
                    <FormControlLabel  sx={{
                        '& .MuiTypography-root': {
                        fontSize: '15px',
                        }}} 
                        control={<Radio 
                        value = "2"
                        />} 
                        label="Час" 
                        
                    />
                    <FormControlLabel sx={{
                        '& .MuiTypography-root': {
                        fontSize: '15px',
                        }}} 
                        control={<Radio 
                        value = "3"
                        />} 
                        label="День" 
                    />
                    <FormControlLabel sx={{
                        '& .MuiTypography-root': {
                        fontSize: '15px',
                        }}} 
                        control={<Radio 
                        value= "4"
                        />} 
                        label="Месяц" 
                    />
                </RadioGroup>
            </fieldset>
            {/* <SelectChannels/> */}
            <Button sx={{ 
                fontSize: 12, 
                height: 40, 
                alignSelf: 'center', 
                marginLeft: 2 
                }} 
                variant="contained">
                    Показать
            </Button>
        </LocalizationProvider>
    </form>;
}
 
export default FormData;