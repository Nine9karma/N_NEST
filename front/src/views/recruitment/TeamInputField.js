import React from 'react'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

const fields = [
  { label: '프로젝트 제목', name: 'teamTitle', required: true },
  { label: '과목명', name: 'teamSubject', required: true },
  { label: '교수명', name: 'teamProfessor', required: false },
  { label: '팀명', name: 'teamName', required: true },
  { label: '프로젝트 설명 (쉼표로 구분)', name: 'teamDescription', required: false },
  { label: '기술 스택 (쉼표로 구분)', name: 'techStack', required: true },
  { label: '역할 (쉼표로 구분)', name: 'teamRole', required: false }
]

const TeamInputField = ({ teamData, setTeamData }) => {
  const handleChange = e => {
    const { name, value } = e.target
    setTeamData({ ...teamData, [name]: value })
  }

  return (
    <Box>
      {fields.map(field => (
        <TextField
          key={field.name}
          label={field.label}
          name={field.name}
          value={teamData[field.name]}
          onChange={handleChange}
          fullWidth
          margin='normal'
          required={field.required}
        />
      ))}
      <FormControl fullWidth margin='normal'>
        <InputLabel id='max-head-label'>최대 인원 수</InputLabel>
        <Select
          labelId='max-head-label'
          id='max-head'
          value={teamData.maxHead}
          onChange={e => setTeamData({ ...teamData, maxHead: e.target.value })}
        >
          {[...Array(6).keys()].map(i => (
            <MenuItem key={i} value={i}>
              {i === 0 ? '선택하세요' : i}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default TeamInputField