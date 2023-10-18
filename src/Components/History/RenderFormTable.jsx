import RenderFormTitles from "./RenderFormTitles";
import RenderDateAndTime from "./RenderDateAndTime";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const formDataa =  [
    {
        "Key": {
            "m_strUnit": "мг/м3",
            "m_dPDK": 0.400000005960464,
            "m_dPDKss": 0.0599999986588955,
            "m_strAverageAlg": "0",
            "m_nSubstance": 2,
            "Empty": false,
            "ServerID": 1,
            "PostID": 1,
            "DeviceID": 101,
            "ChannelID": 1,
            "ServerName": "DESKTOP-HC110QB\\SQLEXPRESS",
            "PostName": "Пост Дарьи",
            "DeviceName": "Noise",
            "ChannelName": "Оксид азота"
        },
        "Value": [
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 1,
                "Begin": "2023-10-13T10:00:00",
                "End": "2023-10-13T11:00:00",
                "Period": "H",
                "Value": 0.0342470146715641,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 11:00:00",
                "StrValue": "0,03424701"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 1,
                "Begin": "2023-10-13T11:00:00",
                "End": "2023-10-13T12:00:00",
                "Period": "H",
                "Value": 0.0324379801750183,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 12:00:00",
                "StrValue": "0,03243798"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 1,
                "Begin": "2023-10-13T12:00:00",
                "End": "2023-10-13T13:00:00",
                "Period": "H",
                "Value": 0.0356932878494263,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 13:00:00",
                "StrValue": "0,03569329"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 1,
                "Begin": "2023-10-13T13:00:00",
                "End": "2023-10-13T14:00:00",
                "Period": "H",
                "Value": 0.049226950854063,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 14:00:00",
                "StrValue": "0,04922695"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 1,
                "Begin": "2023-10-13T14:00:00",
                "End": "2023-10-13T15:00:00",
                "Period": "H",
                "Value": 0.0659149661660194,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 15:00:00",
                "StrValue": "0,06591497"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 1,
                "Begin": "2023-10-13T15:00:00",
                "End": "2023-10-13T16:00:00",
                "Period": "H",
                "Value": 0.0739052519202232,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 16:00:00",
                "StrValue": "0,07390525"
            }
        ]
    },
    {
        "Key": {
            "m_strUnit": "мг/м3",
            "m_dPDK": 0.0850000008940697,
            "m_dPDKss": 0.0399999991059303,
            "m_strAverageAlg": "0",
            "m_nSubstance": 1,
            "Empty": false,
            "ServerID": 1,
            "PostID": 1,
            "DeviceID": 101,
            "ChannelID": 2,
            "ServerName": "DESKTOP-HC110QB\\SQLEXPRESS",
            "PostName": "Пост Дарьи",
            "DeviceName": "Noise",
            "ChannelName": "Диоксид азота"
        },
        "Value": [
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 2,
                "Begin": "2023-10-13T10:00:00",
                "End": "2023-10-13T11:00:00",
                "Period": "H",
                "Value": 0.011278928257525,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 11:00:00",
                "StrValue": "0,01127893"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 2,
                "Begin": "2023-10-13T11:00:00",
                "End": "2023-10-13T12:00:00",
                "Period": "H",
                "Value": 0.017317583784461,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 12:00:00",
                "StrValue": "0,01731758"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 2,
                "Begin": "2023-10-13T12:00:00",
                "End": "2023-10-13T13:00:00",
                "Period": "H",
                "Value": 0.0384308509528637,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 13:00:00",
                "StrValue": "0,03843085"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 2,
                "Begin": "2023-10-13T13:00:00",
                "End": "2023-10-13T14:00:00",
                "Period": "H",
                "Value": 0.0523086711764336,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 14:00:00",
                "StrValue": "0,05230867"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 2,
                "Begin": "2023-10-13T14:00:00",
                "End": "2023-10-13T15:00:00",
                "Period": "H",
                "Value": 0.0508223846554756,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 15:00:00",
                "StrValue": "0,05082238"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 2,
                "Begin": "2023-10-13T15:00:00",
                "End": "2023-10-13T16:00:00",
                "Period": "H",
                "Value": 0.0303135458379984,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 16:00:00",
                "StrValue": "0,03031355"
            }
        ]
    },
    {
        "Key": {
            "m_strUnit": "мг/м3",
            "m_dPDK": 5.0,
            "m_dPDKss": 3.0,
            "m_strAverageAlg": "0",
            "m_nSubstance": 3,
            "Empty": false,
            "ServerID": 1,
            "PostID": 1,
            "DeviceID": 101,
            "ChannelID": 3,
            "ServerName": "DESKTOP-HC110QB\\SQLEXPRESS",
            "PostName": "Пост Дарьи",
            "DeviceName": "Noise",
            "ChannelName": "Оксид углерода"
        },
        "Value": [
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 3,
                "Begin": "2023-10-13T10:00:00",
                "End": "2023-10-13T11:00:00",
                "Period": "H",
                "Value": 0.901016473770142,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 11:00:00",
                "StrValue": "0,9010165"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 3,
                "Begin": "2023-10-13T11:00:00",
                "End": "2023-10-13T12:00:00",
                "Period": "H",
                "Value": 0.64115983247757,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 12:00:00",
                "StrValue": "0,6411598"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 3,
                "Begin": "2023-10-13T12:00:00",
                "End": "2023-10-13T13:00:00",
                "Period": "H",
                "Value": 0.34866800904274,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 13:00:00",
                "StrValue": "0,348668"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 3,
                "Begin": "2023-10-13T13:00:00",
                "End": "2023-10-13T14:00:00",
                "Period": "H",
                "Value": 1.26017165184021,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 14:00:00",
                "StrValue": "1,260172"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 3,
                "Begin": "2023-10-13T14:00:00",
                "End": "2023-10-13T15:00:00",
                "Period": "H",
                "Value": 1.90656411647797,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 15:00:00",
                "StrValue": "1,906564"
            },
            {
                "ID": 0,
                "DeviceID": 101,
                "ChannelID": 3,
                "Begin": "2023-10-13T15:00:00",
                "End": "2023-10-13T16:00:00",
                "Period": "H",
                "Value": 2.47742533683777,
                "PeriodDesc": "Час",
                "Valid": true,
                "Status": "O",
                "StatusDesc": "ОК",
                "StrEnd": "2023-10-13 16:00:00",
                "StrValue": "2,477425"
            }
        ]
    }
  ]



const RenderFormTable = () => {

    return <TableContainer component={Paper} >
        <Table className="form-table">
            <TableHead className="form-table__table-head" >
                <TableRow >
                <TableCell sx={{fontWeight: '800'}} >Дата и время</TableCell>
                <RenderFormTitles data={formDataa}/>
                </TableRow>
            </TableHead>
            <TableBody className="form-table__table-body">
                <RenderDateAndTime data={formDataa}/>
            </TableBody>
        </Table> 
    </TableContainer>
}
 
export default RenderFormTable;